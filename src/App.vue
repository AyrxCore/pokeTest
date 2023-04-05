<template>

    <div id="app">
        <v-app>
            <div>
                <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    hide-no-data
                    hide-selected
                    item-text="name"
                    item-value="id"
                    label="Search a pokemon"
                    placeholder="Start typing to Search"
                    prepend-icon="mdi-database-search"
                    return-object
                    @input="getPokemon(model?.name)"
                ></v-autocomplete>
            </div>
            <PokemonFile
                v-if="pokemon !== null"
                :pokemon="pokemon"
            />
        </v-app>
    </div>

</template>

<script>
/* eslint-disable */
import PokemonFile from './components/PokemonFile.vue'
import apiRequester from "@/services/apiRequester";
import _debounce from "lodash/debounce";

export default {
    name: 'App',
    components: {
        PokemonFile
    },
    data: () => ({
        isLoading: false,
        model: null,
        search: null,
        pokemons: [],
        pokemon: null
    }),
    computed: {
        items () {
            return this.pokemons;
        },
    },
    watch: {
        async search (val) {
            // // Items have already been loaded
            // if (this.items.length > 0) return

            // Items have already been requested
            if (this.isLoading) return

            this.isLoading = true

            await apiRequester.getPokemons()
                .then(res => res.json())
                .then(res => {
                    this.pokemons = res.results
                })
                .finally(() => (this.isLoading = false));
        },
    },
    methods: {
        async getPokemon(pokemonName) {
            if(pokemonName !== null && pokemonName !== undefined) {
                await apiRequester.getPokemon(pokemonName)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        this.pokemon = res
                    })
                    .finally(() => (this.isLoading = false));
            }
        }
    }
}
</script>

<style>


</style>
