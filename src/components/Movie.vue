<template>
    <div>
        <div>
            <img v-bind:src="movie.poster"  :alt="movie.title">
            <span>{{ movie.title.toUpperCase() }} ({{ movie.date.toUpperCase() }})</span>   
            <ul>
                <li class="movie" v-for="(v1, i) in movie.note" v-bind:key="i" v-bind:title="movie.title">
                    &#11088;<br>
                </li>
            </ul>       
        </div>
    </div>
</template>

<script>
export default {
    name: "movie_item",
    props: ["movie"]
};
</script>


