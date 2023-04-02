<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
            links: [
                "Home",
                "Serie TV",
                "Film",
                "Nuovi e Popolari",
                "Sfoglia per lingua"
            ],

        }
    },
    methods: {
        changeIndex(indice) {
            this.store.index = indice
        }
    }

}

</script>

<template>
    <header>
        <div id="nav-left">
            <img src="/img/logo.png" alt="">
        </div>
        <div id="nav-center">
            <ul>
                <li @click="changeIndex(index)" v-for="(link, index) in links"
                    :class="this.store.index == index ? `active` : ``">
                    {{ link }} </li>
            </ul>
        </div>
        <div id="nav-right">
            <input v-model="store.searchByText" type="text" placeholder="Che cosa stai cercando?"
                @keyup.enter="$emit('searchMovie', 'searchSerie')">
            <button @click="$emit('searchMovie', 'searchSerie')">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10vh;

    background-color: black;

    #nav-left {
        width: 20%;


        img {
            width: 100%;
            height: 15vh;

        }
    }

    #nav-center {

        ul {
            display: flex;
            gap: 20px;

            li {
                cursor: pointer;
            }

        }
    }

    #nav-right {
        display: flex;
        gap: 10px;

        margin-right: 20px;

        input {
            background-color: #f48f8f68;

            border: none;

            padding: 10px;
        }

        button {
            padding: 10px;

            border: none;

            background-color: rgba(255, 0, 0, 0.368);
        }


    }

    .active {
        border-bottom: 2px solid red;
    }
}
</style>