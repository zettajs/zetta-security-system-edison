module.exports = function(server) {
  var buzzerQuery = server.where({ type: 'buzzer' });
  var microphoneQuery = server.where({ type: 'microphone' });
  var ledQuery = server.where({ type: 'led' });

  server.observe([buzzerQuery, microphoneQuery, ledQuery], function(buzzer, microphone, led){
    microphone.streams.volume.on('data', function(msg){
      if (buzzer.state === 'off' && msg.data > 600) {
        buzzer.call('turn-on-pulse', function(){});
        led.call('turn-on', function(){});

        setTimeout(function() {
          buzzer.call('turn-off', function(){});
        }, 3000);
      }
    });
  });
}
