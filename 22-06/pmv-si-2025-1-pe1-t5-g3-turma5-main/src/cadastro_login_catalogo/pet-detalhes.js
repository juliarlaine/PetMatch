// pet-detalhes.js

// 1. Pega o parâmetro `id` da URL
const params = new URLSearchParams(window.location.search);
const petId  = params.get('id');
if (!petId) {
  alert('Pet não encontrado.');
  window.location.href = 'catalogo.html';
}

// 2. Lê o array de pets do LocalStorage
const pets = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
const pet  = pets.find(p => p.id === petId);
if (!pet) {
  alert('Pet não encontrado.');
  window.location.href = 'catalogo.html';
}

// 3. Preenche os elementos na página
document.getElementById('petImage').src             = pet.foto || 'placeholder.png';
document.getElementById('petName').textContent      = pet.nome;
document.getElementById('petEspecie').textContent   = pet.especie;
document.getElementById('petIdade').textContent     = pet.idade;
document.getElementById('petLocalizacao').textContent = pet.localizacao;
document.getElementById('petContato').textContent   = pet.contato || 'Não informado';
document.getElementById('petSexo').textContent      = pet.sexo;
document.getElementById('petCastrado').textContent  = pet.castrado;
document.getElementById('petVacinas').textContent   = pet.historicoVac;
document.getElementById('petEnergia').textContent   = pet.nivelEnergia;
document.getElementById('petCriancas').textContent  = pet.conviveCriancas;
document.getElementById('petAnimais').textContent   = pet.conviveAnimais;
document.getElementById('petComportamento').textContent = pet.comportamento;
document.getElementById('petObservacoes').textContent   = pet.observacoes;
