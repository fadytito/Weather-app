class Weather {
    constructor(city, country) {
        this.apiKey = '5994a428e19aa77d31f920613597f4ab';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async fetchWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&units=metric&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }
} 