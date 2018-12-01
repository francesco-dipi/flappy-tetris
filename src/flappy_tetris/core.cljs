(ns flappy-tetris.core
  (:require [play-cljs.core :as p]
            [goog.events :as events])
  (:require-macros [flappy-tetris.music :as m]))

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

(defonce audio-up (js/document.createElement "audio"))
(set! (.-src audio-up) (m/audio-up-cljs))

(defonce audio-down (js/document.createElement "audio"))
(set! (.-src audio-down) (m/audio-down-cljs))

(def block-size 30)
(def movement block-size)
(def initial-player-x (/ (.-innerWidth js/window) 3)) ; starts at the first thrid of screen

(def tetraminos {
                 :T {:str " . \n..."
                     :sockets [:T :lT :uT :J]}
                 :I {:str ".\n.\n.\n."
                     :sockets [:I :hI :I :hI]}
                 :O {:str "..\n.."
                     :sockets [:O :O :O :O]}
                 :S {:str " ..\n.. "
                     :sockets [:uT :uN :uT :uN]}
                 :Z {:str ".. \n .."
                     :sockets [:T :N :T :N]}
                 :L {:str ". \n. \n.."
                     :sockets [:L :P :J :N]}
                 :J {:str " .\n .\n.."
                     :sockets [:J :uP :uL :N]}})

(def initial-state {:score -2
                    :highscore 0
                    :player-x initial-player-x
                    :player-y (/ (.-innerHeight js/window) 2)})

(def sockets {
              :I  " \n \n \n \n"
              :hI "    \n"
              :uL "  \n .\n .\n"
              :L  " .\n .\n  \n"
              :J  " \n \n \n"
              :lT " .\n  \n .\n"
              :O  "  \n  \n"
              :uT "  \n .\n"
              :T  " .\n  \n"
              :N  " \n \n"
              :uN ".\n \n \n"
              :P  "   \n ..\n"
              :uP " ..\n   \n"})


(defn random-key
  "Return a random key from a map"
  [m]
  (nth (keys m) (rand-int (count m))))

(defn random-value
  "Return a random value from a map"
  [m]
  (random-key m))

(defn str-to-blocks
  "Return a block shape represented by a string s and translated by a position pos-x, pos-y"
  [s pos-x pos-y]
  (map-indexed (fn [row line]
                 (filter some?
                   (map-indexed
                     #(case %2
                        " " nil
                        [:rect {
                                :x (+ pos-x (* %1 block-size))
                                :y (+ pos-y (* row block-size))
                                :width block-size
                                :height block-size}])
                     line)))
    (clojure.string/split s "\n")))

(defn make-wall-str [socket]
  (let [height (.-innerHeight js/window)
        socket-height (count (clojure.string/split socket "\n"))
        wall-blocks (- (int (/ height block-size)) socket-height)
        socket-position (rand-int wall-blocks)]
    (do
      (swap! state assoc :socket-y (* block-size socket-position))
      (clojure.string/join (map #(condp = %
                                   socket-position socket
                                   (-> socket
                                       (clojure.string/index-of "\n")
                                       (repeat ".")
                                       (concat "\n")
                                       clojure.string/join))
                             (range (+ 2 wall-blocks)))))))

(defn new-shape
  "Update player's tetramino (str) and make a new wall with a compatible socket"
  []
  (let [tetramino-key (random-key tetraminos)
        tetramino (tetramino-key tetraminos)
        socket (nth (:sockets tetramino) (rand-int (count (:sockets tetramino))))]
    (swap! state assoc
      :player-rot 0
      :player-tetramino tetramino-key
      :player-str (:str tetramino)
      :wall-socket socket
      :wall-str (make-wall-str (get sockets socket))
      :wall-x (.-innerWidth js/window))))

(defn rotate [t]
  (clojure.string/join "\n"
                  (apply map str (reverse (clojure.string/split t "\n")))))

(defn player-width [] (* block-size (apply max (map count (clojure.string/split (:player-str @state) "\n")))))

(defn rightmost-player-x [] (+ (:player-x @state) (player-width)))

