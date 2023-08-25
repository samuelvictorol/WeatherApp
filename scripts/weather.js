document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const locationInput = document.getElementById("locationInput").value;
        getWeatherData(locationInput);
    });
});

function getWeatherData(location) {
    const apiKey = "0f329d77fcfb49899ce145714232508";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error("Erro ao obter os dados do clima:", error);
            alert('Lugar não encontrado!')
        });
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById("weather-info");
    const modalInfo = document.getElementById("modal-info");
    weatherInfo.innerHTML = `
        <h2>Current weather conditions in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
    `;
    modalInfo.classList.remove("display-none");
}
