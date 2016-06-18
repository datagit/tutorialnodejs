/**
 * Created by ubuntu on 18/06/2016.
 */
const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));
//
// app.get("/upload", function(req, res){
//     console.log("route:/upload");
//     res.sendFile(__dirname__ + "/" + "upload.html");
// });
//
// app.post("/file_upload", function (req, res) {
//     console.log(req.files.file.name);
//     console.log(req.files.file.path);
//     console.log(req.files.file.type);
//
//     var file = __dirname + "/" + req.files.file.name;
//     fs.readFile( req.files.file.path, function (err, data) {
//         fs.writeFile(file, data, function (err) {
//             if( err ){
//                 console.log( err );
//             }else{
//                 response = {
//                     message:'File uploaded successfully',
//                     filename:req.files.file.name
//                 };
//             }
//             console.log( response );
//             res.end( JSON.stringify( response ) );
//         });
//     });
// });

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
