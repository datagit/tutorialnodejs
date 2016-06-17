/**
 * Created by dat on 6/17/16.
 */
const express = require("express");
const app = express();

//get
app.get("/", function (req, res) {
    console.log("route:/");
    res.send("hello world.");
});

//get
app.get("/listUser", function (req, res) {
    console.log("route:/listUser");
    res.send("listUser.");
});


//post
app.post("/post", function(req, res) {
    console.log("route:/post");
    res.send("this is method post");
});

//delete
app.delete("/delete", function(req, res) {
    console.log("route:/delete");
    res.send("this is method delete");
});

//update
app.put("/put", function(req, res) {
    console.log("route:/put");
    res.send("this is method put");
});




const server = app.listen(8081, function() {
    var address = server.address().address;
    var port = server.address().port;
    console.log("Example listen at http://%s:%s", address, port);
});