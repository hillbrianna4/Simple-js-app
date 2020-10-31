let pokemonList = [
  { name: " Bulbasaur ", height:0.7 ,type: "Grass"},
{name: " Marrill ", height:0.4 ,type:"Water"},
{name:" Gothorita " ,height:0.7 ,type:"Psychic"}
                  ];
for(let i =0; i< pokemonList.length; i++){
  if(pokemonList[i].height === 0.7){
    document.write(pokemonList[i].name + " is a big pokemon!");
  }else if (pokemonList[i].height == 0.4){
    document.write(pokemonList[i].name +  "is tiny pokemon!");
  } else {
    document.write(pokemonList[i].name +" this pokemon is a different size");
  }
