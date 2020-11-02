
var pokemonList = [
  { name: " Bulbasaur ", height:0.7 ,type: "Grass"},
{name: " Marrill ", height:0.4 ,type:"Water"},
{name:" Gothorita " ,height:0.7 ,type:"Psychic"}
                  ];
function myLoopFunction(user) {
  console.log(pokemonList.name + ' is ' + pokemonList.height + ' m tall');
}
pokemonList.forEach(myLoopFunction);

function getAll(){
  return pokemonList;
}

function add(pokemon){
  pokemonList.push(pokemon);

}

return {
  getAll: getAll,
  add:add
};
})();

console.log( pokemonList).getAll() );
