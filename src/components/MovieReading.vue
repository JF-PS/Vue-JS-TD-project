<template>
    <div class="movie-container movies-content  movies-padding-32 positioning-center marg-max-movies">  
        <div class="container-aligne-center">
            <h1>{{movie.title}} ({{movie.date}})</h1>
            <span id="edition" title="Editer le film" v-on:click="goToMovieEdition()">  &#9997; </span>
        </div>
        
        <h3 >Genre : {{movie.genre}} </h3>
        <h3 >VO : {{movie.langue}}</h3>
        <br>
        <img v-bind:src="movie.poster"  :alt="movie.title" class="poster image-presentation" width="200" height="50">
        <div class="movies-padding-32">
        <p>
            <span class="movie" v-for="(v1, i) in movie.note" v-bind:key="i" v-bind:title="movie.title">&#11088;</span>
        </p>   
            <h4><b>{{ movie.director[0].firstname.toUpperCase() }}  {{ movie.director[0].lastname.toUpperCase() }}</b></h4>
            <h6><i>{{ movie.director[0].nationality.toUpperCase() }} {{ movie.director[0].birthday.toUpperCase() }}</i></h6>
            <p>{{ movie.synopsis }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "movie_edition_item",
     data: function() {
        return {
            movie: window.shared_data.movies[parseInt(this.$route.params.idMovie)]
        };
    },
    methods: {
        goToMovieEdition: function() {
            this.$router.push({ name: 'MovieEdition', params: { movie: this.$route.params.idMovie } });
        },
    },
};
</script>