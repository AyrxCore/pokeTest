<template>

    <div class="d-flex flex-wrap justify-center">
        <div
            v-for="(stat, key) in stats"
            :key="key"
            class="d-flex flex-column align-center"
            style="width: 60px"
        >
            <v-progress-circular
                :value="stat.base_stat"
                :color="statColor(stat.base_stat)"
                :rotate="-90"
                :size="50"
                :width="7"
            ></v-progress-circular>
            <div class="caption text-center">{{ statNameUppercase(stat.stat.name) }}</div>
        </div>

    </div>

</template>

<script>
/* eslint-disable */
export default {
    name: "Stats",
    props: {
        stats: {
            type: Array,
            required: true
        }
    },
    computed: {
        color() {
            if(this.stat.base_stat <= 30) {
                return 'red';
            } else if(this.stat.base_stat > 30 && this.stat.base_stat > 70) {
                return "orange";
            } else {
                return "green";
            }
        }
    },
    methods: {
        statNameUppercase(statName) {
            return statName.charAt(0).toUpperCase() + statName.slice(1);
        },
        statColor(baseStat) {
            if(baseStat <= 30) {
                return 'red';
            } else if(baseStat > 30 && baseStat < 70) {
                return "orange";
            } else {
                return "green";
            }
        }
    }
}
</script>

<style scoped>

</style>
