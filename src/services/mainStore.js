const state = () => ({
    pokemons: [
        {
            name: 'ditto',
            weight: 40,
            height: 3,
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
        state.pokemon.push(newPokemon)
    }
}

export default {
    state,
    mutations
}
