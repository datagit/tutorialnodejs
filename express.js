/**
 * Created by dat on 6/17/16.
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"));

//get
app.get("/", function (req, res) {
    console.log("route:/");
    res.send("hello world.");
});

//get
app.get("/index.htm", function (req, res) {
    console.log("route:/index.htm");
    res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/process_post", urlencodedParser, function (req, res) {
    console.log("route:/process_post");
    // Prepare output in JSON format
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
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