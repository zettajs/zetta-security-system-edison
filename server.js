var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-edison-driver');
var Microphone = require('zetta-microphone-edison-driver');
var LED = require('./devices/led');

var app = require('./apps/app');

zetta()
  .use(Buzzer, 3)
  .use(Microphone, 0)
  .use(LED, 13)
  .use(app)
  .listen(1337, function(){
    console.log('Zetta is running at http://localhost:1337');
  });
