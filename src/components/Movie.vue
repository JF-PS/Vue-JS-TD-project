<template>
    <div>
        <div v-on:click="movieInfo(movie)" >
            <span>{{ movie.title.toUpperCase() }} ({{ movie.date.toUpperCase() }})</span>
            <span v-if="movie.info">
                Director : {{ movie.director.toUpperCase() }} <br>
                Synopsis : {{ movie.synopsis.toUpperCase() }}
            </span>
        </div>
        <div>
            <button><router-link :to="{ name: 'MovieEdition', params: { movie: movie }}">Edition</router-link></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "movie_item",
    props: ["movie"],
    methods: {
        movieInfo: function(infoMovie) {
            this.$emit("viewInfo", infoMovie);
        }
    }
};
</script>


