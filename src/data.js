// estas funciones son de ejemplo

// import data from './data/pokemon/pokemon.js';
// const pokemonList = data.pokemon;
// const searchByName = document.querySelector('#inputFilterByName');

// export const filterByName = () => {
  // console.log(searchByName.value);
  // let prueba = pokemonList.filter((x) => {
  //   return (x.name.startsWith(searchByName.value.toLowerCase()));
  // });
  // console.log(prueba);
//   return prueba;
// }



export const filterByName = (arrayObj, input) => {
  const filteredPokemonByName = arrayObj.filter((x) => x.name.startsWith(input.toLowerCase()));
  return filteredPokemonByName;
};

export const filterByType = (arrayObj, elementType) => {
  const prueba2 = arrayObj.filter((x) => x.type.includes(elementType));
  return prueba2;
};
