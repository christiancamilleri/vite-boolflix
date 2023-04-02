<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
    props: {
        card: Object,
    },

    methods: {
        flagEmoji() {
            let language = this.card.original_language;

            if (language == "en") {

                language = "gb";
            }
            if (language == "zh") {

                language = "cn";
            }
            if (language == "ja") {

                language = "jp";
            }
            if (language == "ko") {

                language = "kr";
            }
            else if (language == "") {
                language = "sconosciuta"
            }

            return language
        },

        showStars() {
            let numInt = Math.ceil(this.card.vote_average / 2);

            let starsToColor = Array(numInt).fill(1);
            let starToEmpty = Array(this.store.stars - numInt).fill(0);

            return starsToColor.concat(starToEmpty)

        },
    }
}
</script>

<template>
    <div id="card">
        <div id="img-container" v-if="!card.poster_path == ``">
            <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" alt="">
        </div>
        <div v-else class="unknow"> <span>immagine non disponibile</span> </div>

        <div id="card-info">
            <div class="text">{{ card.title }} {{ card.name }}</div>
            <div class="text">{{ card.original_title }} {{ card.original_name }}</div>
            <div class="text">Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span> </div>
            <div class="text"> <i v-for="star in showStars()" class="fa-solid fa-star" :class="star ? `yellow` : ``"></i>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
#card {
    margin-bottom: 80px;

    width: calc(100% / 6 - 20px / 6 * 5);
    font-size: 0.7em;
    transition: all .2s ease-in-out;

    #img-container {
        width: 100%;

        img {
            width: 100%;
        }
    }

    #card-info {
        position: relative;
        padding: 10px 10px;
        width: 100%;
        min-height: 125px;
        border-radius: 0 0 20px 20px;
        background-color: #181818;

        .text {
            font-size: 1.2em;
        }
    }

    .unknow {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 300px
    }
}
</style>