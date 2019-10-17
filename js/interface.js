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

  $.get("http://localhost:4567/get-temp").responseText;

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    })
  
    $('#current-city').change(function() {
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
      })
    })

});
