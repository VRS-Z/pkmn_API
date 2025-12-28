const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  const valor = Number(document.getElementById("index").value);

  if (!valor || valor < 1) {
    alert("Digite um número válido");
    return;
  }

  chamarAPI(valor);
});

async function chamarAPI(id) {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado");
    }

    const dados = await resposta.json();

    // Nome
    document.getElementById("resultado").textContent = dados.name;

    // Imagem
    const img = document.getElementById("pokemon-img");
    img.src = dados.sprites.front_default;
    img.style.display = "block";
  } catch (erro) {
    document.getElementById("resultado").textContent = "Erro ao buscar Pokémon";
    document.getElementById("pokemon-img").style.display = "none";
  }
}
