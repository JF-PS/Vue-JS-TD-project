<template>
    <div>
    <h1 v-if="movie">{{movie.title}} ({{movie.date}})</h1>
    <h1 v-else>Add new movie :</h1>
        <button v-if="movie" v-on:click="update(movie)">Update</button>
        <button v-if="movie" v-on:click="remove(movie)">Delete</button>
        <div v-if="change == true || !movie">
            <h3 v-if="change">Update {{ myMovie.title }}.</h3>
            <input placeholder="title"    v-model="myMovie.title" />
            <input placeholder="date"     v-model="myMovie.date" />
            <input placeholder="synopsis" v-model="myMovie.synopsis" />
            <input placeholder="director" v-model="myMovie.director" />
            <button v-if="movie" v-on:click="valid">Update</button>
            <button v-else       v-on:click="add(myMovie)">Add</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "movie_edition_item",
    props: ["movie"],
     data: function() {
        return {
            change: false,
            myMovie: 
            {
                title: "",       
                date: "", 
                director: "",  
                synopsis: "", 
                info: false
            },
            movies: window.shared_data.movies
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
        remove: function(movieToDelete) {
            for(var i= 0; i < this.movies.length; i++)
            {
                if(this.movies[i].title == movieToDelete.title){
                    this.movies.splice(i, 1);
                }
            } 
            this.valid();
        },
        valid: function() {
            this.$router.push({ name: 'MovieManagement' });
        },
    }
};
</script>