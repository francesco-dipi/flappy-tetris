(ns flappy-tetris.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

(def tetraminos {
                 :T {:str " . \n..."
                     :sockets [:J :T :lT :uT]}
                 :I {:str ".\n.\n.\n."
                     :sockets [:I :hI]}
                 :O {:str "..\n.."
                     :sockets [:O]}
                 :S {:str " ..\n.. "
                     :sockets [:uT :N]}
                 :Z {:str ".. \n .."
                     :sockets [:T :N]}
                 :L {:str ". \n. \n.."
                     :sockets [:L :J :N :hL]}
                 :J {:str " .\n .\n.."
                     :sockets [:J :N :hJ :hJ]}})

(def initial-state {:text-x 20
                    :text-y 30
                    :player-x 100
                    :player-y 100
                    :player-str "."
                    :wall-x 300
                    :wall-str "...\n...\n..."})

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
              :N " \n \n"
              :hL "   \n ..\n"
              :hJ " ..\n   \n"})

(def block-size 30)
(def movement block-size)
(def speed 9) ; can be a state attribute, so that I can change it to increase difficulty...


(defn random-value
  "Return a random value from a map"
  [m]
  (get m (nth (keys m) (rand-int (count m)))))

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
    (clojure.string/join (map #(condp = %
                                 socket-position socket
                                 (-> socket
                                     (clojure.string/index-of "\n")
                                     (repeat ".")
                                     (concat "\n")
                                     clojure.string/join))
                           ; non threaded version
                           ;(clojure.string/join (concat (repeat (clojure.string/index-of socket "\n") ".") "\n")))
                           (range (+ 2 wall-blocks))))))

(defn new-shape
  "Update player's tetramino (str) and make a new wall with a compatible socket"
  []
  (let [tetramino (random-value tetraminos)
        socket (nth (:sockets tetramino) (rand-int (count (:sockets tetramino))))
        _ (print "tetramino: " tetramino "\tsocket: " socket)]
    (swap! state assoc
      :player-str (:str tetramino)
      :wall-str (make-wall-str (get sockets socket))
      :wall-x (.-innerWidth js/window))))

(defn rotate [t] (
                  clojure.string/join "\n"
                   (apply map str (reverse (clojure.string/split t "\n")))))

(defn rotate-player [] (swap! state assoc :player-str (rotate (:player-str @state))))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state initial-state))
    (on-hide [this])
    (on-render [this]
      (p/render game
        (do 
          (swap! state assoc :wall-x (- (:wall-x @state) speed))
          (concat 
              [[:fill {:color "lightgrey"} [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]]
              [[:fill {:color "blue"} (str-to-blocks (:player-str @state) (:player-x @state) (:player-y @state))]]
              [[:fill {:color "yellow"} (str-to-blocks (:wall-str @state) (:wall-x @state) 0)]]
              ;; XXX debug:
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
      32 (swap! state assoc :player-str (rotate (:player-str @state)))
      38 (swap! state assoc :player-y (max 0 (- (:player-y @state) movement)))
      40 (swap! state assoc :player-y (min (-  (.-innerHeight js/window) (* block-size (count (clojure.string/split (:player-str @state) "\n")))) (+ (:player-y @state) movement)))
      27 (reset! state initial-state)
      ; W
      87 (swap! state assoc :wall-str (make-wall-str (random-value sockets)))
      ;      87 (swap! state assoc :wall-str (make-wall-str (get sockets (nth (keys sockets) (rand-int (count sockets))))))
      ; N
      78 (new-shape)
      ; L
      76 ((.-log js/console) @state)
      ((.-log js/console) (.-keyCode event)))))

(events/listen js/window "click"
  (fn [event] (rotate-player)))

(events/listen js/window "wheel"
  (fn [event] (rotate-player)))

(events/listen js/window "mousemove"
  (fn [event]
    (swap! state assoc :player-y (* block-size (int (/ (.-clientY event) block-size))))))
;    (swap! state assoc :player-y (.-clientY event))))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game (.-innerWidth js/window) (.-innerHeight js/window))))

(doto game
  (p/start)
  (p/set-screen main-screen))

