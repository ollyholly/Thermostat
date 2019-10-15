$(document).ready(function () {
  let thermostat = new Thermostat;

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  updateTemperature();


  $('#up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
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
