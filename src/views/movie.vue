<template lang="">
    <div class="vh-100">
        <div class="row pt-3">
            <div class="col-4">
                <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="img-fluid " style="width: 100%; object-fit: cover;" >
            </div>
            <div class="col">
                <ul class="list-group list-group-flush pt-5">
                    <table width="800" cellspacing="1" cellpadding="3" border="0" bgcolor="#1E679A">
                        <tr>
                            <td><font color="#FFFFFF" face="arial, verdana, helvetica">
                            <b>{{movie.title}}</b>
                            </font></td>
                            </tr>
                            <tr>
                            <td bgcolor="#ffffcc">
                        <font face="arial, verdana, helvetica">
                            <div>
                                <h4>Summary</h4>
                                <li class="list-group-item">{{movie.overview}}</li>
                            </div>
                            <div>
                                <h4>Premiere</h4>
                                <li class="list-group-item">{{movie.release_date}}</li>
                            </div>
                            <div>
                                <h4>Genre</h4>
                                <h6 v-for="{name} in movie.genres" :key="name" class="list-group-item" style=" display: inline;">{{name}}</h6>
                            </div>
                        </font>
                        </td>
                        </tr>
                        </table>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
import apiService from '../services/api.service.js';
export default {
    name: 'Movie',

    data() {
        return {
            movie: {},
            id: this.$route.params.id
        }
    },
    mounted() {
        this.getMovie(this.id);
    },
    methods: {
        getMovie(id) {
            apiService.getMovie(id)
                .then(response => {
                    this.movie = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },
}

</script>
<style lang="">
    
</style>