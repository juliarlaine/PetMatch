document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = "../cadastro_login_catalogo/login.html";
    return;
  }

  // Preenche os campos com os dados do usuário
  document.getElementById("nome").value = usuario.nome || "";
  document.getElementById("email").value = usuario.email || "";
  document.getElementById("telefone").value = usuario.telefone || "";
  document.getElementById("idade").value = usuario.idade || "";

  // Atualiza os dados ao confirmar
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade = document.getElementById("idade").value.trim();

    if (!nome || !email || !telefone || !idade) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoUsuario = { ...usuario, nome, email, telefone, idade };

    // Atualiza no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

    // Atualiza também na lista geral de usuários
    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    const index = lista.findIndex((u) => u.email === usuario.email);
    if (index !== -1) {
      lista[index] = novoUsuario;
      localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));
    }    alert("Dados atualizados com sucesso!");
  });

  // Adiciona funcionalidade aos botões "Quero adotar"
  const botoesAdotar = document.querySelectorAll('.adopt-button');
  botoesAdotar.forEach(botao => {
    botao.addEventListener('click', function() {
      window.location.href = '../cadastro_login_catalogo/catalogo.html';
    });
  });
});
// Removido código que alterava incorretamente os links
