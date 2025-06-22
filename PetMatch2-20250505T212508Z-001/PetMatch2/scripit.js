// script.js - Lógica do cadastro do PetMatch usando JSONServer

// URL da API JSONServer (troque pela sua se necessário)
const apiUrl = 'http://127.0.0.1:3000/index.html';

// Exibir mensagens
function displayMessage(mensagem) {
    const msg = document.createElement('div');
    msg.className = 'alert';
    msg.innerText = mensagem;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

// Capturar o envio do formulário
const form = document.querySelector('.formulario');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.querySelector('input[placeholder="Nome completo"]').value;
    const telefone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const senha = form.querySelector('input[placeholder="Digite sua senha"]').value;
    const confirmarSenha = form.querySelector('input[placeholder="Confirme sua senha"]').value;
    const idade = form.querySelector('input[type="number"]').value;

    if (senha !== confirmarSenha) {
        displayMessage("As senhas não coincidem.");
        return;
    }

    const novoUsuario = {
        nome,
        telefone,
        email,
        senha,
        idade
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Cadastro realizado com sucesso!");
            form.reset();
        })
        .catch(error => {
            console.error("Erro ao cadastrar:", error);
            displayMessage("Erro ao cadastrar. Tente novamente.");
        });
});
