<script>
import { store } from '../store.js';

import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    data() {
        return {
            stars: 5,
            store,
        }
    },
    props: {
        movie: Object,

    },

    methods: {
        flagEmoji() {
            let language = this.movie.original_language;


            if (language == "en") {
                language = "gb"
            } else if (language == "") {
                language = "sconosciuta"
            } else if (language == "ja") {
                language = "jp"
            }

            return language
        },
        showStars() {
            let numInt = Math.ceil(this.movie.vote_average / 2);

            let starsToColor = Array(numInt).fill(1);
            let starToEmpty = Array(this.stars - numInt).fill(0);

            return starsToColor.concat(starToEmpty)

        },

    }

}
</script>

<template>
    <div>
        <div id="img-container" v-if="!movie.poster_path == ``">

            <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">

        </div>
        <div v-else class="unknow"> <span>immagine non disponibile</span> </div>

        <h2>{{ movie.title }}</h2>
        <small>{{ movie.original_title }}</small>
        <small>Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span>
        </small>
        <small> <i v-for="star in showStars()" class="fa-solid fa-star" :class="star ? `yellow` : ``"></i>
        </small>

    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;



    #img-container {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }
}

.unknow {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 300px
}

.yellow {
    color: yellow;
}
</style>