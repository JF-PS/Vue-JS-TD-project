<template>
    <div>
        <div class="movie-container movies-content movies-padding marg-max-movies">
            <div>
                <h1>Movies managers: </h1><p>({{ nbMovie }} movies)</p>
            </div>
            <div>
                <input v-model="infoSort" placeholder="Choose movie" /><button><router-link :to="{ name: 'AddMovie'}">add Movie</router-link></button>
            </div> 
            <div class="row-padding padding-16 positioning-center">
                <div class="movie-info" v-for="(movie, i) in movies" v-bind:key="i" v-on:click="movieInfo(i)" v-bind:title="movie.title">
                    <movie_item v-bind:movie="movie"></movie_item><br>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import movie_item from "./Movie.vue";

export default {
    name: "Management",
    components: {
        movie_item,
    },
    data: function() {
        return {
            infoSort : "",
            moviesSort:[],
            movies: window.shared_data.movies
        };
    },
    methods: {
        movieInfo: function(id) {
            this.$router.push({ name: 'ReadMovie', params: { idMovie: id } });
        }
    },
    watch: {
        infoSort: function(){
            this.movies = window.shared_data.movies.filter(film => film.title.includes(this.infoSort) || film.date.includes(this.infoSort) || film.director[0].lastname.includes(this.infoSort) || film.director[0].firstname.includes(this.infoSort));
        }
    },
    computed: {
        nbMovie: function() {
            return this.movies.length;
        },
    },
    mounted: function() {
        console.log(this.movies);
    }
};
</script>


