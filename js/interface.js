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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
   $('#local-temperature').text(data.main.temp);
});

displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#select-city').val();
    displayWeather(city);
});

  function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  });}
});
