const inputBox = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonTypes = document.getElementById("types");
const pokemonWeight = document.getElementById("weight");
const pokemonheight = document.getElementById("height");
const spriteC = document.getElementById("spriteC");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const speed = document.getElementById("speed");
const specialDefense = document.getElementById("special-defense");

// Main function of getting pokemon through web
const getPokemon = async () => {
  const pokemonNameOrId = inputBox.value.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();
    console.log(data);

    //Setting Pokemon info
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `#${data.id}`;

    pokemonTypes.innerHTML = data.types
      .map(
        (data) =>
          `<span class="type ${
            data.type.name
          }">${data.type.name.toUpperCase()}</span>`
      )
      .join("");

    pokemonWeight.textContent = `Weight: ${data.weight}`;
    pokemonheight.textContent = `Height: ${data.height}`;

    spriteC.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}" />`;

    hp.textContent = `${data.stats[0].base_stat}`;
    attack.textContent = `${data.stats[1].base_stat}`;
    defense.textContent = `${data.stats[2].base_stat}`;
    specialAttack.textContent = `${data.stats[3].base_stat}`;
    specialDefense.textContent = `${data.stats[4].base_stat}`;
    speed.textContent = `${data.stats[5].base_stat}`;
  } catch (error) {
    resetDisplay();
    alert("Pokemon not found");
    console.error("Error fetching Pokemon:", error);
  }
};
const resetDisplay = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  // reset stats
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  types.innerHTML = "";
  height.textContent = "";
  weight.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getPokemon();
});
