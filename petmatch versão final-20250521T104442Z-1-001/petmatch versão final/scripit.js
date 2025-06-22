document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.querySelector(".formulario");
  const loginForm = document.querySelector(".login-card");

  // Função auxiliar: salva novo usuário no localStorage
  function salvarUsuario(usuario) {
    const listaUsuarios = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    listaUsuarios.push(usuario);
    localStorage.setItem("usuariosPetMatch", JSON.stringify(listaUsuarios));
  }

  // CADASTRO
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = cadastroForm.querySelectorAll("input");
      const nome = inputs[0].value.trim();
      const telefone = inputs[1].value.trim();
      const email = inputs[2].value.trim();
      const senha = inputs[3].value.trim();
      const confirmarSenha = inputs[4].value.trim();
      const idade = inputs[5].value.trim();

      if (!nome || !telefone || !email || !senha || !confirmarSenha || !idade) {
        alert("Preencha todos os campos.");
        return;
      }

      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }

      const usuario = { nome, telefone, email, senha, idade };

      // Verifica se o e-mail já está cadastrado
      const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
      const existe = lista.some((u) => u.email === email);
      if (existe) {
        alert("Este e-mail já está cadastrado.");
        return;
      }

      salvarUsuario(usuario);

      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    });
  }

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const listaUsuarios = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];

      const usuario = listaUsuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = "dashboard.html"; // página protegida
      } else {
        alert("E-mail ou senha incorretos.");
      }
    });
  }
});
