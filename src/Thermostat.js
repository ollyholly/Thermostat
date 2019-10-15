'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MIN_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_TEMPERATURE_PSM_ON = 25;
    this.MAX_TEMPERATURE_PSM_OFF = 32;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.getCurrentTemperature() === this.getMaxTemperature()) {
      return;
    }
    this.temperature += 1;
  }

  down() {
    if (this.isMinTemperature() === true) {
      return;
    }
    this.temperature -= 1;
  }

  isMinTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }

  isPowerSavingMode() {
    return this.powerSavingMode;
  }

  switchPSMOff() {
    this.powerSavingMode = false;
  }

  switchPSMOn() {
    this.powerSavingMode = true;
  }

  getMaxTemperature() {
    if (this.isPowerSavingMode() === true) {
      return this.MAX_TEMPERATURE_PSM_ON;
    } else {
      return this.MAX_TEMPERATURE_PSM_OFF;
    }
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }


}
