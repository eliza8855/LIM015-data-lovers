import data from '../src/data/pokemon/pokemon.js';
import {filterByName, filterByType, pokemonOrder} from '../src/data.js';

describe('Filtrado por nombre', () => {
   it('it should filter pokemons by name', () => {
    const output = [data.pokemon[0]];
    expect(filterByName(data.pokemon,"bulbasaur")).toStrictEqual(output);
  });
});

describe('Filtrado por tipo', () => {
   it('it should filter pokemons by type', () => {
    const output = [data.pokemon[146],data.pokemon[147],data.pokemon[148],data.pokemon[229]];
    expect(filterByType(data.pokemon,"dragon")).toEqual(output);
  });
});

describe('pokemonOrder', () => {
   it('should be an object', () => {
   expect(typeof pokemonOrder).toBe('object');
   });

     describe('pokemonOrder.differentOrder', () => {
       it('order A-Z', () => {
    expect(data.pokemon.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })[0].name).toBe('abra');
       });
   
       it('order Z-A', ()=> {
     expect(data.pokemon.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }).reverse()[0].name).toBe('zubat');   
       });

       it('order by Lowest Number', ()=> {
    expect(data.pokemon.sort((a, b) => {
        if (a.num < b.num) {
          return -1;
        }
        if (a.num > b.num) {
          return 1;
        }
        return 0;
      })[0].name).toBe('bulbasaur');   
       });

       it('order by Highest Number', ()=> {
    expect(data.pokemon.sort((a, b) => {
        if (a.num < b.num) {
          return -1;
        }
        if (a.num > b.num) {
          return 1;
        }
        return 0;
      }).reverse()[0].name).toBe('celebi');   
       });       
     });

     describe('pokemonOrder.sortedByOrder', () => {
       it('ascendingCp', () => {
     expect(data.pokemon.sort((a, b) => {
        if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp']))  {
          return -1;
        }
        if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) { 
          return 1;
        }
        return 0;
      })[0].name).toBe('magikarp');
       });

       it('descendingCp', () => {
        expect(data.pokemon.sort((a, b) => {
           if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp']))  {
             return -1;
           }
           if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) { 
             return 1;
           }
           return 0;
         }).reverse()[0].name).toBe('mewtwo');
       });

       it('ascendingHp', () => {
     expect(data.pokemon.sort((a, b) =>{
        if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
          return -1;
        }
        if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
          return 1;
        }
        return 0;
      })[0].name).toBe('diglett');
       }); 
       
       it('descendingHp', () => {
        expect(data.pokemon.sort((a, b) =>{
           if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
             return -1;
           }
           if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
             return 1;
           }
           return 0;
         }).reverse()[0].name).toBe('blissey');
       });
     });
});