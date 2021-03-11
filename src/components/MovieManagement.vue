<template>
    <div>
        <div class="movie-container movies-content movies-padding marg-max-movies">
            <div>
                <h1>Movies managers: </h1><p>({{ nbMovie }} movies)</p>
            </div>
            <div class="container-aligne">
                <button class="buttonValide" v-on:click="goToAddMovie()">&#128250; Add Movie </button>
                <input v-model="infoSort" placeholder="Choose movie" />
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
        },
        goToAddMovie: function(){
            this.$router.push({ name: 'AddMovie'});
        }
    },
    watch: {
        infoSort: function(){
            this.movies = window.shared_data.movies.filter(film => 
                film.title.toLowerCase().includes(this.infoSort.toLowerCase()) 
                || film.date.includes(this.infoSort) 
                || film.director[0].lastname.toLowerCase().includes(this.infoSort.toLowerCase()) 
                || film.director[0].firstname.toLowerCase().includes(this.infoSort.toLowerCase())
            );
        }
    },
    computed: {
        nbMovie: function() {
            return this.movies.length;
        },
    }
};
</script>



