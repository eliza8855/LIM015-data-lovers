import data from '../src/data/pokemon/pokemon.js';
import {filterByName, filterByType, pokemonOrder} from '../src/data.js';

const pokemons = [ 
        {
        "num": "001",
        "name": "bulbasaur",
        "stats": {
            "base-attack": "118",
            "base-defense": "111",
            "base-stamina": "128",
            "max-cp": "1115",
            "max-hp": "113"
          }
        },
        {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
              }
            },
        {
        "num": "002",
        "name": "ivysaur",
        "stats": {
            "base-attack": "151",
            "base-defense": "143",
            "base-stamina": "155",
            "max-cp": "1699",
            "max-hp": "134"
          },
        },
        {
        "num": "003",
        "name": "venusaur",
        "stats": {
            "base-attack": "198",
            "base-defense": "189",
            "base-stamina": "190",
            "max-cp": "2720",
            "max-hp": "162"
          },
        },
        {
        "num": "004",
        "name": "charmander",
        "stats": {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
          },
        },
      {
       "num": "005",
       "name": "charmeleon",
       "stats": {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131"
      },
      }
      ];

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
    
       const output1 = [
        {
        "num": "001",
        "name": "bulbasaur",
        "stats": {
            "base-attack": "118",
            "base-defense": "111",
            "base-stamina": "128",
            "max-cp": "1115",
            "max-hp": "113"
          }
        },
        {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
              }
            },
        {
            "num": "004",
            "name": "charmander",
            "stats": {
                "base-attack": "116",
                "base-defense": "93",
                "base-stamina": "118",
                "max-cp": "980",
                "max-hp": "105"
              },
            },
          {
           "num": "005",
           "name": "charmeleon",
           "stats": {
            "base-attack": "158",
            "base-defense": "126",
            "base-stamina": "151",
            "max-cp": "1653",
            "max-hp": "131"
          }
          },
          {
           "num": "002",
           "name": "ivysaur",
           "stats": {
            "base-attack": "151",
            "base-defense": "143",
            "base-stamina": "155",
            "max-cp": "1699",
            "max-hp": "134"
            },
          },
        {
        "num": "003",
        "name": "venusaur",
        "stats": {
            "base-attack": "198",
            "base-defense": "189",
            "base-stamina": "190",
            "max-cp": "2720",
            "max-hp": "162"
          },
        },
      ];

       it('order A-Z', () => {
         expect(pokemonOrder.differentOrder(pokemons,"A-Z")).toStrictEqual(output1);
       });
   
       const output2 = [
            {
            "num": "003",
            "name": "venusaur",
            "stats": {
                "base-attack": "198",
                "base-defense": "189",
                "base-stamina": "190",
                "max-cp": "2720",
                "max-hp": "162"
              },
            },
            {
                "num": "002",
                "name": "ivysaur",
                "stats": {
                 "base-attack": "151",
                 "base-defense": "143",
                 "base-stamina": "155",
                 "max-cp": "1699",
                 "max-hp": "134"
                 },
            },
            {
                "num": "005",
                "name": "charmeleon",
                "stats": {
                 "base-attack": "158",
                 "base-defense": "126",
                 "base-stamina": "151",
                 "max-cp": "1653",
                 "max-hp": "131"
               }
            },
            {
                "num": "004",
                "name": "charmander",
                "stats": {
                    "base-attack": "116",
                    "base-defense": "93",
                    "base-stamina": "118",
                    "max-cp": "980",
                    "max-hp": "105"
                  },
            },
            {
                "num": "001",
             "name": "bulbasaur",
             "stats": {
               "base-attack": "118",
               "base-defense": "111",
               "base-stamina": "128",
               "max-cp": "1115",
               "max-hp": "113"
            }
            },
            {
                "num": "001",
                "name": "bulbasaur",
                "stats": {
                    "base-attack": "118",
                    "base-defense": "111",
                    "base-stamina": "128",
                    "max-cp": "1115",
                    "max-hp": "113"
                  }
            } 
       ]; 

       it('order Z-A', ()=> {
        expect(pokemonOrder.differentOrder(pokemons,"Z-A")).toStrictEqual(output2); 
       });

       it('order by Lowest Number', ()=> {
        expect(pokemonOrder.differentOrder(pokemons,"Lowest Number")).toStrictEqual(pokemons); 
       });
      
       const output3 = [
            {
            "num": "005",
            "name": "charmeleon",
            "stats": {
             "base-attack": "158",
             "base-defense": "126",
             "base-stamina": "151",
             "max-cp": "1653",
             "max-hp": "131"
           }
           },
           {
            "num": "004",
            "name": "charmander",
            "stats": {
                "base-attack": "116",
                "base-defense": "93",
                "base-stamina": "118",
                "max-cp": "980",
                "max-hp": "105"
              }
            },
            {
                "num": "003",
                "name": "venusaur",
                "stats": {
                    "base-attack": "198",
                    "base-defense": "189",
                    "base-stamina": "190",
                    "max-cp": "2720",
                    "max-hp": "162"
                  }
            },
            {
                "num": "002",
                "name": "ivysaur",
                "stats": {
                    "base-attack": "151",
                    "base-defense": "143",
                    "base-stamina": "155",
                    "max-cp": "1699",
                    "max-hp": "134"
                  }
            },
           {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
               "base-attack": "118",
               "base-defense": "111",
               "base-stamina": "128",
               "max-cp": "1115",
               "max-hp": "113"
            }
           },
           {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
              }
            } 
       ];       
       it('order by Highest Number', ()=> {
        expect(pokemonOrder.differentOrder(pokemons,"Highest Number")).toStrictEqual(output3);
       });
     });

     describe('pokemonOrder.sortedByOrder', () => {
       const output4 = [{
            "num": "004",
            "name": "charmander",
            "stats": {
                "base-attack": "116",
                "base-defense": "93",
                "base-stamina": "118",
                "max-cp": "980",
                "max-hp": "105"
              }
            },
            {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
             }
            },
            {
                "num": "001",
                "name": "bulbasaur",
                "stats": {
                    "base-attack": "118",
                    "base-defense": "111",
                    "base-stamina": "128",
                    "max-cp": "1115",
                    "max-hp": "113"
                  }
            },
            {
               "num": "005",
               "name": "charmeleon",
               "stats": {
                "base-attack": "158",
                "base-defense": "126",
                "base-stamina": "151",
                "max-cp": "1653",
                "max-hp": "131"
              }
            },
              {
               "num": "002",
               "name": "ivysaur",
               "stats": {
                "base-attack": "151",
                "base-defense": "143",
                "base-stamina": "155",
                "max-cp": "1699",
                "max-hp": "134"
                }
              },
            {
            "num": "003",
            "name": "venusaur",
            "stats": {
                "base-attack": "198",
                "base-defense": "189",
                "base-stamina": "190",
                "max-cp": "2720",
                "max-hp": "162"
              }
            },
          ];
       it('ascendingCp', () => {
        expect(pokemonOrder.sortedByOrder(pokemons,"ascendingCp")).toStrictEqual(output4);
       });
       const output5 = [
          {
                "num": "003",
                "name": "venusaur",
                "stats": {
                "base-attack": "198",
                "base-defense": "189",
                "base-stamina": "190",
                "max-cp": "2720",
                "max-hp": "162"
              }
          },
          {
                "num": "002",
                "name": "ivysaur",
                "stats": {
                 "base-attack": "151",
                 "base-defense": "143",
                 "base-stamina": "155",
                 "max-cp": "1699",
                 "max-hp": "134"
                 }
          },
          {
                "num": "005",
                "name": "charmeleon",
                "stats": {
                 "base-attack": "158",
                 "base-defense": "126",
                 "base-stamina": "151",
                 "max-cp": "1653",
                 "max-hp": "131"
               }
          },
          {
                "num": "001",
                "name": "bulbasaur",
                "stats": {
                    "base-attack": "118",
                    "base-defense": "111",
                    "base-stamina": "128",
                    "max-cp": "1115",
                    "max-hp": "113"
                 }
          },
          {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
              }
          },             
          {
                "num": "004",
                "name": "charmander",
                "stats": {
                    "base-attack": "116",
                    "base-defense": "93",
                    "base-stamina": "118",
                    "max-cp": "980",
                    "max-hp": "105"
                }
                },
      ];
       it('descendingCp', () => {
        expect(pokemonOrder.sortedByOrder(pokemons,"descendingCp")).toStrictEqual(output5);
       });

       const output6 = [
            {
            "num": "004",
            "name": "charmander",
            "stats": {
                "base-attack": "116",
                "base-defense": "93",
                "base-stamina": "118",
                "max-cp": "980",
                "max-hp": "105"
            }
            },
            {
                "num": "001",
                "name": "bulbasaur",
                "stats": {
                    "base-attack": "118",
                    "base-defense": "111",
                    "base-stamina": "128",
                    "max-cp": "1115",
                    "max-hp": "113"
            }
            },
            {
                "num": "001",
                "name": "bulbasaur",
                "stats": {
                    "base-attack": "118",
                    "base-defense": "111",
                    "base-stamina": "128",
                    "max-cp": "1115",
                    "max-hp": "113"
                  }
            },
            {
                "num": "005",
                "name": "charmeleon",
                "stats": {
                 "base-attack": "158",
                 "base-defense": "126",
                 "base-stamina": "151",
                 "max-cp": "1653",
                 "max-hp": "131"
               }
            },
            {
            "num": "002",
            "name": "ivysaur",
            "stats": {
             "base-attack": "151",
             "base-defense": "143",
             "base-stamina": "155",
             "max-cp": "1699",
             "max-hp": "134"
            }
            },
            {
              "num": "003",
              "name": "venusaur",
              "stats": {
              "base-attack": "198",
              "base-defense": "189",
              "base-stamina": "190",
              "max-cp": "2720",
              "max-hp": "162"
            }
            },
      ];
       
       it('ascendingHp', () => {
        expect(pokemonOrder.sortedByOrder(pokemons,"ascendingHp")).toStrictEqual(output6);
       }); 
       
       const output7 = [
        {
            "num": "003",
            "name": "venusaur",
            "stats": {
            "base-attack": "198",
            "base-defense": "189",
            "base-stamina": "190",
            "max-cp": "2720",
            "max-hp": "162"
          }
        },
        {
            "num": "002",
            "name": "ivysaur",
            "stats": {
             "base-attack": "151",
             "base-defense": "143",
             "base-stamina": "155",
             "max-cp": "1699",
             "max-hp": "134"
            }
        },
        {
            "num": "005",
            "name": "charmeleon",
            "stats": {
             "base-attack": "158",
             "base-defense": "126",
             "base-stamina": "151",
             "max-cp": "1653",
             "max-hp": "131"
           }
        },
        {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
        }
        },
        {
            "num": "001",
            "name": "bulbasaur",
            "stats": {
                "base-attack": "118",
                "base-defense": "111",
                "base-stamina": "128",
                "max-cp": "1115",
                "max-hp": "113"
              }
        },
        {
        "num": "004",
        "name": "charmander",
        "stats": {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
        }
        }
  ];
       it('descendingHp', () => {
       expect(pokemonOrder.sortedByOrder(pokemons,"descendingHp")).toStrictEqual(output7);
       });
     });
});