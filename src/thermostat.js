'use strict';

class Thermostat {
    constructor() {
        this.DEFAULT_TEMPERATURE = 20;
        this.MIN_TEMPERATURE = 10;
        this.temperature = 20;
        this.powerSavingMode = true;
        this.MAX_TEMP_PSM_ON = 25;
        this.MAX_TEMP_PSM_OFF = 32;
        this.LOW_ENERGY_USAGE_LIMIT = 18;
        this.MED_ENERGY_USAGE_LIMIT = 25;

    };

    getCurrentTemperature() {
        return this.temperature;
    };

    up() {
        if (this.isMaxTemperature()) {
            return;
        }
        this.temperature ++;
    };

    down() {
        if (this.isMinTemperature()) {
            return;
        }
        this.temperature --;
        
    };

    isMinTemperature() {
        return this.temperature === this.MIN_TEMPERATURE;
    };

    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    };

    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    };

    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    };

    isMaxTemperature() {
        if (this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_TEMP_PSM_OFF;
        }
        return this.temperature === this.MAX_TEMP_PSM_ON;
    };

    reset() {
        this.temperature = 20;
    };

    // < 18 is low usage
    // <= 24 is medium usage
    // > 24 is high usage
    currentEnergyUsage() {
        if (this.getCurrentTemperature() < this.LOW_ENERGY_USAGE_LIMIT) {
            return 'low-usage';
        }
        if (this.getCurrentTemperature() <= this.MED_ENERGY_USAGE_LIMIT) {
            return 'medium-usage';
        }
        return 'high-usage';
    };

    
};