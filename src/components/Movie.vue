<template>
    <div>
        <img v-bind:src="movie.poster"  :alt="movie.title" class="movie-poster">
        <h3>{{ movie.title.toUpperCase() }} ({{ movie.date.toUpperCase() }})</h3>
        <p>
            <span class="movie" v-for="(v1, i) in movie.note" v-bind:key="i" v-bind:title="movie.title">&#11088;</span>
        </p>   
    </div>
</template>

<script>
export default {
    name: "movie_item",
    props: ["movie"]
};

</script>


