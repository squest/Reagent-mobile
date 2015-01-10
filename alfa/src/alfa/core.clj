(ns alfa.core
  (:require [zenpack.core :refer :all]
            [compojure.core :refer :all]
            [noir.response :refer [edn json jsonp]]))

(defonce server (atom nil))

(defroutes
  my-site
  (GET "/" [req]
       (jsonp "welldone" {:name "hello"}))
  (error404 "No find nothing here!"))

(defn run
  [port]
  (start-site server my-site port))

(defn stop
  []
  (stop-site server))





