<script>
import { store } from '../store.js';
import axios from 'axios'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        changePageMovie() {
            this.store.path = "/search/movie";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`


            if (this.store.actualMoviesPage == this.store.APImoviesPages) {
                this.store.actualMoviesPage = 1
            } else {
                this.store.actualMoviesPage++;
            }

            // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters + this.store.pagePath + this.store.actualMoviesPage).then((res) => {
                console.log(res.data.results)

                this.store.moviesList = res.data.results


            });
        },

        changePageMovieBack() {
            this.store.path = "/search/movie";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`


            if (this.store.actualMoviesPage == 1) {
                this.store.actualMoviesPage = 1
            } else {
                this.store.actualMoviesPage--;
            }

            // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters + this.store.pagePath + this.store.actualMoviesPage).then((res) => {
                console.log(res.data.results)

                this.store.moviesList = res.data.results


            });
        },

    }
}
</script>

<template>
    <div id="bottoni">

        <div id="btn" v-if="store.APImoviesPages > 1">
            <button @click="changePageMovieBack()" id="page-btn"> <i class="fa-solid fa-arrow-left"></i> </button>

        </div>

        <div id="btn" v-if="store.APImoviesPages > 1">
            <button @click="changePageMovie()" id="page-btn"> <i class="fa-solid fa-arrow-right"></i> </button>
            <span class="num-page">{{ store.actualMoviesPage }} / {{ store.APImoviesPages }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>