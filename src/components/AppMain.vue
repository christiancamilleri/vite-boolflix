<script>

import ChangePage from './ChangePage.vue';
import ChangePageSeries from './ChangePageSeries.vue';
import Card from './Card.vue';

import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    components: {

        ChangePage,
        ChangePageSeries,
        Card,
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
                <Card v-for="film in this.store.movies" :card="film"></Card>
            </div>
            <div class="type">Serie TV in tendenza questa settimana</div>
            <div class="card-container">
                <Card v-for="serie in this.store.series" :card="serie"></Card>
            </div>
    </div>
</div>

<!-- film -->
<div v-show="this.store.index == 2">
    <div v-if="this.store.moviesList.length <= 0" class="type">
        Scrivi un titolo nella barra della ricerca
    </div>
    <div v-else class="card-container">
            <Card v-for="film in this.store.moviesList" :card="film"></Card>
        </div>
        <ChangePage></ChangePage>
    </div>

    <!-- serie -->
    <div v-show="this.store.index == 1">
        <div v-if="this.store.seriesTvList.length <= 0" class="type">
            Scrivi un titolo nella barra della ricerca
        </div>
        <div v-else class="card-container">
            <Card v-for="serie in this.store.seriesTvList" :card="serie"></Card>
        </div>
        <ChangePageSeries></ChangePageSeries>
    </div>



    <!-- <div v-show="this.store.index == 1" id="series-list" v-if="store.seriesTvList.length > 0">
                                                                <h1>Serie TV</h1>
                                                                <ul>
                                                                    <li v-for="serie in store.seriesTvList">
                                                                        <SerieItem :serie="serie"></SerieItem>
                                                                    </li>
                                                                </ul>

                                                                <ChangePageSeries></ChangePageSeries>
                                                            </div> -->
</template>

<style lang="scss" scoped>
.container {

    // padding: 40px 60px;


}

.type {

    font-size: 2em;
    font-weight: bold;
}

.card-container {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin-bottom: 60px;
    padding: 2em;
}
</style>