// catalogo.js

// 0. Pets de exemplo para demonstração
const samplePets = [
  { id: 'ex1', nome: 'Bolt', sexo: 'Macho', foto: 'animalteste.png', especie: 'Cachorro', idade: '2', porte: 'Médio', localizacao: 'Rio de Janeiro', nivelEnergia: 'Alta', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, V9', comportamento: 'Brincalhão', observacoes: '' },
  { id: 'ex2', nome: 'Mia',  sexo: 'Fêmea', foto: 'animalteste.png', especie: 'Gato',     idade: '1', porte: 'Pequeno',    localizacao: 'São Paulo',       nivelEnergia: 'Média', conviveCriancas: 'Não', conviveAnimais: 'Sim', castrado: 'Não', historicoVac: 'V7', comportamento: 'Calma',    observacoes: '' },
  { id: 'ex3', nome: 'Luna', sexo: 'Fêmea', foto: 'animalteste.png', especie: 'Gato',     idade: '3', porte: 'Pequeno',    localizacao: 'Belo Horizonte', nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'V8', comportamento: 'Dorminhoca', observacoes: '' }
];

function criaPetCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pet-card');
  card.dataset.id = pet.id;
  card.dataset.especie = pet.especie;
  card.dataset.porte = pet.porte;
  card.dataset.idade = pet.idade;
  card.dataset.genero = pet.sexo;
  card.dataset.localizacao = pet.localizacao;
  card.dataset.energia = pet.nivelEnergia;

  // foto
  const img = document.createElement('img');
  img.src = pet.foto || 'placeholder.png';
  img.alt = pet.nome;
  card.appendChild(img);

  // nome + gênero + coração
  const info = document.createElement('div');
  info.classList.add('info-container');

  const nomeEl = document.createElement('h3');
  nomeEl.textContent = pet.nome;
  info.appendChild(nomeEl);

  const generoEl = document.createElement('span');
  generoEl.classList.add('genero');
  generoEl.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  info.appendChild(generoEl);

  const fav = document.createElement('span');
  fav.classList.add('favoritar');

  // Verifica se já está favoritado
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const jaFavoritado = favoritos.some(f => f.id === pet.id);
  fav.innerHTML = jaFavoritado ? '♥' : '♡';
  fav.style.color = jaFavoritado ? '#e74c3c' : '#ccc';

  fav.addEventListener('click', e => {
    e.stopPropagation();
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const index = favoritos.findIndex(f => f.id === pet.id);
    if (index === -1) {
      // Adiciona aos favoritos
      favoritos.push({
        id: pet.id,
        nome: pet.nome,
        genero: pet.sexo,
        imagem: pet.foto,
        localizacao: pet.localizacao
      });
      fav.innerHTML = '♥';
      fav.style.color = '#e74c3c';
    } else {
      // Remove dos favoritos
      favoritos.splice(index, 1);
      fav.innerHTML = '♡';
      fav.style.color = '#ccc';
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  });
  info.appendChild(fav);

  card.appendChild(info);

  // botão Quero adotar
  const btnAdotar = document.createElement('button');
  btnAdotar.classList.add('btn-adotar');
  btnAdotar.textContent = 'Quero adotar';
  btnAdotar.addEventListener('click', () => {
    window.location.href = `pet-detalhes.html?id=${encodeURIComponent(pet.id)}`;
  });
  card.appendChild(btnAdotar);

  return card;
}

function renderizaListaPets() {
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  let pets = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
  if (pets.length === 0) pets = samplePets;
  pets.forEach(pet => container.appendChild(criaPetCard(pet)));
}

function filtrarPets() {
  const especie = document.getElementById('filtroEspecie').value;
  const porte   = document.getElementById('filtroPorte').value;
  const idade   = document.getElementById('filtroIdade').value;
  const genero  = document.getElementById('filtroGenero').value;
  const loc     = document.getElementById('filtroLocalizacao').value.trim().toLowerCase();
  const energia = document.getElementById('filtroEnergia').value;

  const cards = Array.from(document.querySelectorAll('.pet-card'));
  const filtrados = cards.filter(card => {
    if (especie && card.dataset.especie !== especie) return false;
    if (porte   && card.dataset.porte   !== porte)   return false;
    if (idade   && parseInt(card.dataset.idade) !== parseInt(idade)) return false;
    if (genero  && card.dataset.genero  !== genero) return false;
    if (loc     && !card.dataset.localizacao.toLowerCase().includes(loc)) return false;
    if (energia && card.dataset.energia !== energia) return false;
    return true;
  });

  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  filtrados.forEach(c => container.appendChild(c));
}

document.getElementById('btnBuscar')?.addEventListener('click', filtrarPets);
document.getElementById('btnLimparFiltros')?.addEventListener('click', () => {
  ['filtroEspecie','filtroPorte','filtroIdade','filtroGenero','filtroLocalizacao','filtroEnergia']
    .forEach(id => document.getElementById(id).value = '');
  renderizaListaPets();
});

window.addEventListener('DOMContentLoaded', renderizaListaPets);


