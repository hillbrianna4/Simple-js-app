

var pokemonList = [
  { name: " Bulbasaur ", height:0.7 ,type: "Grass"},
{name: " Marrill ", height:0.4 ,type:"Water"},
{name:" Gothorita " ,height:0.7 ,type:"Psychic"}
                  ];

pokemonList.forEach(function(pokemonList){
  document.write(pokemonList.name + ' is ' + pokemonList.height + ' m tall' + "<br>")
});
