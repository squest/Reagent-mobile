var m = exports.m = require('mori');
React.initializeTouchEvents(true);
var MainList = exports.MainList = React.createClass({
        handleClick: function (event) {
            return $.ajax({
                url: 'http://www.lispyway.com/welldone',
                jsonp: 'callback',
                success: function (data) {
                    tmp = data;
                    alert(tmp);
                    return React.render(hiccup [
                        h1,
                        'Hello world'
                    ], document.getElementById('main-list'));
                }
            });
        }
    });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIm0iLCJleHBvcnRzIiwicmVxdWlyZSIsIlJlYWN0IiwiaW5pdGlhbGl6ZVRvdWNoRXZlbnRzIiwiTWFpbkxpc3QiLCJjcmVhdGVDbGFzcyIsImV2ZW50IiwiJCIsImFqYXgiLCJkYXRhIiwidG1wIiwiYWxlcnQiLCJyZW5kZXIiLCJoaWNjdXAiLCJoMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUtBLENBQUEsR0FBQUMsT0FBQSxDQUFBRCxDQUFBLEdBQUdFLE9BQUQsQ0FBUyxNQUFULENBQVA7QUFFQ0MsS0FBQSxDQUFNQyxxQkFBUCxDLElBQUEsRUFGQTtBQUlBLElBQUtDLFFBQUEsR0FBQUosT0FBQSxDQUFBSSxRQUFBLEdBQ0hGLEtBQUEsQ0FBTUcsV0FBUCxDQUNDO0FBQUEsUSxhQUNDLFVBQUtDLEtBQUwsRUFDQztBQUFBLG1CQUFDQyxDQUFBLENBQUVDLElBQUgsQ0FBUTtBQUFBLGdCLEtBQUssa0NBQUw7QUFBQSxnQixPQUNHLFVBREg7QUFBQSxnQixTQUVLLFVBQUtDLElBQUwsRUFDSDtBQUFBLG9CQUFNQyxHQUFOLEdBQVVELElBQVY7QUFBQSxvQkFDQ0UsS0FBRCxDQUFPRCxHQUFQLEVBREE7QUFBQSxvQkFFQSxPQUFDUixLQUFBLENBQU1VLE1BQVAsQ0FDQ0MsTUFERCxFQUNRO0FBQUEsd0JBQUNDLEVBQUQ7QUFBQSx3QkFBSSxhQUFKO0FBQUEscUJBRFIsRUFFRUMsUUFBQSxDQUFTQyxjQUFWLENBQXlCLFdBQXpCLENBRkQsRUFGQTtBQUFBLGlCQUhGO0FBQUEsYUFBUjtBQUFBLFNBRkY7QUFBQSxLQURELENBREQiLCJzb3VyY2VzQ29udGVudCI6WyIoZGVmIG0gKHJlcXVpcmUgXCJtb3JpXCIpKVxuXG4oUmVhY3QuaW5pdGlhbGl6ZVRvdWNoRXZlbnRzIHRydWUpXG5cbihkZWYgTWFpbkxpc3Rcblx0KFJlYWN0LmNyZWF0ZUNsYXNzXG5cdFx0eyBoYW5kbGUtY2xpY2tcblx0XHRcdChmbiBbZXZlbnRdXG5cdFx0XHRcdCgkLmFqYXgge3VybCBcImh0dHA6Ly93d3cubGlzcHl3YXkuY29tL3dlbGxkb25lXCJcblx0XHRcdFx0XHRcdFx0XHQganNvbnAgXCJjYWxsYmFja1wiXG5cdFx0XHRcdFx0XHRcdFx0IHN1Y2Nlc3MgKGZuIFtkYXRhXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKHNldCEgdG1wIGRhdGFbXCJuYW1lXCJdKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKGFsZXJ0IHRtcClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IChSZWFjdC5yZW5kZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgaGljY3VwIFtoMSBcIkhlbGxvIHdvcmxkXCJdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcIm1haW4tbGlzdFwiKSkpfSkpfSkpIl19
