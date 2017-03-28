var http = require('http');
var port = 3000;


var server = http.createServer(function(request, response) {

    if (request.url !== '/favicon.ico') {

        if (request.url === '/') {
            response.end("Hello this is a url calculator!\nEnter two numbers afrer \/ in url.");
        } else if (/[^\/\+\-\*\:\d]/g.test(request.url)) {
            response.end("Only numbers can be calculate.\nPlease, enter a number.");
        } else {
            var number = request.url.slice(1);
            var numberArr = number.split(/[\/\+\-\*\:]/g);
            var signArr = number.split(/[^\/\+\-\*\:]*/g);
            if (!numberArr[1]) {
            	response.end("Please, enter second number.");
            }
            if (numberArr[2]||signArr[2]) {
            	response.end("Sorry, but I can calculate only two numbers for a time.");
            }
            response.end("Success :)\n\n" + number + " = " + calculate(signArr[1], numberArr[0], numberArr[1]) + "");
        }

        function calculate(op, num1, num2) {
            var result = 0;
            var n1 = parseInt(num1);
            var n2 = parseInt(num2);
            switch (op) {
                case "+":
                    result = n1 + n2;
                    break;
                case "-":
                    result = n1 - n2;
                    break;
                case "*":
                    result = n1 * n2;
                    break;
                case ":":
                    result = n1 / n2;
                    break;
                case "/":
                    result = n1 / n2;
                    break;
            }
            return result;
        }
    }
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + " to see your app");
})