
export const fetchAllPokemon = () => {
    $.ajax({
        method: 'GET',
        url: '/api/pokemon'
    }).then(
        pokemon => console.log(pokemon),
        error => console.log(error)
    );
}