<script>
import { store } from '../store.js';

import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        serie: Object,
    },

    methods: {
        flagEmoji() {
            let language = this.serie.original_language;


            if (language == "en") {
                language = "gb"
            } else if (language == "") {
                language = "sconosciuta"
            } else if (language == "ja") {
                language = "jp"
            }

            return language
        },
        transformVoteInInt(serie) {
            let numInt = Math.round(serie.vote_average);

            if (numInt > 5) {
                numInt = 5
            }

            return numInt


        }
    }

}
</script>

<template>
    <div id="series-list">
        <div id="img-container">

            <img :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`" alt="">

        </div>

        <h2>{{ serie.name }}</h2>
        <small>{{ serie.original_name }}</small>
        <small>Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span>
        </small>
        <small>Voto: {{ transformVoteInInt(serie) }}</small>

    </div>
</template>

<style lang="scss" scoped>
#series-list {

    display: flex;
    flex-direction: column;
    height: 100%;

    #img-container {
        height: 100%;

        img {
            width: 100%;
            min-height: 270px;
            max-height: 500px;
        }
    }
}
</style>