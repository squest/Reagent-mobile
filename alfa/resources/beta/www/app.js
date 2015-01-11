React.initializeTouchEvents(true);

var m = mori;

var MainList = React.createClass({
    handleClick : function (event) {
        $.ajax({
            url: "http://www.lispyway.com/welldone",
            jsonp: "callback",
            dataType: "jsonp",
            headers: {
                "Accept": "application/javascript; charset=utf-8",
                "Content-Type": "application/javascript; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            },

            success: function (data) {
                var tmp = data["name"];
                alert(tmp);
                React.render(
                    <Bringas pasca={tmp} />,
                    document.getElementById('menu-list')
                );
            }
        });
    },
    anotherClick : function (event) {
      React.render (
          <h3>Hohollala</h3>, document.getElementById('menu-list')
      )  ;
    },
    oneMoreClick : function (event) {
      React.render(
          <h2>Holala</h2>, document.getElementById('menu-list')
      )  ;
    },
    render : function () {
        return (
            <div className="topcoat-list">
                <h2 className="topcoat-list__header">
                    Available Drills
                </h2>
                <ul className="topcoat-list__container">
                    <li className="topcoat-list__item"
                        onTouchEnd={this.handleClick}
                        onClick={this.handleClick}>
                        Item 1
                    </li>
                    <li className="topcoat-list__item"
                        onTouchEnd={this.anotherClick}
                        onClick={this.anotherClick}>
                        Item 2
                    </li>
                    <li className="topcoat-list__item"
                        onTouchEnd={this.oneMoreClick}
                        onClick={this.oneMoreClick}>
                        Item 3
                    </li>
                </ul>
            </div>
        );
    }
});

var Bringas = React.createClass({
    render: function () {
        return (
            <div>
                <h1> {this.props.pasca} </h1>
            </div>
        );
    }
});

var Header = React.createClass({
    render : function () {
        return (
            <div className="topcoat-navigation-bar">
                <div className="topcoat-navigation-bar__item center full">
                    <h1 className="topcoat-navigation-bar__title">Vocab Drills</h1>
                </div>
            </div>
        );
    }
});

var MainPage = React.createClass({
   render : function () {
       return (
           <div>
               <Header />
               <MainList />
           </div>
       )
   }
});



React.render(
    <MainPage />,
    document.getElementById('header')
);


