/**
 * Created by dat on 6/16/16.
 */
const http = require("http");
var option = {host: "127.0.0.1",
    port: "8081",
    path: "/input.txt"};

// Callback function is used to deal with response
var callback = function (response) {
    //continue to update stream data
    var body = '';
    response.on("data", function(data){
        body += data;
    });

    response.on("end", function() {
        //completely received data
        console.log(body);
    });
}
// Make a request to the server
const req = http.request(option, callback);
req.end();
