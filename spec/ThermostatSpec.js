describe('Thermostat', () => {
  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('.up increases temperature by 1 degree', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('.down decreases temperature by 1 degree', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('.down does not decrease temperature below 10 degrees', () => {
    for (let temp = 20; temp >= 9; temp--) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode that is on by default', () => {
    expect(thermostat.isPowerSavingMode()).toEqual(true);
  });

  it('.switchPSMOff switches power saving mode to off', () => {
    thermostat.switchPSMOff();
    expect(thermostat.isPowerSavingMode()).toEqual(false);
  });

  it('.switchPSMOn switches power saving mode to on', () => {
    thermostat.switchPSMOff();
    thermostat.switchPSMOn();
    expect(thermostat.isPowerSavingMode()).toEqual(true);
  });

  it('when PSM is on, the maximum temperature is 25C', () => {
    expect(thermostat.getMaxTemperature()).toEqual(25);
  });

  it('when PSM is off, the maximum temperature is 32C', () => {
    thermostat.switchPSMOff();
    expect(thermostat.getMaxTemperature()).toEqual(32);
  });

  it('when PSM is on, .up cannot increase temperature beyond 25C', () => {
    for (let temp = 20; temp <= 26; temp++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('when PSM is off, .up cannot increase temperature beyond 32C', () => {
    thermostat.switchPSMOff();
    for (let temp = 20; temp <= 33; temp++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('.reset resets the temperature to 20C', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });



});
