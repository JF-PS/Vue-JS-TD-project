<template>
    <div>
        <div>
        <h1>Movies managers: </h1><p>(Movies numbers: {{ nbMovie }})</p>
            <div>
                <input v-model="infoSort" placeholder="Choose movie" />
            </div>
            <ul>
                <li class="movie" v-for="(movie, i) in movies" v-bind:key="i" v-on:click="movieInfo(i)" v-bind:title="movie.title">
                    <movie_item v-bind:movie="movie"></movie_item><br>
                </li>
            </ul>
            <div>
                <button><router-link :to="{ name: 'AddMovie', params: { movie: movie }}">add Movie</router-link></button>
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
            myMovie: null,
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
            if(this.moviesSort.length <= 0){
                this.moviesSort = this.movies;
            }
            this.movies = [];
            for(var i= 0; i < this.moviesSort.length; i++)
            {
                var film = this.moviesSort[i];
                if(film.title.includes(this.infoSort) || film.date.includes(this.infoSort) || film.director.includes(this.infoSort) || film.synopsis.includes(this.infoSort)){
                    this.movies.push(film);
                }
            } 
            if(this.movies.length <= 0){
                this.movies = this.moviesSort;
            }
        }
    },
    computed: {
        nbMovie: function() {
            return this.movies.length;
        },
    }
};
</script>


