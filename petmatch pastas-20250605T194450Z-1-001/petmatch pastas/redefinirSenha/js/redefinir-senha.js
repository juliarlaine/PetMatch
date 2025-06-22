// === JS para comfirmemail.html ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-card");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    const usuario = lista.find((u) => u.email === email);

    if (!usuario) {
      alert("E-mail não encontrado. Verifique e tente novamente.");
      return;
    }

    // Salva o e-mail temporariamente para redefinição
    localStorage.setItem("redefinirEmail", email);
    window.location.href = "redefinirsenha.html";
  });
});


// === JS para redefinirsenha.html ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-card");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novaSenha = form.querySelector("input:nth-of-type(1)").value.trim();
    const confirmarSenha = form.querySelector("input:nth-of-type(2)").value.trim();
    const email = localStorage.getItem("redefinirEmail");

    if (!novaSenha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    const index = lista.findIndex((u) => u.email === email);

    if (index === -1) {
      alert("Erro ao encontrar usuário para atualizar.");
      return;
    }

    lista[index].senha = novaSenha;
    localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));

    // Atualiza também se estiver logado
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado && usuarioLogado.email === email) {
      usuarioLogado.senha = novaSenha;
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    }

    localStorage.removeItem("redefinirEmail");
    alert("Senha atualizada com sucesso!");
    window.location.href = "login.html";
  });
});
