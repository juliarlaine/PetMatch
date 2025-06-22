function expandirTexto(event) {
    event.preventDefault(); // Impede que o link navegue

    const link = event.target;
    const cardContent = link.closest(".card-content");
    const pontos = cardContent.querySelector("#pontos");
    const maisTexto = cardContent.querySelector("#maisTexto");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        link.textContent = "Continue lendo...";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        link.textContent = "Mostrar menos";
    }
}
