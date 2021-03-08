<template>
    <div>
    <h1 v-if="movie">{{movie.title}} ({{movie.date}})</h1>
    <h1 v-else>Add new movie :</h1>
        <button v-if="movie" v-on:click="update(movie)">Update</button>
        <button v-if="movie" v-on:click="remove()">Delete</button>
        <div v-if="change == true || !movie">
            <h3 v-if="change">Update {{ myMovie.title }}.</h3>
            <input placeholder="title"    v-model="myMovie.title" />
            <input placeholder="date"     v-model="myMovie.date" />
            <input placeholder="synopsis" v-model="myMovie.synopsis" />
            <input placeholder="director firstname" v-model="myMovie.director[0].firstname" />
            <input placeholder="director firstname" v-model="myMovie.director[0].lastname" />
            <input placeholder="director firstname" v-model="myMovie.director[0].nationality" />
            <input placeholder="director firstname" v-model="myMovie.director[0].birthday" />
            <button v-if="movie" v-on:click="valid">Update</button>
            <button v-else       v-on:click="add(myMovie)">Add</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "movie_edition_item",
     data: function() {
        return {
            change: false,
            myMovie: 
            {
                title: "",       
                date: "", 
                director: [{
                    firstname: "",
                    lastname: "",
                    nationality: "",
                    birthday: ""
                }],  
                synopsis: ""
            },
            movies: window.shared_data.movies,
            movie: window.shared_data.movies[parseInt(this.$route.params.idMovie)]
        };
    },
    methods: {
        update: function(movieToUpdate) {
            this.change = true;
            this.myMovie = movieToUpdate;
        },
        add: function(newMovie){
            this.movies.push(newMovie);
            this.valid();
        },
        remove: function() {
            this.movies.splice(parseInt(this.$route.params.idMovie), 1);
            this.valid();
        },
        valid: function() {
            this.$router.push({ name: 'MovieManagement' });
        },
    }
};
</script>