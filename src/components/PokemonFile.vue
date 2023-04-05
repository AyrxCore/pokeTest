<template>

    <div class="pokemon-file">
        <v-card
            class="pa-5"
            width="400px"
            min-height="300px"
            style="position: relative"
        >
            <v-btn
                class="mr-4"
                style="position: absolute; right: 0;"
                icon
                @click="removePokemon(pokemon)"
                color="red"
            >
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>
            <v-skeleton-loader
                v-if="isEmptyPokemon"
                type="list-item-avatar, table-heading@4"
            ></v-skeleton-loader>
            <div v-else>
                <v-card-title class="flex-column align-center">
                    <v-row>
                        <v-col class="col-6">
                            <div class="d-flex flex-column align-center">
                                <span class="text-caption">Default</span>
                                <img class="img-front-default" :src="frontDefaultImg" alt="front_default"/>
                            </div>
                        </v-col>
                        <v-col class="col-6">
                            <div class="d-flex flex-column align-center">
                                <span class="text-caption">Shiny</span>
                                <img class="img-front-shiny" :src="frontShinyImg" alt="front_shiny"/>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex align-center justify-center">
                            <div>{{ name }}</div>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="col-4">Weight/Height</v-col>
                        <v-col class="col-8">
                            {{ pokemon.weight }} / {{ pokemon.height }}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="col-3">Type(s)</v-col>
                        <v-col class="col-9">
                            <Types
                                v-for="(type, key) in types"
                                :key="key"
                                :type="type.type"
                            ></Types>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="col-3">Stats</v-col>
                        <v-col class="col-9">
                            <Stats
                                :stats="stats"
                            ></Stats>
                        </v-col>
                    </v-row>
                </v-card-text>
            </div>
        </v-card>
    </div>

</template>

<script>
/* eslint-disable */
import apiRequester from "../../src/services/apiRequester";
import Types from "@/components/Types.vue";
import Stats from "@/components/Stats.vue";

export default {
    name: 'PokemonFile',
    components: {
        Stats,
        Types
    },
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    methods: {
        firstLetterUppercase(string) {
            return string?.charAt(0).toUpperCase() + string?.slice(1);
        },
        removePokemon(pokemon) {
            this.$store.commit('removePokemon', pokemon.id);
        }
    },
    computed: {
        frontDefaultImg() {
            return this.pokemon?.sprites?.front_default;
        },
        frontShinyImg() {
            return this.pokemon?.sprites?.front_shiny;
        },
        isEmptyPokemon() {
            return Object.keys(this.pokemon).length === 0;
        },
        types() {
            return this.pokemon?.types;
        },
        stats() {
            return this.pokemon?.stats;
        },
        name() {
            return this.firstLetterUppercase(this.pokemon?.name)
        }
    },
    // async created() {
    //     this.pokemon = await apiRequester.getPokemon('ditto');
    // }
}

</script>

<style scoped>

.img-front-default, .img-front-shiny {
    width: 200px;
}

</style>
