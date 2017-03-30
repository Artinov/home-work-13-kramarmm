var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {

    if (request.url === '/favicon.ico') {
        response.end();
        return;
    }

    if (request.url === '/') {

        response.end(
            "Hello this is a url calculator!\n\n" +
            "You can calculate two numbers:\n\n" +
            "(2+2) - sum\n" +
            "(2-2) - difference\n" +
            "(2/2) or (2:2) - quotient\n" +
            "(2*2) - result of multiplication\n\n" +
            "All you need is just enter your expression after \"\/\" in url.\n\n" +
            "Have fun!"
        );

    } else if (/[^\/\+\-\*\:\d]/g.test(request.url)) {
        response.end(
            "Some problems in your expression :(\n\n" +
            "Make sure that you try to calculate two numbers and use this operators:\n\n" +
            "    +\n" +
            "    -\n" +
            "    *\n" +
            "    /\n" +
            "    :\n"
            );
    } else {
        var number = request.url.slice(1);
        var numberArr = number.split(/[\/\+\-\*\:]/g);
        var signArr = number.split(/[^\/\+\-\*\:]*/g);
        if (!numberArr[1]) {
            response.end("Please, enter second number.");
        }
        if (numberArr[2] || signArr[2]) {
            response.end("Sorry, but I can calculate only two numbers for a time.");
        }
        response.end("Success :)\n\n" + number + " = " + calculate(signArr[1], numberArr[0], numberArr[1]));
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

});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + " to see your app");
})