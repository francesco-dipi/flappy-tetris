(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0" :scope "provided"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [adzerk/boot-reload "0.5.2" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [javax.xml.bind/jaxb-api "2.3.0"] ; necessary for Java 9 compatibility
                  [nightlight "RELEASE"]
                  [org.clojure/clojurescript "1.10.312"]
                  [play-cljs "1.2.0"]
                  [edna "1.6.0"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[nightlight.boot :refer [nightlight sandbox]])

(deftask dev []
  (comp
    (watch)
    (reload)
    (sandbox :file "java.policy")
    (cljs :source-map true :optimizations :none :compiler-options {:asset-path "main.out"})
    (target)))

(deftask run []
  (comp
    (serve :dir "target/public" :port 3000)
    (dev)
    (nightlight :port 4000 :url "http://localhost:3000")))

(deftask build []
  (comp (cljs :optimizations :advanced) (target)))

