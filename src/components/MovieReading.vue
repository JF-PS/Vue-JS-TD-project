<template>
    <div>
        <h1 >{{movie.title}} ({{movie.date}})</h1>
        <span>
            Director : {{ movie.director[0].firstname.toUpperCase() }}  {{ movie.director[0].lastname.toUpperCase() }}
                       {{ movie.director[0].nationality.toUpperCase() }} {{ movie.director[0].birthday.toUpperCase() }}<br/><br/>
            Synopsis : {{ movie.synopsis }}
        </span>
        <div>
            <button><router-link :to="{ name: 'MovieEdition', params: { movie: this.$route.params.idMovie }}">Edition</router-link></button>
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
    }
};
</script>