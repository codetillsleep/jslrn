document.addEventListener("DOMContentLoaded", () => {
  cityInput = document.getElementById("city-input");
  getWeatherBtn = document.getElementById("get-weather-btn");
  WeatherInfo = document.getElementById("weather-info");
  cityNameDisplay = document.getElementById("city-name");
  temperatureDisplay = document.getElementById("temperature");
  descriptionDisplay = document.getElementById("description");
  errorMessage = document.getElementById("error-message");
  const API_KEY = "76864609e78a023d0436f96ae89e2b30";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }

    async function fetchWeatherData(city) {
      //gets the data
    }
    function displayWeatherData(weatherData) {
      //display
    }
    function showError() {
      WeatherInfo.classList.add("hidden");
      errorMessage.classList.remove("hidden");
    }
  });
});
