<template>
    <div class="movie-container movies-content movies-padding marg-max-movies">
    <h1 v-if="movie">{{movie.title}} ({{movie.date}})</h1>
    <h1 v-else>Add new movie :</h1>
        <button class="buttonValide" v-if="movie && !change" v-on:click="update(movie)">Update</button>
        <button class="buttonRemove" v-if="movie" v-on:click="remove()">Delete</button>
        <div v-if="change || !movie">
            <h3 v-if="change">Update {{ myMovie.title }}.</h3>

        <div class="container">
            <form action="/action_page.php">
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Movie Title</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.title" placeholder="Movie Title..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Publication Date</label>
                    </div>
                    <div class="col-75">
                        <input type="date"  v-model="myMovie.date" class="input-larg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Language</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.langue" placeholder="Language..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Genre</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.genre" placeholder="Genre..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Note</label>
                    </div>
                    <div class="col-75">
                        <input type="number" min="0" max="5" v-model="myMovie.note" placeholder="Note.." class="input-larg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="subject">Synopsis</label>
                    </div>
                    <div class="col-75">
                        <textarea name="subject" v-model="myMovie.synopsis" placeholder="Synopsis.." style="height:200px"></textarea>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-25">
                        <label for="subject">Poster Url</label><br>
                        <img width="120" height="180" v-bind:src="myMovie.poster" alt="">
                    </div>
                    <div class="col-75">
                        <input type="url" v-model="myMovie.poster" placeholder="poster url" class="input-larg" />
                    </div>
                </div>
            </form>
        </div>

         <div class="container">
            <form action="/action_page.php">
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Director First Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.director[0].firstname" placeholder="Director First Name..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Director Last Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.director[0].lastname" placeholder="Director Last Name..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Director Nationality</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="myMovie.director[0].nationality" placeholder="Director Nationality..">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Director birthday</label>
                    </div>
                    <div class="col-75">
                        <input type="date"  v-model="myMovie.director[0].birthday" class="input-larg">
                    </div>
                </div>
                <br>
                <div class="row">
                    <button class="buttonValide" v-if="movie" v-on:click="valid">Valide Changes</button>
                    <button class="buttonValide" v-else       v-on:click="add(myMovie)">Add</button>
                </div>
            </form>
        </div>
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
                synopsis: "",
                langue: "",
                note: 0,
                poster:"",
                genre: ""
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
            if(newMovie.title == "" || newMovie.date == "" || newMovie.title == "" || newMovie.synopsis == "" || newMovie.langue == "" || newMovie.poster == "" || newMovie.genre == "" || newMovie.director.firstname == "" || newMovie.director.lastname == "" || newMovie.director.nationality == "" || newMovie.director.birthday == ""){
                alert(" Vous devez remplir tous les champs avant de validé !");
            }
            else{
                this.movies.push(newMovie);
                this.valid();
            }
        },
        remove: function() {
            this.movies.splice(parseInt(this.$route.params.idMovie), 1);
            this.valid();
        },
        valid: function() {
            this.myMovie.note = parseInt(this.myMovie.note);
            this.$router.push({ name: 'MovieManagement' });
        }
    }
};
</script>
