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
    
});