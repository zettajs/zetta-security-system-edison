var Device = require('zetta-device');
var util = require('util');
var mraa = require('mraa-js');

var LED = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin;
  this._led = new mraa.Gpio(this.pin);
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .state('off')
    .name('led ' + this.pin)
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);

  this._led.dir(mraa.DIR_OUT);
  this._led.write(0);
};

LED.prototype.turnOn = function(cb) {
  this._led.write(1);
  this.state = 'on';
  cb();
};

LED.prototype.turnOff = function(cb) {
  this._led.write(0);
  this.state = 'off';
  cb();
};
