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
        }
    }

}
</script>

<template>
    <div>

        <h2>{{ movie.title }}</h2>
        <small>{{ movie.original_title }}</small>
        <small>Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span>
        </small>
        <small>Voto: {{ movie.vote_average }}</small>
    </div>
</template>

<style lang="scss" scoped>
div {

    display: flex;
    flex-direction: column;

    height: 100%;
}
</style>