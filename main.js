const apiKey = "ca67bd0de8c0a9af978b2eed01b81d21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-icon");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.querySelector(".city-name").innerText = data.name;
    document.querySelector(".temperature").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "% Humidity";
    document.querySelector(".wind span:last-child").innerText = data.wind.speed + " km/hr";

    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition.includes("cloud")) {
        weatherIcon.src = "report/CLOUD'.png";
    } else if (weatherCondition.includes("clear")) {
        weatherIcon.src = "report/CLOUD'.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon.src = "report/CLOUD'.png";
    } else if (weatherCondition.includes("drizzle")) {
        weatherIcon.src = "report/CLOUD'.png";
    } else if (weatherCondition.includes("mist")) {
        weatherIcon.src = "report/CLOUD'.png";
    }
}

searchBtn.addEventListener("click", () => {
    const cityName = searchBox.value.trim();
    if (cityName) {
        checkWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});