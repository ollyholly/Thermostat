$(document).ready(function () {
  let thermostat = new Thermostat;

  $.get('http://localhost:4567/temperature', function(data) {
    thermostat.temperature = JSON.parse(data);
    updateTemperature();
  })

  $.get('http://localhost:4567/psm', function(data) {
    thermostat.powerSavingMode = JSON.parse(data);
    updatePSM();
  })

  $.get('http://localhost:4567/city', function(data) {
    thermostat.currentCity = JSON.parse(data);
    updateCity();
  })

  currentCityTemperature();

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

  $('#customSwitch1').change(function() {
    if(this.checked) {
      thermostat.switchPSMOn();
      updatePSM();
      sendPSM();
    } else {
      thermostat.switchPSMOff();
    updatePSM();
    sendPSM();
    }
});

  // $('#customSwitch1').is(":checked")
  // $('#psm-on').click(function () {
  //   thermostat.switchPSMOn();
  //   updatePSM();
  //   sendPSM();
  // })

  // $('#psm-off').click(function () {
  //   thermostat.switchPSMOff();
  //   updatePSM();
  //   sendPSM();
  // })
  // $('#psm-on').click(function () {
  //   thermostat.switchPSMOn();
  //   updatePSM();
  //   sendPSM();
  // })

  // $('#psm-off').click(function () {
  //   thermostat.switchPSMOff();
  //   updatePSM();
  //   sendPSM();
  // })

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })
  
 function currentCityTemperature() {
  let city = thermostat.currentCity;
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
 }

  $('#current-city').change(function() {
    let city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08cbc1ed2f21191b044690a5e06c9dde&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    thermostat.currentCity = city;
    sendCity();
    });
  })

  function sendTemperature() {
    var temperature = {temperature: thermostat.temperature};
    $.post('http://localhost:4567/temperature', temperature);
  }

  function sendPSM() {
    var psm = {psm: thermostat.powerSavingMode};
    $.post('http://localhost:4567/psm', psm);
  }

  function sendCity() {
    var city = {city: thermostat.currentCity};
    console.log(city);
    $.post('http://localhost:4567/city', city);
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function updatePSM() {
    $('#psm-status').text(thermostat.PSMStatus());
  }

  function updateCity() {
    console.log(thermostat.currentCity);
    $('#current-city').val(thermostat.currentCity);
  }

});
