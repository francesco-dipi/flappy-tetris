(ns flappy-tetris.music
  (:require [edna.core :as edna]))

(def up
  [:piano {:tempo 300 :volume 50}
   1/8 :c 1/4 :+c])

(def down
  [:piano {:tempo 300 :volume 50}
   1/8 :+c :c 1/4 :-b])

(def edna->data-uri
  (memoize edna/edna->data-uri))

(defmacro audio-up-cljs []
  (edna->data-uri up))

(defmacro audio-down-cljs []
  (edna->data-uri down))
