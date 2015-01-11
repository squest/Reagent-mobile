(ns alfa.core
  (:gen-class)
  (:require [zenpack.core :refer :all]
            [compojure.core :refer :all]
            [noir.response :refer [edn json jsonp content-type]]))

(defonce server (atom nil))

(defroutes
  my-site
  (GET "/" [req]
       (let [mm (:callback (:params req))]
         (jsonp mm {:name "hello"})))
  (GET "/welldone" req
       (let [mm (:callback (:params req))]
         (content-type "application/javascript" (jsonp mm {:name "hello"}))))
  (error404 "No find nothing here!"))

(defn run
  [port]
  (start-site server my-site port))

(defn stop
  []
  (stop-site server))


(defn -main
  []
  (run 3000))


