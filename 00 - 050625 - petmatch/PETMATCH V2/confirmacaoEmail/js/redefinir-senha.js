// === JS para redefinirsenha.html ===
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado - script de redefinição de senha iniciado");
  const form = document.querySelector(".form-card");
  const homeLink = document.querySelector('.acoes a');
  const btnContinuar = document.getElementById('btnContinuar');
  
  // Corrigir o link "Voltar Para Home"
  homeLink.href = "../home definitiva/home.html";

  // Função para processar a redefinição de senha
  function processarRedefinicaoSenha(e) {
    console.log("Processando redefinição de senha");
    if (e) e.preventDefault();
    
    const novaSenha = form.querySelector("input:nth-of-type(1)").value.trim();
    const confirmarSenha = form.querySelector("input:nth-of-type(2)").value.trim();

    if (!novaSenha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Obter o email do localStorage (caso esteja implementando uma redefinição real)
    const email = localStorage.getItem("redefinirEmail");
    
    if (email) {
      const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
      const index = lista.findIndex((u) => u.email === email);
      
      if (index !== -1) {
        lista[index].senha = novaSenha;
        localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));
        
        // Atualiza também se estiver logado
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (usuarioLogado && usuarioLogado.email === email) {
          usuarioLogado.senha = novaSenha;
          localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        }
        
        localStorage.removeItem("redefinirEmail");
      }
    }

    alert("Senha atualizada com sucesso!");
    
    // Redirecionamento simplificado para a página de usuário logado
    console.log("Redirecionando para usuariologado.html");
    
    // Usar window.location diretamente em vez de window.location.href
    try {
      window.location = "../home definitiva/usuariologado.html";
    } catch (error) {
      console.error("Erro ao redirecionar:", error);
      // Tente um método alternativo se o primeiro falhar
      window.location.replace("../home definitiva/usuariologado.html");
    }
  }

  // Adicionar eventos para o formulário e o botão
  form.addEventListener("submit", processarRedefinicaoSenha);
  
  // Adicionar evento de clique ao botão como backup
  if (btnContinuar) {
    btnContinuar.addEventListener("click", function(e) {
      e.preventDefault();
      console.log("Botão Continuar clicado diretamente");
      processarRedefinicaoSenha();
    });
  }
});
