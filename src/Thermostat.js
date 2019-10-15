'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature += 1;
  }

  down() {
    this.temperature -= 1;
  }

  getMinTemperature() {
    return this.minTemperature;
  }
  isPowerSavingMode() {
    return this.powerSavingMode;
  }
}
