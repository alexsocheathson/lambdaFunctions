"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Friends, welcome to the Petri Dish"); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Hello, Dish Dwellers"); 
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
