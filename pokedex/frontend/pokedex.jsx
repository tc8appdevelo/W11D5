import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_util'
document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');

    window.receiveAllPokemon = receiveAllPokemon;
    window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
    window.fetchAllPokemon = fetchAllPokemon;
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);

});

// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);
