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
    <div id="bottoni">

        <div id="btn" v-if="store.APIseriesPages > 1">
            <button @click="changePageSerieBack()" id="page-btn"><i class="fa-solid fa-arrow-left"></i> </button>

        </div>

        <div id="btn" v-if="store.APIseriesPages > 1">
            <button @click="changePageSerie()" id="page-btn"><i class="fa-solid fa-arrow-right"></i> </button>
            <span class="num-page">{{ store.actualSeriesPage }} / {{ store.APIseriesPages }}</span>
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