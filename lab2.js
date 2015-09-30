// JavaScript source code
var url = require('url');
var http = require('http');
http.createServer(function (req, res) {
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
 // console.log(x);
    var mark = function (method) {
        if (method == "add") {

            return '+';

        }
        else if (method == "subtract") {

            return '-';

        }
        else if (method == "multiply") {

            return '*' ;

        }
        else if (method == "divide") {

            return '/';

        }
    };
    var result = function (x, y, method) {

        if (method == "add") {

            return x + y;

        }
        else if (method == "subtract") {

            return x - y;

        }
        else if (method == "multiply") {

            return x * y;

        }
        else if (method == "divide") {

            return x / y;

        }

    };
   
    res.write(x+ mark(method) +y+ '=' + result(x,y,method));
    res.end();
}


).listen(3000);