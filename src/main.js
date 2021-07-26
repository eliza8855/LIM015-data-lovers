import data from './data/pokemon/pokemon.js';
import { filterByName , filterByType, pokemonOrder,attackName ,calculateDmgStab ,calculateDps,calculateEps } from './data.js';

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

 const TypePokemonLabels = (arrayType) => {
    let labelEachPokemon = '';
    arrayType.forEach((typeElement) => {
      labelEachPokemon += `<div class="modalPokeLabelBox">
                              <img class="modalPokeLabel"src="type-labels/${typeElement}.png" alt=" type pokemon labels"/>
                           </div>`;  
    });
    return labelEachPokemon;
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
    modalpkm.innerHTML = `  <div class="modalContent">
                             <div id="modalButtonCloseContainer">
                                 <span class="modalButtomclose" ><i class="far fa-times-circle"></i></span> 
                             </div>
                             <div class="modalColumnsContainer">
                                <div class="modalColumn" id="modalColumnLeft">
                                   <div class="modalColumnElement modalNameContainer">
                                      <div class="modalPokeNameBox">
                                         <h2 class="modalName">${pkm.name} </h2>
                                      </div>
                                      <div class="modalPokeNumBox">
                                         <p id="modalNum">N° ${pkm.num}</p>
                                      </div>
                                   </div>
                                   <div class="modalColumnElement modalPokeImageAboutContainer">
                                      <div class="modalPokeAboutBox">
                                         <p id="modalAbout">${pkm.about}</p>
                                      </div>
                                      <div class="modalPokeImgBox">
                                         <img id="modalImg"src="${pkm.img}"></img>
                                      </div>                                      
                                   </div>                                    
                                   <div class="modalTableGeneralStyle modalTablePokeData">
                                     <div id="grid1">
                                        <h3>Rarity</h3>
                                        <p>${pkm.rarity}</p>
                                     </div>
                                     <div id="grid2">
                                        <h3>Height</h3>
                                        <p>${pkm.size.height}</p>
                                     </div>
                                     <div id="grid3">
                                        <h3>Weight</h3>
                                        <p>${pkm.size.weight}</p>                                        
                                     </div>
                                     <div id="grid4">
                                         <h3>Type</h3>
                                         <div class="modalPokeLabelContainer">
                                            ${TypePokemonLabels(pkm.type)}
                                         </div>
                                     </div>
                                     <div id="grid5">
                                         <h3>Egg</h3>
                                         <p>${pkm.egg}</p>
                                     </div>
                                     <div id="grid6">
                                         <h3>Resistant</h3>
                                         <div class="modalPokeLabelContainer">
                                           ${TypePokemonLabels(pkm.resistant)}
                                         </div>
                                     </div>
                                     <div id="grid7">
                                        <h3>Weakenesses</h3>
                                        <div class="modalPokeLabelContainer">
                                        ${TypePokemonLabels(pkm.weaknesses)}
                                      </div>
                                     </div>                                     
                                   </div>
                                  
                                </div>

                                <div class="modalColumn" id="modalColumnRight"> 
                                 <h2 class="subtitleModal">Stats:</h2>
                                 
                                 <div class="modalTableGeneralStyle modalTablePokeStat1">
                                    <div>
                                      <h3>Max HP</h3>
                                    </div>
                                    <div>
                                      <h3>Max CP</h3>
                                    </div>
                                    <div>
                                      <h3>Base Attack</h3>
                                    </div>
                                    <div>
                                      <h3>Base Defense</h3>
                                    </div>
                                    <div>
                                      <h3>Base Stamina</h3>
                                    </div>
                                    <div>
                                      <p>${pkm.stats['max-hp']}</p>
                                    </div>
                                    <div>
                                       <p>${pkm.stats['max-cp']}</p>
                                    </div>
                                    <div>
                                       <p>${pkm.stats['base-attack']}</p>
                                    </div>
                                    <div>
                                       <p>${pkm.stats['base-defense']}</p>
                                    </div>
                                    <div>
                                       <p>${pkm.stats['base-stamina']}</p>
                                    </div>
                                 </div>

                                 <section class="evolutions">
                                 <div class="title-ev">
                                   <h5>Evolutions & Pre-evolutions</h5>
                                 </div>
                                 <div class="body-ev">${showImgEvolution(pkm.evolution)}
                                 </div> 
                                 </section>


                                </div>
                             </div>
                       </div>
                      `;
    document.querySelector('.container-modal').appendChild(modalpkm);
    modalpkm.style.display ="block";
    // detectamos la "x" e indicamos que al hacer clic se desaparezca el modal
    let closetag = modalpkm.querySelector(".modalButtomclose");
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


    function showTable(data) {
      const table = data.map(elemento => {
        return `<td>${elemento}</td>`
      }).join('');
      return table;}


   // Show evolutions 
const showImgEvolution = (element) => {
  let imagEvolution = "";

  if (element["next-evolution"] !== undefined) {
    element["next-evolution"].forEach((x) => {
      const nextEvolution_1 = pokemonList.find((item) => item.name === x.name);
      if (nextEvolution_1 !== undefined) {
        imagEvolution += `<img src="https://www.serebii.net/pokemongo/pokemon/${nextEvolution_1.num}.png"><p>${nextEvolution_1.name}</p><p>Nº ${nextEvolution_1.num}</p>`;
      }
      if (element["next-evolution"][0]["next-evolution"] !== undefined) {
        element["next-evolution"][0]["next-evolution"].forEach((y) => {
          const nextEvolution_2 = pokemonList.find((item) => item.name === y.name);
          if (nextEvolution_2 !== undefined) {
            imagEvolution += `<img src="https://www.serebii.net/pokemongo/pokemon/${nextEvolution_2.num}.png"><p>${nextEvolution_2.name}</p><p>Nº ${nextEvolution_2.num}</p> `;
            
          }
        });
      }
    });
  }
  if (element["prev-evolution"] !== undefined) {
    element["prev-evolution"].forEach((x) => {
      const preEvolution_1 = pokemonList.find((item) => item.name === x.name);
      if (preEvolution_1 !== undefined) {
        imagEvolution += `<img src="https://www.serebii.net/pokemongo/pokemon/${preEvolution_1.num}.png"><p>${preEvolution_1.name}</p><p>Nº ${preEvolution_1.num}</p>`;
      }
    });
    if (element["prev-evolution"][0]["prev-evolution"] !== undefined) {
      element["prev-evolution"][0]["prev-evolution"].forEach((y) => {
        const preEvolution_2 = pokemonList.find((item) => item.name === y.name);
        if (preEvolution_2 !== undefined) {
          imagEvolution += `<img src="https://www.serebii.net/pokemongo/pokemon/${preEvolution_2.num}.png""><p>${preEvolution_2.name}</p><p>Nº ${preEvolution_2.num}</p>`;
        }
      });
    }
  }
  return  imagEvolution;
};






 

  // ----extra info del modal --------
//   <div>
//   <p class="type">Type</p>
//   <p>${pkm.type}</p>
// </div>                                
// </div>
// <div class="comun-modal contenido">
// <div>
//   <p class="bold">Height</p>
//   <p>${pkm.size.height}</p>
// </div>                                
// </div>
// <div class="comun-modal contenido">   
// <div>
//   <p class="bold">Weight</p>
//   <p>${pkm.size.weight}</p>
// </div>
// </div>
// </div>