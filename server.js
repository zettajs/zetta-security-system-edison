var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-edison-driver');
var Microphone = require('zetta-microphone-edison-driver');
var LED = require('./devices/led');
var Bean = require('zetta-bean-driver');
var WeMo = require('zetta-wemo-driver');

var app = require('./apps/app');

zetta()
  .use(Buzzer, 3)
  .use(Microphone, 0)
  .use(LED, 13)
  .use(Bean, 'Bean1')
  .use(WeMo)
  .use(app)
  .listen(1337, function(){
    console.log('Zetta is running at http://localhost:1337');
  });
