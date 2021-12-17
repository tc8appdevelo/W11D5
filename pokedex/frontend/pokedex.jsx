import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_util'
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');

    window.receiveAllPokemon = receiveAllPokemon;
    window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
    window.fetchAllPokemon = fetchAllPokemon;
    window.rootReducer = rootReducer;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);

});

// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);
