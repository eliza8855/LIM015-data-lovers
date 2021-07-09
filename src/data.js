
export const filterByName = (arrayObj, input) => {
  const resultByName = arrayObj.filter((x) => x.name.startsWith(input.toLowerCase()));
  return resultByName;
};

export const filterByType = (arrayObj, elementType) => {
  const resultByType = arrayObj.filter((x) => x.type.includes(elementType));
  return resultByType;
};



export const orderByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}


export const orderByNumber = (a, b) => {
  if (a.num < b.num) {
    return -1;
  }
  if (a.num > b.num) {
    return 1;
  }
  return 0;
}

//función para ordenar la data según CP
export const orderByCP = (a, b) => {
  if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp']))  {
    return -1;
  }
  if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) { 
    return 1;
  }
  return 0;
}

//función para ordenar la data según HP
export const orderByHp = (a, b) =>{
  if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
    return -1;
  }
  if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
    return 1;
  }
  return 0;
}



export const pokemonOrder = {
  differentOrder: (everyPokemon, selected) => {
    let result;
    switch(true) {
      case selected === "A-Z":
        result = everyPokemon.sort(orderByName);
         break;
      case selected === "Z-A":
        result = everyPokemon.sort(orderByName).reverse();
        break;
      case selected === "Lowest Number":
          result = everyPokemon.sort(orderByNumber);
        break;
      case selected === "Highest Number":
          result = everyPokemon.sort(orderByNumber).reverse();
        break;
    }
      return result;
    
  },
  sortedByOrder: (everyPokemon,selected) => {
    let result2;
    switch(true) {
      case selected === "ascendingCp":
        result2 = everyPokemon.sort(orderByCP);
         break;
      case selected === "descendingCp":
        result2 = everyPokemon.sort(orderByCP).reverse();
        break;
      case selected === "ascendingHp":
          result2 = everyPokemon.sort(orderByHp);
        break;
      case selected === "descendingHp":
          result2 = everyPokemon.sort(orderByHp).reverse();
        break;
  }
  return result2;
    
}}








// estas funciones son de ejemplo




//import data from './data/pokemon/pokemon.js';
//const pokemonList = data.pokemon;
// const searchByName = document.querySelector('#inputFilterByName');

// export const filterByName = () => {
  // console.log(searchByName.value);
  // let prueba = pokemonList.filter((x) => {
  //   return (x.name.startsWith(searchByName.value.toLowerCase()));
  // });
  // console.log(prueba);
//   return prueba;
// }

// export const orderByAtoB = (arrayObj) => {
//   const prueba3 = arrayObj.sort((a, b) => a.name.localeCompare(b.name));
//   return prueba3; 
// };



