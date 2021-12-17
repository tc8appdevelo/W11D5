import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {}
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            for(const idx in action.pokemon){
                nextState[action.pokemon[idx].id] = action.pokemon[idx];
            }
            return nextState;
        default:
            return state;
    }
};

export default pokemonReducer;

