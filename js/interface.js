$(document).ready(function () {
  let thermostat = new Thermostat;

  $.get('http://localhost:4567/temperature', function(data) {
    thermostat.temperature = parseInt(data);
    updateTemperature();
  })

  $.get('http://localhost:4567/psm', function(data) {
    thermostat.powerSavingMode = JSON.parse(data);
    updatePSM();
  })

  $('#up').click(function () {
    thermostat.up();
    updateTemperature();
    sendTemperature();
  })

  $('#down').click(function () {
    thermostat.down();
    updateTemperature();
    sendTemperature();
  })

  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
    sendTemperature();
  })

  $('#psm-on').click(function () {
    thermostat.switchPSMOn();
    updatePSM();
    sendPSM();
    console.log(thermostat.powerSavingMode);
    console.log("psm variable: " + thermostat.powerSavingMode);
    console.log(thermostat.powerSavingMode == true);
    console.log("Status: "+ thermostat.PSMStatus());
  })

  $('#psm-off').click(function () {
    thermostat.switchPSMOff();
    updatePSM();
    sendPSM();
    console.log("psm variable: " + thermostat.powerSavingMode);
    console.log(thermostat.powerSavingMode == true);
    console.log("Status: "+ thermostat.PSMStatus());
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
  
  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    })
  })

  function sendTemperature() {
    var temperature = {temperature: thermostat.temperature};
    $.post('http://localhost:4567/temperature', temperature);
  };

  function sendPSM() {
    var psm = {psm: thermostat.powerSavingMode};
    $.post('http://localhost:4567/psm', psm);
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updatePSM() {
    $('#psm-status').text(thermostat.PSMStatus());
  };

});
