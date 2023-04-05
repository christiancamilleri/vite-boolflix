<script>

import ChangePage from './ChangePage.vue';
import ChangePageSeries from './ChangePageSeries.vue';
import CardItem from './CardItem.vue';

import { store } from '../store.js';


export default {
    data() {
        return {
            store,
        }
    },
    components: {

        ChangePage,
        ChangePageSeries,
        CardItem,
    },
    methods: {

    }
}

</script>

<template>
    <!--  home -->
    <div class="container">
        <div v-show="this.store.index == 0">
            <div class="type">
                Film in tendenza questa settimana
            </div>
            <div class="card-container">
                <CardItem v-for="film in this.store.movies" :type="'movie'" :id="film.id" :card="film"></CardItem>
            </div>
            <div class="type">Serie TV in tendenza questa settimana</div>
            <div class="card-container">
                <CardItem v-for="serie in this.store.series" :type="'tv'" :id="serie.id" :card="serie"></CardItem>
            </div>
        </div>
    </div>

    <!-- film -->
    <div v-show="this.store.index == 2">
        <div v-if="this.store.moviesList.length <= 0" class="type">
            Scrivi un titolo nella barra diricerca
        </div>
        <div v-else class="card-container">
            <CardItem v-for="film in this.store.moviesList" :type="'movie'" :id="film.id" :card="film"></CardItem>
        </div>
        <ChangePage></ChangePage>
    </div>

    <!-- serie -->
    <div v-show="this.store.index == 1">
        <div v-if="this.store.seriesTvList.length <= 0" class="type">
            Scrivi un titolo nella barra di ricerca
        </div>
        <div v-else class="card-container">
            <CardItem v-for="serie in this.store.seriesTvList" :type="'tv'" :id="serie.id" :card="serie"></CardItem>
        </div>
        <ChangePageSeries></ChangePageSeries>
    </div>
</template>

<style lang="scss" scoped>
.type {

    font-size: 2em;
    font-weight: bold;
    padding: 1em 0 0 2em;
}

.card-container {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin-bottom: 60px;
    padding: 4em;
}
</style>