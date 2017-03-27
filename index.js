var http = require('http');
var port = 3000;

	app.get('/favicon.ico', function(req, res) {
    res.send(204);
});
var server = http.createServer(function(request, response) {

    console.log(request.url);
	if ( /[^\/\+\-\*\:\d]/g.test(toString(request.url)) ) {
	    response.end("Only number need to calculate");
	} else {
	    switch (request.url) {
	        case '/':
	            response.end("Hello");
	            break;
	        default:
	        	var number = request.url.slice(1);
	        	parseInt(number,10);
	        	response.end(number);
	        	break;
	    }
    }
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})