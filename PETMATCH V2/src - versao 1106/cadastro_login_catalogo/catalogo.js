// catalogo.js

// 1. Monta cada card a partir do objeto “pet” lido do LocalStorage
function criaPetCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pet-card');

  // Expondo o ID no dataset (caso futuramente seja necessário)
  card.dataset.id = pet.id;

  // Data-attributes para filtro/uso posterior
  card.dataset.especie        = pet.especie;
  card.dataset.idade          = pet.idade;
  card.dataset.localizacao    = pet.localizacao;
  card.dataset.energia        = pet.nivelEnergia;
  card.dataset.genero         = pet.sexo;
  card.dataset.castrado       = pet.castrado;
  card.dataset.historicovac   = pet.historicoVac;
  card.dataset.convivecriancas = pet.conviveCriancas;
  card.dataset.conviveanimais  = pet.conviveAnimais;
  card.dataset.comportamento  = pet.comportamento;
  card.dataset.observacoes    = pet.observacoes;

  // 1.1. Foto do pet
  const img = document.createElement('img');
  img.src = pet.foto || 'placeholder.png'; // se não tiver foto, usa placeholder
  img.alt = pet.nome;
  img.loading = 'lazy';
  card.appendChild(img);

  // 1.2. Container para nome, localização, gênero e coração
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const textoInfo = document.createElement('div');
  textoInfo.classList.add('texto-info');

  // Nome do pet
  const h3 = document.createElement('h3');
  h3.textContent = pet.nome;
  textoInfo.appendChild(h3);

  // Localização + Gênero (símbolo ♂ / ♀)
  const pLoc = document.createElement('p');
  pLoc.textContent = pet.localizacao;

  const spanGenero = document.createElement('span');
  spanGenero.classList.add('genero');
  spanGenero.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  pLoc.appendChild(spanGenero);

  textoInfo.appendChild(pLoc);
  infoContainer.appendChild(textoInfo);

  // Ícone de coração (favoritar)
  const fav = document.createElement('span');
  fav.classList.add('favoritar');
  fav.innerHTML = '♡'; // Initial state: empty heart

  // Check if pet is already favorited on load
  const petId = pet.id || pet.nome; // Use a unique identifier
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (favoritos.some(favPet => (favPet.id || favPet.nome) === petId)) {
    fav.innerHTML = '♥';
    fav.style.color = '#e74c3c';
  }

  fav.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent card click event when clicking heart

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      alert("Você precisa estar logado para favoritar pets.");
      window.location.href = "../cadastro_login_catalogo/login.html"; // Adjust path as needed
      return;
    }

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const petIdentifier = pet.id || pet.nome; // Use the same identifier as in dadosusuario.js

    // Check if pet is already in favorites
    const petIndexInFavorites = favoritos.findIndex(
      (favPet) => (favPet.id || favPet.nome) === petIdentifier
    );

    if (petIndexInFavorites > -1) {
      // Pet is already favorited, so remove it
      favoritos.splice(petIndexInFavorites, 1);
      fav.innerHTML = '♡';
      fav.style.color = '#ccc'; // Or your default color for non-favorited
      alert(pet.nome + " removido dos favoritos.");
    } else {
      // Pet is not favorited, so add it
      // Ensure all necessary pet details are included for dadosusuario.js
      const petDataForFavorites = {
        id: pet.id, // Make sure pets have a unique ID
        nome: pet.nome,
        imagem: pet.foto || '../caminho/para/imagem/padrao.png', // Match this path with dadosusuario.js
        localizacao: pet.localizacao,
        genero: pet.sexo,
        // Add any other details needed by dadosusuario.js to render the card
        especie: pet.especie,
        idade: pet.idade,
        // etc.
      };
      favoritos.push(petDataForFavorites);
      fav.innerHTML = '♥';
      fav.style.color = '#e74c3c';
      alert(pet.nome + " adicionado aos favoritos!");
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  });
  infoContainer.appendChild(fav);

  card.appendChild(infoContainer);

  // 1.3. Botão “Quero adotar” (abre modal com detalhes)
  const btnAdotar = document.createElement('button');
  btnAdotar.classList.add('btn-adotar');
  btnAdotar.textContent = 'Quero adotar';
  btnAdotar.addEventListener('click', () => openModal(card));
  card.appendChild(btnAdotar);

  return card;
}

