// Init storage object
const storage = new Storage();

// Get stored location data
const storedLocation = storage.getLocation();

// Init weather object
const weather = new Weather(storedLocation.city, storedLocation.countrty);

// Init UI object
const ui = new Ui();

// Get and display weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Get and display weather when city changed
document.getElementById('w-change-btn').addEventListener('click', () => {
    // Change city and country passed to the api
    weather.city = document.getElementById('city').value;
    weather.country = document.getElementById('country').value;

    // get and display weather for the new location
    getWeather();

    // Save new location in the storage
    storage.setLocation(weather.city, weather.country);

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.fetchWeather()
        .then(data => {
            ui.display(data);
        })
        .catch(err => console.log(err));
}