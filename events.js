//import events module
var events = require("events");
//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follow
var connectHandler = function connected() {
	console.log("connected successful.");
	//fire the data_received event
	eventEmitter.emit("data_received");
}

//bind the data_received envet with anonymous function
eventEmitter.on("data_received", function () {
	console.log("data_received successful.");
});

//bind the connect event with handle
eventEmitter.on("connection", connectHandler);

//fire the connection event
eventEmitter.emit("connection");



console.log("End Program!");
