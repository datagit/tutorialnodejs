/**
 * Hello world program in Nodejs!
 * */
var http = require("http");

http.createServer(function(request, response) {
	//send the HTTP header
	//HTTP status: 200: ok
	//content type: text/plain
	//http://www.tutorialspoint.com/nodejs/nodejs_response_object.htm
	response.writeHead(200, {"Content-Type": "text/plain"});
	//send the response body as Hello world
	response.end("Hello world!\n");
}).listen(8081);

//console will print the message
console.log("Server running at http://127.0.0.1:8081");
