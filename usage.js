/**
 * Created by dat on 6/16/16.
 */
//how to debug URL: node debug 127.0.0.1:3000

const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer( function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
});

server.listen(port, function() {
    console.log("server run at http://127.0.0.1:3000/");
    var x = 5;
    var n = x +1;
    console.log(n);
});