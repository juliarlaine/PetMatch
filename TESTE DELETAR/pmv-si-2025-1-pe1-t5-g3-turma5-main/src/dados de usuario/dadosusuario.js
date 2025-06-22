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
    }
    alert("Dados atualizados com sucesso!");
  });

  const favoritosContainer = document.getElementById("favoritos-container");

  function renderizarFavoritos() {
    favoritosContainer.innerHTML = ""; // Limpa os cards existentes
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
      favoritosContainer.innerHTML = "<p>Você ainda não favoritou nenhum pet.</p>";
    } else {
      favoritos.forEach((pet, index) => { // Adicionado index para identificação
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        // Usar um ID único do pet se disponível, caso contrário, o nome ou índice.
        // Para este exemplo, usaremos o índice, mas um ID do pet é mais robusto.
        // Se o pet tiver uma propriedade como pet.id, use-a.
        const petIdentifier = pet.id || pet.nome || index; 

        petCard.innerHTML = `
          <div class="pet-image">
            <img src="${pet.imagem || '../assets/images/default-pet-placeholder.png'}" alt="${pet.nome}">
          </div>
          <div class="pet-icons">
            <img class="icon gender" src="${getGenderIcon(pet.genero)}" alt="${pet.genero}">
            <img class="icon favorite" src="favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 16.png" alt="Favorito">
          </div>
          <div class="pet-info">
            <div class="pet-name">${pet.nome}</div>
            <div class="pet-location">${pet.localizacao}</div>
          </div>
          <button class="adopt-button" onclick="window.location.href='../cadastro_login_catalogo/catalogo.html'">Quero adotar</button>
          <button class="remove-favorite-button" data-pet-identifier="${petIdentifier}">Remover Favorito</button>
        `;
        favoritosContainer.appendChild(petCard);
      });
    }
  }

  // Event listener para botões de remover (delegação de evento)
  favoritosContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-favorite-button')) {
      const petIdentifierToRemove = event.target.getAttribute('data-pet-identifier');
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      
      // Filtra o array para remover o pet.
      // Esta lógica de filtro pode precisar ser ajustada dependendo se você usa id, nome ou índice.
      favoritos = favoritos.filter((pet, index) => {
        const currentPetIdentifier = pet.id || pet.nome || index;
        return currentPetIdentifier.toString() !== petIdentifierToRemove.toString();
      });
      
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      renderizarFavoritos(); // Re-renderiza a lista de favoritos
    }
  });

  renderizarFavoritos(); // Chama a função para carregar os favoritos inicialmente
});

function getGenderIcon(gender) {
  if (gender && gender.toLowerCase() === 'fêmea') {
    return 'female-24-dp-e-3-e-3-e-3-fill-0-wght-400-grad-0-opsz-24-40.svg';
  } else if (gender && gender.toLowerCase() === 'macho') {
    return 'male-24-dp-e-3-e-3-e-3-fill-0-wght-400-grad-0-opsz-24-90.svg';
  }
  return '../assets/icons/default-gender-placeholder.svg'; 
}