(defn screen-msg [subject & body]
  [[:fill {:color "lightblue"} [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]
   [:fill {:color "#ffffff99"} [:rect {:x 30 :y 100 :width (- (.-innerWidth js/window) 60) :height 300}]]
   [:fill {:color "black"}
    [:text {:value subject :x (- (/ (.-innerWidth js/window) 2) (* 6 (count subject))) :y 150 :size 25 :style :bold}]
    (map-indexed (fn [offset t] [:text {:value t :x 50 :y (+ 200 (* 25 offset)) :size 18 }]) body)]])

(defn dyn-speed
  "dynamic speed, proportional to game's fps"
  []
  (* (/ (.-innerWidth js/window) block-size) (p/get-delta-time game) 0.012))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (do
        (reset! state initial-state)
        (new-shape)))
        
    (on-hide [this])
    (on-render [this]
      (p/render game
        (case (:score @state)
          -2 (screen-msg
               "Press any key to start game"
               "Mouse move to move"
               "Mouse wheel to rotate"
               "" ""
               "Touch on right half to move"
               "Touch on left half to rotate")
          -1 (screen-msg
               (str "GAME OVER - highscore: " (:highscore @state))
               "Press any key to restart game")
          (do
            ; move wall towards player
            (swap! state assoc :wall-x (- (:wall-x @state) (+ (/ (:score @state) 10) (dyn-speed))))
            ; check if wall touches player
            (if (and
                     (= (:player-y @state) (:socket-y @state))
                     (= (:wall-socket @state)
                        (-> @state :player-tetramino tetraminos :sockets (nth (:player-rot @state)))))
              (when (<= (- (:wall-x @state) (:player-x @state)) (/ block-size 2))
                (new-shape)
                (do (.load audio-up) (.play audio-up))
                (swap! state assoc :score (inc (:score @state))))
              (if (< (:wall-x @state) (rightmost-player-x))
                (swap! state assoc :player-x (- (:wall-x @state) (player-width)))))
            ; check if player has reach end of screen
            (when (< (:player-x @state) 0)
              (swap! state assoc :highscore (max (:score @state ) (:highscore @state)) :score -1 :player-x (/ (.-innerWidth js/window) 3))
              (do (.load audio-down) (.play audio-down))
              (new-shape))
            ; draw things
            (concat 
              [[:fill {:color "lightblue"} [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]]
              [[:fill {:color "orange"} (str-to-blocks (:player-str @state) (:player-x @state) (:player-y @state))]]
              [[:fill {:color "lime"} (str-to-blocks (:wall-str @state) (:wall-x @state) 0)]]
              [[:fill {:color "green"} [:text {:value (str "Score: " (:score @state)) :x (- (.-innerWidth js/window) 150) :y 30 :size 30}]]])))))))


(defn eventually-reset [] (when (< (:score @state) 0) (swap! state assoc :score 0) (new-shape)))

(defn rotate-player []
  (eventually-reset)
  (swap! state assoc :player-str (rotate (:player-str @state)) :player-rot (mod (inc (:player-rot @state)) 4)))

(defn pointer-move [event]
    (swap! state assoc :player-y (* block-size (int (/ (.-clientY event) block-size)))))

(defn mouse-move [event]
  ; TODO I'm sure there is a cleaner way to express this... a sort of threading but with the function
  (if (not (goog.object/get (goog.object/get (goog.object/get event "event_") "sourceCapabilities") "firesTouchEvents"))
    (pointer-move event)))

(defn handle-touch [event]
  (eventually-reset)
  (if (< (.-clientX event) (/ (.-innerWidth js/window) 2))
    (rotate-player)
    (pointer-move event)))


(events/listen js/window "wheel" rotate-player) ; TODO: maybe use wheel up/down to rotate clockwise/counterclockwise?
(events/listen js/window "click" rotate-player)
(events/listen js/window "mousemove" mouse-move)
(events/listen js/window "touchmove" handle-touch)
(events/listen js/window "touchend" handle-touch)
(events/listen js/window "keydown"
  (fn [event] (eventually-reset)))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game (.-innerWidth js/window) (.-innerHeight js/window))))

(doto game
  (p/start)
  (p/set-screen main-screen))
