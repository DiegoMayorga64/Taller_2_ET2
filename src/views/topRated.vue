<template lang="">
    <div class="toprated row row-cols-1 row-cols-lg-4 g-3 ">
        <div v-for="(movie,id) in movies" :key="id">
            <movie-card :movie="movie"/>
        </div>
       <div class="row">
            <button type="button" class="btn btn-success mb-4 " @click="getNextPage()">Ver mas</button>
        </div>
    </div>
</template>
<script>
import apiService from '../services/api.service.js';
import MovieCard from '../components/MovieCard.vue';
export default {
    name: 'TopRated',
    components: {
        MovieCard
    },
    data() {
        return {
            movies: [],
            currPage: 1,
        }
    },
    methods: {
        getTopRatedMovies() {
            apiService.getTopRated(this.currPage)
                .then(response => {
                    this.movies = response.data.results;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getNextPage() {
            this.currPage++;
            apiService.getTopRated(this.currPage)
                .then(response => {
                    this.movies = this.movies.concat(response.data.results);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        
    },
    mounted() {
        this.getTopRatedMovies();
    }
    
}
</script>