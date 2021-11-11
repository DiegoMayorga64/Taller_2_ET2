import {createRouter, createWebHistory} from 'vue-router'

const routes=[
{
    path:'/',
    name:'Home',
    component:()=>import('../views/Popular.vue')
},
{
    path:'/topRated',
    name:'top rated',
    component:()=>import('../views/topRated.vue')
},
{
    path:'/movie/:id',
    name :'movie',
    component:()=> import('../views/movie.vue')
}
]
   const router = createRouter({
       history:createWebHistory(process.env.BASE_URL),
       routes
   })

   export default router