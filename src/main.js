import data from './data/pokemon/pokemon.js';
import { filterByName , filterByType, pokemonOrder} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');
// const containerModal = document.querySelector('.container-modal');



// --------------------filterByName----------

const MessageError = () => {
  containerPokemons.innerHTML = '';
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
     div.className = 'message-error';
     img.src = 'IMG/psyduck-confussed.gif';
     p.innerHTML = '🤪⚠️. . . Oopps !! Error 404 Pokemon Not Found!  ';
  div.appendChild(img);
  div.appendChild(p);
  containerPokemons.appendChild(div);
};

const inputSearch = document.querySelector('#inputFilterByName');

inputSearch.addEventListener('keyup', () => {
  const searchedPokemons = filterByName(pokemonList, inputSearch.value);
  if (searchedPokemons.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(searchedPokemons);
  }
});


// --------------filterByType------------

const elementTypeFilter = document.querySelector('#filterByType-options');

elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all' || elementTypeFilter.value === '' ) {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const filteredPokemonsByType = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(filteredPokemonsByType);
  }
});


// --------------order options------------

const optionsOrder =document.querySelector('#orderBy-options');

optionsOrder.addEventListener("change" , () => {
  const selection = optionsOrder.value;
  if (optionsOrder.value === '') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const dataOrder = pokemonOrder.differentOrder(pokemonList,selection);
    
    containerPokemons.innerHTML = '';
     showPokemon(dataOrder);
  }});

//-----sortby options --------------------

const optionsSortBy =document.querySelector('#sort-by-order');

optionsSortBy.addEventListener("change" , () => {
  const selection2 = optionsSortBy.value;
if (optionsSortBy.value === '') {
  containerPokemons.innerHTML = '';
  showPokemon(pokemonList);
} else {
  const sortByOrder = pokemonOrder.sortedByOrder(pokemonList,selection2);
  containerPokemons.innerHTML = '';
     showPokemon(sortByOrder);
}});

// --------------reload------------

document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});



//-------Show Pokemons + counter-------------------

const TypePokemon = (arrayType) => {
    let imgEachPokemon = '';
    arrayType.forEach((typeElement) => {
      imgEachPokemon += `<div id="poke-type-icon-box"><img id="poke-type-icon"src="type-icons/${typeElement}.png" alt=" type pokemon"/><div>`;  
    });
    return imgEachPokemon;
  };
 

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
          <!--<div class="comun">${pokem.type}</div>-->
          
          <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
          <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p
        </div>
        <div id="poke-type-icon-container">${TypePokemon(pokem.type)}</div>
        `;
      // When the user clicks the card opens the modal
      card.addEventListener('click', () => {
        openAndCloseModal(pokem)
      });
      count += 1;
      containerPokemons.appendChild(card);
    });
    document.getElementById('quantity').innerHTML = count;
    return containerPokemons;
  };

  showPokemon(pokemonList);


// elementOrderAtoZ.addEventListener('change', () => {
//   if (elementOrderAtoZ.value === 'A-Z') {
//     containerPokemons.innerHTML = '';
//     showPokemon(orderByAtoB(pokemonList));
//   }
// });


//---------------Function Open Modal-------------------
  const openAndCloseModal = (pkm) => {
    const modalpkm = document.createElement('div');
    modalpkm.classList.add('modal');
    modalpkm.innerHTML = `<div class="modal-content"> 
                          <span class="close">&times;</span>
                          <div class="modal-info">
                            <p class="poke-name-card bold">${pkm.name} N°<spam>${pkm.num}</spam></p>
                            <img class="threeD-IMG" src= "https://projectpokemon.org/images/normal-sprite/${pkm.name}.gif"></img> 
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
    document.querySelector('.container-modal').appendChild(modalpkm);
    modalpkm.style.display ="block";
    // detectamos la "x" e indicamos que al hacer clic se desaparezca el modal
    let closetag = modalpkm.querySelector(".close");
      closetag.addEventListener("click", () => {
      modalpkm.style.display = "none";
      })
    // indicamos que se cierre el modal al hacer click fuera del modal
      window.addEventListener ("click", (e) => {
        if (e.target == modalpkm) {
          modalpkm.style.display = "none";
        }
       })
    
    };


  