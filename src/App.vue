<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store.js';
import axios from 'axios';


export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
    created() {
        if (this.store.index == 0) {

            this.store.path = "/trending/movie/week";

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey).then((res) => {
                this.store.movies = res.data.results;



            })
        }

        this.store.path = "/trending/tv/week"
        axios.get(this.store.APIstandard + this.store.path + this.store.APIkey).then((res) => {
            this.store.series = res.data.results
        })


    },

    methods: {
        searchMovie() {
            if (this.store.index == 2 || this.store.index == 0) {

                this.store.path = "/search/movie";
                this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`

                // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

                axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters).then((res) => {

                    this.store.actualMoviesPage = res.data.page
                    this.store.APImoviesPages = res.data.total_pages;
                    this.store.moviesList = res.data.results;

                });
            }
        },

        searchSerie() {
            if (this.store.index == 1 || this.store.index == 0) {
                this.store.path = "/search/tv";
                this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`

                axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters).then((res) => {

                    this.store.APIseriesPages = res.data.total_pages;
                    this.store.actualSeriesPage = res.data.page;

                    this.store.seriesTvList = res.data.results
                })

            }


        }
    },
}
</script>

<template>
    <div>
        <AppHeader @searchMovie="searchMovie(), searchSerie()"></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>

    </div>
</template>

<style scoped></style>
