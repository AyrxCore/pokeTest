const state = () => ({
    savedPokemons: [
        {
            id: 132,
            name: 'ditto',
            weight: 40,
            height: 3,
            sprites: {
                front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
                front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
            },
            types: [
                {
                    type: {
                        name: 'normal'
                    }
                }
            ],
            stats: [
                {
                    base_stat: 48,
                    stat: {
                        name: 'hp'
                    }
                },
                {
                    base_stat: 48,
                    stat: {
                        name: 'attack'
                    }
                },
                {
                    base_stat: 48,
                    stat: {
                        name: 'defense'
                    }
                },
                {
                    base_stat: 48,
                    stat: {
                        name: 'special-attack'
                    }
                },
                {
                    base_stat: 48,
                    stat: {
                        name: 'special-defense'
                    }
                },
                {
                    base_stat: 48,
                    stat: {
                        name: 'speed'
                    }
                },
            ]
        }
    ]
})

const mutations = {
    addPokemon(state, newPokemon) {
        state.savedPokemons.push(newPokemon)
    },
    removePokemon(state, pokemonId) {
        let index = state.savedPokemons.findIndex((x) => x.id === pokemonId);
        state.savedPokemons.splice(index, 1);
    }
}

export default {
    state,
    mutations
}
