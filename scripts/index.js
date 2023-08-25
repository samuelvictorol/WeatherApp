document.addEventListener("DOMContentLoaded", () => {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");

    // Detecta o pressionamento da tecla Enter na entrada de texto
    locationInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o envio do formulário
            searchButton.click(); // Simula o clique no botão de busca
        }
    });

    searchButton.addEventListener("click", () => {
        const inputValue = locationInput.value;
        // Faça algo com o valor inserido e realize a busca
        console.log("Buscar:", inputValue);
    });
});
