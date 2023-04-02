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
            <button @click="changePageMovieBack()" id="page-btn"> back </button>

        </div>

        <div id="btn" v-if="store.APImoviesPages > 1">
            <button @click="changePageMovie()" id="page-btn"> -> </button>
            <span>{{ store.actualMoviesPage }} / {{ store.APImoviesPages }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#bottoni {
    display: flex;
    gap: 1em;
    justify-content: flex-end;

    #btn {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 1em;

        #page-btn {
            width: 100px;
        }
    }
}
</style>