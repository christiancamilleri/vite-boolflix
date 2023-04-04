<script>
import { store } from "../store.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import axios from 'axios';

export default {
    data() {
        return {
            store,
            viewDetails: false,
            showDetails: false,
            actorsArray: [],


        }
    },
    props: {
        card: Object,
        id: Number,
        type: String,

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

        showDetailsOn() {
            this.showDetails = true;

            let actors = `https://api.themoviedb.org/3/${this.type}/${this.id}/credits${this.store.APIkey}`

            axios.get(actors).then((res) => {

                this.actorsArray = res.data.cast.slice(0, 5)

            })

        },

    }
}
</script>

<template>
    <div id="card" @mouseover="viewDetails = true" @mouseleave="viewDetails = false" @click="showDetailsOn()">
        <div id="img-container" v-if="!card.poster_path == ``">
            <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" alt="">
        </div>
        <div v-else class="unknow"> <span>immagine non disponibile</span> </div>

        <div id="card-info" v-show="viewDetails">
            <div class="text">
                <h2>{{ card.title }} {{ card.name }}</h2>
            </div>
            <div class="text">( {{ card.original_title }} {{ card.original_name }} )</div>
            <div class="text">Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span> </div>
            <div class="text"> <i v-for="star in showStars()" class="fa-solid fa-star" :class="star ? `yellow` : ``"></i>
            </div>
            <div class="description">
                <span v-if="!card.overview == ''"><strong>Descrizione:</strong> {{ card.overview }} </span>
                <span v-else><strong>Descrizione:</strong> Non disponibile</span>
            </div>

        </div>

    </div>
    <div id="details" v-show="showDetails" @click="showDetails = false">
        <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" alt="">
        <div id="card-info-details">
            <div>
                <h2>{{ card.title }} {{ card.name }}</h2>
            </div>
            <div>
                ( {{ card.original_title }} {{ card.original_name }} )
            </div>
            <div>
                Lingua: <span :class="`fi fi-${flagEmoji()} fis`"></span>
            </div>
            <div>
                Voto: <i v-for="star in showStars()" class="fa-solid fa-star" :class="star ? `yellow` : ``"></i>
            </div>
            <div>
                <span v-if="!card.overview == ''"><strong>Descrizione:</strong> {{ card.overview }} </span>
                <span v-else><strong>Descrizione:</strong> Non disponibile</span>
            </div>
            <div>
                cast: <span v-for="actor in actorsArray"> {{ actor.name }}, </span>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
#card {

    position: relative;
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    width: calc(20% - 30px);
    height: auto;
    cursor: pointer;
    background-color: rgba(56, 56, 56, 0.151);
    overflow: hidden;



    .unknow {
        text-align: center;
        margin-top: 5em;
    }

    #card:hover .unknown {
        opacity: 0;
        transition: 1s linear all;
    }

    #img-container:hover {

        position: relative;
        z-index: 2;
        transition: 1s linear all;
        transform: scale(1.2);


    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #card-info {
        display: none;
        overflow-x: scroll;



        :hover & {
            display: flex;
            flex-flow: column;
            gap: 20px;

            height: 100%;



            padding: 20px;
            color: white;

            margin-bottom: 1em;
        }
    }


    &:hover {

        border: 2px solid #181818;
        border-radius: 20px;
        box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.6);



    }

    &:hover #card-info {
        position: absolute;
        bottom: -20px;


    }

    &:hover img {
        opacity: .2;
        transform: scale(1);
        // overflow: hidden;
    }



}

#details {
    display: flex;
    border: 2px solid red;

    img {
        width: 200px;
        height: 300px;
    }

    #card-info-details {
        display: flex;
        flex-flow: column;
        gap: 20px;

        height: 100%;



        padding: 20px;
        color: white;

        margin-bottom: 1em;
    }

}
</style>