(set! m mori)

(React.initializeTouchEvents true)

(set! MainList
			(React.createClass
				{ handle-click
				 (fn [event]
					 ($.ajax {url "http://www.lispyway.com/welldone"
										jsonp "callback"
										success (fn [data]
															(set! tmp data["name"])
															(alert tmp)
															(React.render
																<Bringas pasca= {tmp}>
																(document.getElementById "main-list")))}))}))