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
            <div class="d-flex flex-wrap">
                <PokemonFile
                    v-for="(pokemon, key) in savedPokemons"
                    :key="key"
                    :pokemon="pokemon"
                    class="ml-4 mb-4"
                />
            </div>

        </v-app>
    </div>

</template>

<script>
/* eslint-disable */
import PokemonFile from './components/PokemonFile.vue'
import apiRequester from "@/services/apiRequester";
import _debounce from "lodash/debounce";
import {forEach} from "lodash";

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
        items() {
            const savedPokemonsNames = this.savedPokemons.map(savedPokemon => {
                return savedPokemon.name;
            });
            return this.pokemons.filter(pokemon => {
                return savedPokemonsNames.findIndex((x) => x === pokemon.name) === -1
            });
        },
        savedPokemons() {
            return this.$store.state.mainStore.savedPokemons;
        }
    },
    watch: {
        async search(val) {
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
                        this.$store.commit('addPokemon', res);
                    })
                    .finally(() => (this.isLoading = false));
            }
        }
    },
}
</script>

<style>


</style>
