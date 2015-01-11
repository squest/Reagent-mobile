(ns alfa.react
  (:require [reagent.core :as reagent :refer [render-component atom]]))

(.initializeTouchEvents js/React true)

(defn selid
  [id]
  (.getElementById js/document id))

(defn jikamaka []
  [:center
   [:h1 "Hollla"]])

(defn main-navigation
  [title]
  [:div {:class "topcoat-list"}
   [:h3 {:class "topcoat-list__header"}
    title]
   [:ul {:class "topcoat-list__container"}
    (map #(vector :li {:class "topcoat-list__item"
                       :onTouchEnd (fn [] (render-component [jikamaka]
                                                             (selid "mainNavi")))} %)
         ["SBMPTN TPA I" "SBMPTN TPA II" "English part I" "Well jone"])]])


(defn main-page
  [title]
  [:div
   [:div {:class "topcoat-navigation-bar"}
    [:div {:class "topcoat-navigation-bar__item center full"}
     [:h1 {:class "topcoat-navigation-bar__title"}
      title]]]
   [main-navigation "Available trolls"]])


(defn start []
  (render-component [main-page "Helo"]
                    (selid "main")))

(start)







