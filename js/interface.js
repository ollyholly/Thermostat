$(document).ready(function () {
  let thermostat = new Thermostat;
  $('#temperature').text(thermostat.getCurrentTemperature());

  $('#up').click(function () { 
    thermostat.up();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#down').click(function () { 
    thermostat.down();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#reset').click(function () { 
    thermostat.reset();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#pwm-on').click(function () { 
    thermostat.switchPSMOn();
    $('#pwm-status').text(thermostat.PSMStatus());
  });
  
  $('#pwm-off').click(function () { 
    thermostat.switchPSMOff();
    $('#pwm-status').text(thermostat.PSMStatus());
  });


});