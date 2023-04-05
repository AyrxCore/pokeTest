<template>

    <v-chip
        :color="color"
        dark
        class="mr-2"
    >
        {{ typeName }}
    </v-chip>

</template>

<script>
/* eslint-disable */
export default {

    name: "Types",
    props: {
        type: {
            type: Object,
            required: true
        }
    },
    computed: {
        color() {
            switch (this.type.name) {
                case 'fire':
                    return 'red';
                case 'water':
                    return 'blue';
                case 'grass':
                    return 'green';
                case 'electric':
                    return 'yellow';
                case 'ice':
                    return 'cyan';
                case 'fighting':
                    return 'orange';
                case 'poison':
                    return 'bright purple';
                case 'ground':
                    return 'brown';
                case 'flying':
                    return 'sky blue';
                case 'psychic':
                    return 'magenta';
                case 'bug':
                    return 'chartreuse';
                case 'rock':
                    return 'grayish brown';
                case 'ghost':
                    return 'dark purple';
                case 'dragon':
                    return 'indigo';
                case 'dark':
                    return 'black';
                case 'steel':
                    return 'silver';
                case 'fairy':
                    return 'pink';
                default:
                    return 'gray';
            }
        },
        typeName() {
            return this.type.name.charAt(0).toUpperCase() + this.type.name.slice(1);
        }
    }
}

</script>

<style scoped>

</style>
