class ApiRequester {

    getPokemons() {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`);
    }
    getPokemon(pokemonName) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }

}

export default new ApiRequester()
