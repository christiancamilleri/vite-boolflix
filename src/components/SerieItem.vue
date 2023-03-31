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
        }
    }

}
</script>

<template>
    <div id="series-list">

        <h2>{{ serie.name }}</h2>
        <small>{{ serie.original_name }}</small>
        <small>Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span>
        </small>
        <small>Voto: {{ serie.vote_average }}</small>

    </div>
</template>

<style lang="scss" scoped>
#series-list {


    display: flex;
    flex-direction: column;
}
</style>