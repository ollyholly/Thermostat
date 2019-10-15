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
      console.log(temp);
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode that is on by default', () => {
    expect(thermostat.isPowerSavingMode()).toEqual(true);
  });


});
