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

(def initial-state {:score 0
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
                             ; non threaded version
                             ;(clojure.string/join (concat (repeat (clojure.string/index-of socket "\n") ".") "\n")))
                             (range (+ 2 wall-blocks)))))))

(defn new-shape
  "Update player's tetramino (str) and make a new wall with a compatible socket"
  []
  (let [tetramino-key (random-key tetraminos)
        tetramino (tetramino-key tetraminos)
        socket (nth (:sockets tetramino) (rand-int (count (:sockets tetramino))))
          ;XXX debug
        _ (print "tetramino: " tetramino "\tsocket: " socket)]
    (swap! state assoc
      :player-rot 0
      :player-tetramino tetramino-key
      :player-str (:str tetramino)
      :wall-socket socket
      :wall-str (make-wall-str (get sockets socket))
      :wall-x (.-innerWidth js/window))))

(defn rotate [t] (
                  clojure.string/join "\n"
                   (apply map str (reverse (clojure.string/split t "\n")))))

(defn rotate-player [] (swap! state assoc :player-str (rotate (:player-str @state)) :player-rot (mod (inc (:player-rot @state)) 4)))

(defn player-width [] (* block-size (apply max (map count (clojure.string/split (:player-str @state) "\n")))))

(defn rightmost-player-x [] (+ (:player-x @state) (player-width)))

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
        (do 
          ; move wall towards player
          (swap! state assoc :wall-x (- (:wall-x @state) (+ (/ (:score @state) 10) (dyn-speed))))
          ; check if wall touches player
          (if (and
                   (= (:player-y @state) (:socket-y @state))
                   (= (:wall-socket @state)
                      (-> @state :player-tetramino tetraminos :sockets (nth (:player-rot @state)))))
            (if (<= (- (:wall-x @state) (:player-x @state)) (/ block-size 2)); TODO use when
              (do
                (new-shape)
                (do (.load audio-up) (.play audio-up))
                (swap! state assoc :score (inc (:score @state)))))
            (if (< (:wall-x @state) (rightmost-player-x))
              (swap! state assoc :player-x (- (:wall-x @state) (player-width)))))
          ; check if player has reach end of screen
          (if (< (:player-x @state) 0); TODO use when
            (do
              (swap! state assoc :score 0 :player-x (/ (.-innerWidth js/window) 3))
              (do (.load audio-down) (.play audio-down))
              (new-shape)))
          ; draw things
          (concat 
            [[:fill {:color "lightblue"} [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]]
            [[:fill {:color "orange"} (str-to-blocks (:player-str @state) (:player-x @state) (:player-y @state))]]
            [[:fill {:color "lime"} (str-to-blocks (:wall-str @state) (:wall-x @state) 0)]]
            ; score
            [[:fill {:color "green"} [:text {:value (str (:score @state)) :x (- (.-innerWidth js/window) 100) :y 30 :size 30}]]]
            ;; XXX debug:
            #_[[:line {:x1 0 :x2 1000 :y1 (:socket-y @state) :y2 (:socket-y @state)}]]
            [[:fill {:color "black"} [:text {:value (str "state: " @state ) :x 15 :y 15 :size 12}]]]))))))



(comment
  "keycodes:
  27: ESC
  32: space
  37: left
  38: up
  39: rigth
  40: down")

(comment "event names: https://github.com/google/closure-library/blob/9cddf9f215156940c5e2eb213a4740fd41481907/closure/goog/events/eventtype.js#L51")

(events/listen js/window "keydown"
  (fn [event]
    ; TODO: maybe replace case with condp =, so that there is no default case.
    (case (.-keyCode event)
      32 (rotate-player)
      38 (swap! state assoc :player-y (max 0 (- (:player-y @state) movement)))
      40 (swap! state assoc :player-y (min (-  (.-innerHeight js/window) (* block-size (count (clojure.string/split (:player-str @state) "\n")))) (+ (:player-y @state) movement)))
      27 (reset! state initial-state)
      ; W
      87 (swap! state assoc :wall-str (make-wall-str (random-value sockets)))
      ;      87 (swap! state assoc :wall-str (make-wall-str (get sockets (nth (keys sockets) (rand-int (count sockets))))))
      ; N
      78 (new-shape)
      ; L
      76 (print (-> @state :player-tetramino tetraminos :sockets (nth (:player-rot @state))))
      ((.-log js/console) (.-keyCode event)))))

(events/listen js/window "click" rotate-player)
(events/listen js/window "wheel" rotate-player) ; TODO: maybe use wheel up/down to rotate clockwise/counterclockwise?

(defn mouse-move [event]
  ; TODO I'm sure there is a cleaner way to express this... a sort of threading but with the function
  (if (not (goog.object/get (goog.object/get (goog.object/get event "event_") "sourceCapabilities") "firesTouchEvents"))
    (pointer-move event)))

(defn pointer-move [event]
    (swap! state assoc :player-y (* block-size (int (/ (.-clientY event) block-size)))))

(defn handle-touch [event]
  (if (< (.-clientX event) (/ (.-innerWidth js/window) 2))
    (rotate-player)
    (pointer-move event)))


(events/listen js/window "mousemove" mouse-move)
(events/listen js/window "touchmove" handle-touch)
(events/listen js/window "touchend" handle-touch)

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game (.-innerWidth js/window) (.-innerHeight js/window))))

(doto game
  (p/start)
  (p/set-screen main-screen))
