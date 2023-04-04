import { reactive } from "vue";

export const store = reactive({
    APIstandard: "https://api.themoviedb.org/3",

    APIkey: "?api_key=dca477681a1e08199e8717b68c86d599",


    path: "",

    APImoviesPages: "",
    actualMoviesPage: "",
    pagePath: "&page=",

    APIseriesPages: "",
    actualSeriesPage: "",

    queryParameters: "",

    movies: [],
    series: [],

    moviesList: [],

    seriesTvList: [],

    searchByText: "",

    stars: 5,

    index: 0,


});