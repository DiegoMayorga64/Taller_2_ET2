<template lang="">
    <div class="col">
               <div class="card bg-dark text-white my-3 " style="height: auto; width: 100%">
                   <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img img-fluid" style="width: 100%; height: 15vw; object-fit: cover;" >
                   <i class="bi bi-star-fill" font color="red" style=" color: yellow; position:absolute;  top: 200px;left: 260px;"></i><p class="card-text" style="position:absolute;  top: 200px;left: 280px;">{{movie.vote_average}}</p>
                   <div class="card-img-overlay" style="background-color: darkgrey; filter: opacity(0.25);">
                   </div>
                   <h5 class="card-title" style="position:absolute;color:white;stroke: #000; stroke-width: 3px;">{{movie.title}}</h5>
                    <router-link v-bind:to="'/movie/'+ movie.id" class="stretched-link"/>
               </div>
            </div>
</template>
<script>
export default {
    name: 'movie-card',
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    
}
</script>
<style>
    h5{
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
    p{
       text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
</style>