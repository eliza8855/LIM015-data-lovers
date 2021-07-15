import data from '../src/data/pokemon/pokemon.js';
import {filterByName, filterByType, pokemonOrder} from '../src/data.js';

//describe('filterByName', () => {
//  it('should be a function', () => { 
//    const result = filterByName(data.pokemon,'ivysaur');
//    expect(result[0].name).toBe('ivysaur');
//  });

//it('should be a function', () => { 
//  const result = filterByName(data.pokemon,'ivy');
//  expect(result[0].name).toBe('ivysaur');
// })});


describe('Filtrado por nombre', () => {
  it('it should filter pokemons by name', () => {
    const output = [data.pokemon[0]];
    expect(filterByName(data.pokemon,"bulbasaur")).toStrictEqual(output);
  });
});

describe('Filtrado por tipo', () => {
  it('it should filter pokemons by type', () => {
    const output = [data.pokemon[146],data.pokemon[147],data.pokemon[148],data.pokemon[229]];
    expect(filterByType(data.pokemon,"dragon")).toEqual(output);
  });
});

describe('pokemonOrder', () => {

  it('should be an object', () => {
    expect(typeof pokemonOrder).toBe('object');
  });

  describe('pokemonOrder.differentOrder', () => {

    it('should be a function', () => {
      expect(typeof pokemonOrder.differentOrder).toBe('function');
    });

    it('   ', () => {
      expect(pokemonOrder.differentOrder(data.pokemon, selected)).toBe();
    });

 //   describe("sum function", () => {
 //     it("should return 0", () => {
 //       expect(sum(1, 1)).toBe(0);
 //     });
   it("should return cats", () => {
        const output = 
        expect(data.pokemon.sort(orderByName)).toEqual({ selected === "A-Z": data.pokemon.sort(orderByName) });
 //     });
 //     it("should return dogs", () => {
 //       expect(sum(10, 5, "dogs")).toEqual({ dogs: 15 });
 //     });
 //   });

 differentOrder: (everyPokemon, selected) => {
  let result;
  switch(true) {
    case selected === "A-Z":
      result = everyPokemon.sort(orderByName);
       break;
    case selected === "Z-A":
      result = everyPokemon.sort(orderByName).reverse();
      break;
    case selected === "Lowest Number":
        result = everyPokemon.sort(orderByNumber);
      break;
    case selected === "Highest Number":
        result = everyPokemon.sort(orderByNumber).reverse();
      break;
  }
    return result; 
},
