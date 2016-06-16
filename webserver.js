/**
 * Created by dat on 6/16/16.
 */
const http = require("http");
const fs = require("fs");
const url = require("url");

//create web server
http.createServer(function(request, response){
    //parse the request containing the file
    var pathName = url.parse(request.url).pathname;
    //print the pathname
    console.log("request for pathname " + pathName + " for received");

    // Read the requested file content from file system
    fs.readFile(pathName.substr(1), function(err, data){
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            //Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end();
    });
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
