import Vue from 'vue'
import Router from 'vue-router'

// Containers
// const DefaultContainer = () => import('../src/containers/DefaultContainer')

// Views
const Index = () => import('../src/views/Index.vue')
const Movie = () => import('../src/views/movie.vue')
const Gsap = () => import('../src/views/gsap.vue')
const LoadPage = () => import('../src/views/LoadPage.vue')
const LoadPageOld = () => import('../src/views/LoadPageOld.vue')


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',    //'對應的路徑位置'
            name: 'Index',     //'組件呈現的名稱'
            component: Index  //放import的組件
        },
        {
            path: '/Movie',    
            name: '/Movie',  
            component: Movie
        },
        {
            path: '/Gsap',   
            name: '/Gsap',   
            component: Gsap 
        },
        {
            path: '/LoadPage',
            name: '/LoadPage',
            component: LoadPage
        },
        {
            path: '/LoadPageOld',
            name: '/LoadPageOld',
            component: LoadPageOld
        },
    ]
});


