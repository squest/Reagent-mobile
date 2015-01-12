(def m (require "mori"))

(React.initializeTouchEvents true)

(def MainList
	(React.createClass
		{ handle-click
			(fn [event]
				($.ajax {url "http://www.lispyway.com/welldone"
								 jsonp "callback"
								 success (fn [data]
													 (set! tmp data["name"])
													 (alert tmp)
													 (React.render
														 hiccup [h1 "Hello world"]
														 (document.getElementById "main-list")))}))}))