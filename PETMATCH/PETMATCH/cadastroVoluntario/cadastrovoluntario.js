document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-ong");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const nome = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const telefone = inputs[2].value.trim();
    const cep = inputs[3].value.trim();
    const endereco = inputs[4].value.trim();
    const cpf = inputs[5].value.trim();
    const cidade = inputs[6].value.trim();
    const experiencia = form.querySelector("input[name='voluntario']:checked")?.value || "Não informado";
    const missao = inputs[7].value.trim();

    if (!nome || !email || !telefone || !cep || !endereco || !cpf || !cidade || !missao) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const xml = `
<voluntario>
  <nome>${nome}</nome>
  <email>${email}</email>
  <telefone>${telefone}</telefone>
  <cep>${cep}</cep>
  <endereco>${endereco}</endereco>
  <cpf>${cpf}</cpf>
  <cidade>${cidade}</cidade>
  <experiencia>${experiencia}</experiencia>
  <missao>${missao}</missao>
</voluntario>
    `.trim();

    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `voluntario-${nome.replace(/\s/g, "_").toLowerCase()}.xml`;
    link.click();

    URL.revokeObjectURL(url);
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
