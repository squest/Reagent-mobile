(ns alfa.react
  (:require [reagent.core :as reagent :refer [render-component atom]]))

(defn selid
  [id]
  (.getElementById js/document id))

(defn jikamaka []
  [:center
   [:h1 "Hollla"]])

(defn notany []
  (render-component [jikamaka]
                    (selid "main")))

(defn main-navigation
  [title]
  [:div {:class "topcoat-list"
         :id "mainNavi"
         :on-click (fn [] (render-component [jikamaka]
                                            (selid "main-navi")))}
   [:h3 {:class "topcoat-list__header"}
    title]
   [:ul {:class "topcoat-list__container"}
    (map #(vector :li {:class "topcoat-list__item"
                       :on-click (fn [] (render-component [jikamaka]
                                                          (.getElementById js/document "main-navi")))} %)
         ["SBMPTN TPA I" "SBMPTN TPA II" "English part I" "English part II" "welo" "woo" "sd sf df df" "sdf df df"
          "dfdfdf"])]])


(defn main-page
  [title]
  [:div
   [:div {:class "topcoat-navigation-bar"
          :on-click (fn [] (render-component [jikamaka]
                                             (selid "main")))}
    [:div {:class "topcoat-navigation-bar__item center full"}
     [:h1 {:class "topcoat-navigation-bar__title"}
      title]]]
   [main-navigation "Available trolls"]])


(defn start []
  (render-component [main-page "Helo"]
                    (selid "main")))

(start)







