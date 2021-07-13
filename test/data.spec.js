import { filterByName , filterByType } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('filterByName', () => {
  it('should be a function', () => { 
    const result = filterByName(data.pokemon,'ivysaur');
    expect(result[0].name).toBe('ivysaur');
  });

it('should be a function', () => { 
  const result = filterByName(data.pokemon,'ivy');
  expect(result[0].name).toBe('ivysaur');
})});


// describe('filterByType', () => {
//  it('should be a function which filters pokemons by type', () => {
//    const result = filterByType(data.pokemon , 'poison');
//    expect(result[0].type).toBe('poison');
//  })});


// export const filterByType = (arrayObj, elementType) => {
//   const resultByType = arrayObj.filter((x) => x.type.includes(elementType));
//   return resultByType;
// };
