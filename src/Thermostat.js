'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MIN_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_TEMPERATURE_PSM_ON = 25;
    this.MAX_TEMPERATURE_PSM_OFF = 32;
    this.LOW_ENERGY_USAGE_LIMIT = 18;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
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

  PSMStatus() {
    if (this.powerSavingMode === true) {
      return "on"
    } else {
      return "off"
    }
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

  energyUsage() {
    if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT) {
      return "low-usage"
    } else if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "high-usage"
    } else {
      return "medium-usage"
    }
  }

}
