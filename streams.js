/**
 * Created by ubuntu on 15/06/2016.
 */
var fs = require("fs");
var data = '';
var index = 0;

//create a readable stream
var readerStream = fs.createReadStream("data.txt");
//set the encoding to be UTF8
readerStream.setEncoding("UTF8");
//handle stream event data, end and error
readerStream.on("data", function (chuck) {
    console.log(index++);
    data += chuck;
});

readerStream.on("end", function (){
    console.log(data);
});

readerStream.on("error", function (err){
    console.log(err.stack);
});

console.log("End Program.");