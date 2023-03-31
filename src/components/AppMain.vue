<script>
import movieItem from './movieItem.vue';
import SerieItem from './SerieItem.vue';

import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        movieItem,
        SerieItem,
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
        changePageSerie() {
            this.store.path = "/search/tv";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`


            if (this.store.actualSeriesPage == this.store.APIseriesPages) {
                this.store.actualSeriesPage = 1
            } else {
                this.store.actualSeriesPage++;
            }

            // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters + this.store.pagePath + this.store.actualSeriesPage).then((res) => {
                console.log(res.data.results)

                this.store.seriesTvList = res.data.results


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
        changePageSerieBack() {
            this.store.path = "/search/tv";
            this.store.queryParameters = `&query=${encodeURIComponent(this.store.searchByText)}`


            if (this.store.actualSeriesPage == 1) {
                this.store.actualSeriesPage = 1
            } else {
                this.store.actualSeriesPage--;
            }

            // console.log(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters)

            axios.get(this.store.APIstandard + this.store.path + this.store.APIkey + this.store.queryParameters + this.store.pagePath + this.store.actualSeriesPage).then((res) => {
                console.log(res.data.results)

                this.store.seriesTvList = res.data.results


            });
        },
    }
}

</script>

<template>
    <div id="movies-list" v-if="store.moviesList.length > 0">
        <h1>Film</h1>
        <ul>
            <li v-for="movie in store.moviesList">

                <movieItem :movie="movie"></movieItem>

            </li>
        </ul>
        <div id="bottoni">

            <div id="btn" v-if="store.APImoviesPages > 1">
                <button @click="changePageMovieBack()" id="page-btn"> back </button>

            </div>

            <div id="btn" v-if="store.APImoviesPages > 1">
                <button @click="changePageMovie()" id="page-btn"> -> </button>
                <span>{{ store.actualMoviesPage }} / {{ store.APImoviesPages }}</span>
            </div>

        </div>
    </div>



    <div id="series-list" v-if="store.seriesTvList.length > 0">
        <h1>Serie TV</h1>
        <ul>
            <li v-for="serie in store.seriesTvList">
                <SerieItem :serie="serie"></SerieItem>
            </li>
        </ul>

        <div id="bottoni">

            <div id="btn" v-if="store.APIseriesPages > 1">
                <button @click="changePageSerieBack()" id="page-btn"> back </button>

            </div>

            <div id="btn" v-if="store.APIseriesPages > 1">
                <button @click="changePageSerie()" id="page-btn"> -> </button>
                <span>{{ store.actualSeriesPage }} / {{ store.APIseriesPages }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#movies-list {
    padding: 2em;
    height: 100%;

    h1 {
        color: red;
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        gap: 2em 0;
        height: 100%;


        li {
            width: calc(100% / 6);
            border: 1px solid white;

            height: 500px;

            overflow: auto;

        }

    }


}

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


#series-list {

    height: 100%;

    h1 {
        color: red;
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        gap: 2em 0;
        height: 100%;


        li {
            width: calc(100% / 6);
            border: 1px solid white;

            height: 500px;

            overflow: auto;

        }

    }

}
</style>