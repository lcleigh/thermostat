document.addEventListener("DOMContentLoaded", () => {
    const updateTemperature = () => {
        document.querySelector('#temperature').innerText = thermostat.temperature;
        document.querySelector('#temperature').className = thermostat.currentEnergyUsage();
    }
  
    const thermostat = new Thermostat();
    updateTemperature();

    document.querySelector('#temp-up').addEventListener('click', () => { // event listener
        thermostat.up(); // update model
        updateTemperature(); // update view
    });

    document.querySelector('#temp-down').addEventListener('click', () => {
        thermostat.down();
        updateTemperature();
    });

    document.querySelector('#temp-reset').addEventListener('click', () => {
        thermostat.reset();
        updateTemperature();
    });

    document.querySelector('#powersaving-on').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOn();
        document.querySelector('#power-saving-status').innerText = 'ON';
        updateTemperature();
    });

    document.querySelector('#powersaving-off').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOff();
        document.querySelector('#power-saving-status').innerText = 'OFF';
        updateTemperature();
    });


    document.querySelector('#select-city').addEventListener('submit', (event) => {
        event.preventDefault();
        const city = document.querySelector('#current-city').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e902fc452118ffd0f39dcdd97a69e85d&units=metric`    
   
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.querySelector('#current-temperature').innerText = data.main.temp; // our response data!
        })
    });

});