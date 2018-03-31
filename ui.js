class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }

    display(weather) {
        this.location.textContent = `${weather.city.name}, ${weather.city.country}`;
        this.desc.textContent = weather.list[0].weather[0].description;
        this.string.textContent = weather.list[0].main.temp + ' C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.list[0].wind.speed} m/s`;
    }
}