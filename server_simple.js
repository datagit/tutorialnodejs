/**
 * Created by dat on 6/16/16.
 */
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("hello world@.");
});

const server = app.listen(8081, function(){
    var address = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", address, port);
})