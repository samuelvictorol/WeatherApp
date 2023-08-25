document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const locationInput = document.getElementById("locationInput").value;
        changeBackgroundImage(locationInput);
    });
});

function changeBackgroundImage(query) {
    const queryPlus = ' country or place'
    const unsplashApiKey = "Aaoms-J5kF3yVez0-3g0EISW3x3414-4BvVJnLE3ybk";
    const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${query}${queryPlus}&orientation=landscape`;

    fetch(unsplashApiUrl, {
        headers: {
            Authorization: `Client-ID ${unsplashApiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.results && data.results.length > 0) {
            const randomImageIndex = Math.floor(Math.random() * data.results.length);
            const imageUrl = data.results[randomImageIndex].urls.regular;
            document.getElementById("bg-container").style.backgroundImage = `url(${imageUrl})`;
        }
    })
    .catch(error => {
        console.error("Erro ao obter a imagem do Unsplash:", error);
    });
}
