document.addEventListener("DOMContentLoaded", () => {
  const petForm = document.getElementById("petForm");
  if (!petForm) return;

  petForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome          = document.getElementById("nomePet").value.trim();
    const especie       = document.getElementById("especiePet").value;
    const idade         = document.getElementById("idadePet").value.trim();
    const localiz       = document.getElementById("localizacaoPet").value.trim();
    const contato       = document.getElementById("contatoPet").value.trim();
    const sexo          = document.querySelector('input[name="sexoPet"]:checked')?.value;
    const castrado      = document.querySelector('input[name="castradoPet"]:checked')?.value;
    const vacinas       = document.getElementById("vacinasPet").value.trim();
    const energia       = document.getElementById("nivelEnergiaPet").value;
    const criancas      = document.querySelector('input[name="conviveCriancas"]:checked')?.value;
    const animais       = document.querySelector('input[name="conviveAnimais"]:checked')?.value;
    const comportamento = document.getElementById("comportamentoPet").value.trim();
    const observacoes   = document.getElementById("observacoesPet").value.trim();
    const termos        = document.getElementById("termosPet").checked;
    const fotoInput     = document.getElementById("fotoPet");

    if (
      !nome ||
      !especie ||
      !idade ||
      !localiz ||
      !contato ||
      !sexo ||
      !castrado ||
      !vacinas ||
      !energia ||
      !criancas ||
      !animais ||
      !comportamento ||
      !termos
    ) {
      alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
      return;
    }

    function salvar(fotoDataUrl) {
      const lista = JSON.parse(localStorage.getItem("petsPetMatch")) || [];

      const id = Date.now().toString();

      const novoPet = {
        id,
        nome,
        especie,
        idade,
        localizacao: localiz,
        contato,
        sexo,
        castrado,
        historicoVac: vacinas,
        nivelEnergia: energia,
        conviveCriancas: criancas,
        conviveAnimais: animais,
        comportamento,
        observacoes,
        foto: fotoDataUrl
      };

      lista.push(novoPet);
      localStorage.setItem("petsPetMatch", JSON.stringify(lista));

      alert("Pet cadastrado com sucesso!");
      petForm.reset();
      
    }

    if (fotoInput.files.length) {
      const reader = new FileReader();
      reader.onload = () => salvar(reader.result);
      reader.readAsDataURL(fotoInput.files[0]);
    } else {
      salvar(null);
    }
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


