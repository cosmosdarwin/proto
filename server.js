var http = require('http');

var server = http.createServer( function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.end('<blink>Hello, world.</blink>');
});

server.listen(8080);