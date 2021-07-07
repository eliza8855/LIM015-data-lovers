// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const searchByName = document.querySelector('#inputFilterByName');

export const filterByName = () => {
  console.log(searchByName.value);
  let prueba = pokemonList.filter((x) => {
    return (x.name.startsWith(searchByName.value.toLowerCase()));
  });
  console.log(prueba);
}


//export const anotherExample = () => {
// return 'OMG';
//};
