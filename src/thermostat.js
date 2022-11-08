'use strict';

class Thermostat {
    constructor() {
        this.MIN_TEMPERATURE = 10;
        this.temperature = 20;
    };
    getCurrentTemperature() {
        return this.temperature;
    };
    up() {
        this.temperature ++;
    };
    down() {
        if (this.isMinTemperature()) {
            return;
        }
        this.temperature--;
        
    };
    isMinTemperature() {
        return this.temperature === this.MIN_TEMPERATURE;
    }
};