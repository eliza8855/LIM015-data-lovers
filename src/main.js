// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');
// const containerModal = document.querySelector('.container-modal');
// const inputSearch = document.getElementById('search');


const showPokemon = (list) => {
    let count = 0;
    list.forEach((pokem) => {
      const card = document.createElement('div');
      card.className = 'pokemon-group';
      card.innerHTML = `
        <div class="poke-img">
          <p class="poke-num">Nº ${pokem.num}</p>
          <img src="${pokem.img}">
        </div>
        
        <div class="container-info">
          <p class="poke-name">${pokem.name}</p>
          <div class="comun">${pokem.type}</div>
          <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
          <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
          
        </div>`;
  
      card.addEventListener('click', () => {
        const show = showModal(pokem);
        show.classList.add('modal');
      });
      count += 1;
      containerPokemons.appendChild(card);
    });
    document.getElementById('quantity').innerHTML = count;
    return containerPokemons;
  };

  showPokemon(pokemonList);



  const showModal = (pkm) => {
    const modal = document.createElement('div');

    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal-flex"> 
                        <div class="modal-info">
                           <p class="poke-name-card bold">${pkm.name} N°<spam>${pkm.num}</spam></p>
                           <div class="img-modal"><img src="${pkm.img}"></div>  
                           <p class="about">${pkm.about}</p>
                           <div>
                                  <p class="type">Type</p>
                                  <p>${pkm.type}</p>
                                </div>                                
                              </div>
                           <div class="comun-modal contenido">
                            
                                <div>
                                  <p class="bold">Height</p>
                                  <p>${pkm.size.height}</p>
                                </div>                                
                              </div>

                              

                            <div class="comun-modal contenido">
                             
                              <div>
                                <p class="bold">Weight</p>
                                <p>${pkm.size.weight}</p>
                              </div>
                            </div>




                           

                        </div>
                      
                      `;
    document.querySelector('.container-modal').appendChild(modal);
    }
  
//   showModal(data.pokemon[0]); 
  
    for (let i=0; i<252; i++){
        showModal(data.pokemon[i]);
    }


// console.log(example, data);
