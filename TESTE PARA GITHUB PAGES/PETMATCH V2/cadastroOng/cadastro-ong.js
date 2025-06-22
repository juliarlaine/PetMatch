// cadastro-ong.js

// Salva os dados da ONG no localStorage ao enviar o formulário
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-ong");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const nome = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const telefone = inputs[2].value.trim();
    const cep = inputs[3].value.trim();
    const endereco = inputs[4].value.trim();
    const cnpj = inputs[5].value.trim();
    const cidade = inputs[6].value.trim();
    const missao = form.querySelector(".form-direita input[placeholder^='A nossa missão']").value.trim();

    const ong = {
      nome,
      email,
      telefone,
      cep,
      endereco,
      cnpj,
      cidade,
      missao
    };

    const lista = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];
    lista.push(ong);
    localStorage.setItem("ongsPetMatch", JSON.stringify(lista));

    alert("ONG cadastrada com sucesso!");
    window.location.href = "protetores.html";
  });
});
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
