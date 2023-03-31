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

    methods: {
        searchMovie() {
            this.store.path = "/search/movie";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`

            // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters).then((res) => {
                console.log(res.data)

                this.store.actualMoviesPage = res.data.page
                this.store.APImoviesPages = res.data.total_pages;
                this.store.moviesList = res.data.results;

                console.log("numero pagine=" + this.store.APIpage)


            });
        },

        searchSerie() {
            this.store.path = "/search/tv";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`

            console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters).then((res) => {
                console.log(res.data.results)

                this.store.APIseriesPages = res.data.total_pages;
                this.store.actualSeriesPage = res.data.page;

                this.store.seriesTvList = res.data.results
            })


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
