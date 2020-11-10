let pokemonRepository = (function () {
  let repository = [
    {
      name: "Marral",
      height: 1.04,
      types: ["water"],
    },
    {
      name: "Gothorita",
      height: 0.7,
      types: ["psychic"],
    },
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass"],
    },
  ];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }

 function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }




  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    

  };
})();

pokemonRepository.add({ name: "Piplup", height: 0.4, types: ["water"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
