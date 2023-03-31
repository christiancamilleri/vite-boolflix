<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },

}

</script>

<template>
    <div id="search">
        <input v-model="store.searchByText" type="text" placeholder="inserisci il nome di un film"
            @keyup.enter="$emit('searchMovie', 'searchSerie')">
        <button @click="$emit('searchMovie', 'searchSerie')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
#search {
    display: flex;
    gap: 10px;
}
</style>