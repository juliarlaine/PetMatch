// protetores.js

window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const modal = document.createElement("div");
  modal.className = "modal hidden";
  document.body.appendChild(modal);

  const ongs = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];

  ongs.forEach((ong, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="image0.png" alt="ONG">
      <h3>${ong.nome}</h3>
      <button class="btn-localizacao" data-index="${index}">
        ONDE ESTAMOS? <img src="vector0.svg" alt="Seta">
      </button>
    `;
    cardsContainer.appendChild(card);
  });

  cardsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".btn-localizacao")) {
      const index = e.target.closest(".btn-localizacao").dataset.index;
      const ong = ongs[index];
      modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <h2>${ong.nome}</h2>
          <p><strong>Email:</strong> ${ong.email}</p>
          <p><strong>Telefone:</strong> ${ong.telefone}</p>
          <p><strong>Cidade:</strong> ${ong.cidade}</p>
          <p><strong>Endereço:</strong> ${ong.endereco}</p>
          <p><strong>CNPJ:</strong> ${ong.cnpj}</p>
          <p><strong>Missão:</strong> ${ong.missao}</p>
        </div>
      `;
      modal.classList.remove("hidden");
    }
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) {
      modal.classList.add("hidden");
    }
  });
});
// CSS para o modal
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "blog") {
    link.setAttribute("href", "blog/blog.html");
  }
});
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "quero adotar") {
    link.setAttribute("href", "catalogo.html");
  }
});