// 2. Renderiza todos os pets do LocalStorage na seção “.lista-pets”
function renderizaListaPets() {
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';

  // Lê do LocalStorage usando a mesma chave de pet.js
  const pets = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
  pets.forEach(pet => {
    const card = criaPetCard(pet);
    container.appendChild(card);
  });
}

// 3. Filtra, busca e ordena os cards já gerados
function filtrarPets() {
  const busca = document.getElementById('inputBusca').value.trim().toLowerCase();
  const especie = document.getElementById('filtroEspecie').value;
  const idade = document.getElementById('filtroIdade').value;
  const generoFiltro = document.getElementById('filtroGenero').value;
  const localizacao = document.getElementById('filtroLocalizacao').value.trim().toLowerCase();
  const energia = document.getElementById('filtroEnergia').value;
  const ordenarPor = document.getElementById('ordenarPor').value;

  let cards = Array.from(document.querySelectorAll('.pet-card'));

  // Aplica filtros
  let filtrados = cards.filter(card => {
    const nomeCard = card.querySelector('h3').textContent.toLowerCase();
    if (busca && !nomeCard.includes(busca)) return false;
    if (especie && card.dataset.especie !== especie) return false;
    if (idade && parseInt(card.dataset.idade) !== parseInt(idade)) return false;
    if (generoFiltro && card.dataset.genero !== generoFiltro) return false;
    if (localizacao && !card.dataset.localizacao.toLowerCase().includes(localizacao)) return false;
    if (energia && card.dataset.energia !== energia) return false;
    return true;
  });

  // Ordena os cards filtrados
  filtrados.sort((a, b) => {
    if (ordenarPor === 'nome') {
      return a.querySelector('h3').textContent
        .localeCompare(b.querySelector('h3').textContent);
    }
    if (ordenarPor === 'idade') {
      return parseInt(a.dataset.idade) - parseInt(b.dataset.idade);
    }
    if (ordenarPor === 'energia') {
      const mapEnergia = { 'Baixa': 1, 'Média': 2, 'Alta': 3 };
      return mapEnergia[a.dataset.energia] - mapEnergia[b.dataset.energia];
    }
    return 0;
  });

  // Exibe somente os filtrados e ordenados
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  filtrados.forEach(card => container.appendChild(card));
}

// 4. Conecta “Buscar” e “Limpar filtros” às ações
document.getElementById('btnBuscar').addEventListener('click', filtrarPets);

document.getElementById('btnLimparFiltros')
  .addEventListener('click', () => {
    // Reseta todos os campos de filtro
    [
      'inputBusca',
      'filtroEspecie',
      'filtroIdade',
      'filtroGenero',
      'filtroLocalizacao',
      'filtroEnergia',
      'ordenarPor'
    ].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.value = (id === 'ordenarPor' ? 'nome' : '');
    });
    // Re-renderiza todos os pets sem filtro
    renderizaListaPets();
  });

// 5. Funções para abrir/fechar o modal de detalhes
const modal = document.getElementById('modalDetalhes');
const overlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.modal-close');

function openModal(card) {
  document.getElementById('modalNome').textContent = card.querySelector('h3').textContent;
  document.getElementById('modalEspecie').textContent = card.dataset.especie;
  document.getElementById('modalIdade').textContent = card.dataset.idade;
  document.getElementById('modalLocalizacao').textContent = card.dataset.localizacao;
  document.getElementById('modalGenero').textContent = card.dataset.genero;
  document.getElementById('modalCastrado').textContent = card.dataset.castrado;
  document.getElementById('modalVacinas').textContent = card.dataset.historicovac;
  document.getElementById('modalEnergia').textContent = card.dataset.energia;
  document.getElementById('modalCriancas').textContent = card.dataset.convivecriancas;
  document.getElementById('modalAnimais').textContent = card.dataset.conviveanimais;
  document.getElementById('modalComportamento').textContent = card.dataset.comportamento;
  document.getElementById('modalObservacoes').textContent = card.dataset.observacoes;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 6. Ao carregar a página, renderiza a lista de pets
window.addEventListener('DOMContentLoaded', () => {
  renderizaListaPets();
});
// Removido o código que alterava incorretamente o link do Blog
