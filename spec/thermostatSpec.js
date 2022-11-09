'use strict';

describe('Thermostat', () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', () => {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it ('increases in temperature with up()', () => {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it ('decreases in temperature with down()', () => {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it ('temperature will not go below 10', () => {
        for (let i = 0; i < 11; i++) {
            thermostat.down();
        }
        // ^ creates a loop that calls termostat.down() 11 times
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it ('has power saving mode on by default', () => {
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it ('can switch power saving mode off', () => {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it ('can switch power saving mode back on', () => {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it  ('if power saving mode is on the max temp is 25', () => {
        for (let i = 0; i < 6; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it  ('if power saving mode is off the max temp is 32', () => {
        thermostat.switchPowerSavingModeOff();
        for (let i = 0; i < 13; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it ('temperature can be reset to 20', () => {
        for (let i = 0; i < 10; i++) {
            thermostat.up();
        }
        thermostat.reset();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it ('current energy usage is low when temp is 16', () => {
        for (let i = 0; i < 4; i++) {
            thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(16);
        expect(thermostat.currentEnergyUsage()).toBe('low-usage');
    });

    it ('current energy usage is medium when temp is 24', () => {
        for (let i = 0; i < 4; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(24);
        expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
    });

    it ('current energy usage is high when temp is 30', () => {
        thermostat.switchPowerSavingModeOff();
        for (let i = 0; i < 10; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(30);
        expect(thermostat.currentEnergyUsage()).toBe('high-usage');
    });


    
});