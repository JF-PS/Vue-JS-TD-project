import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Testroute from '../components/Testroute'
import MovieManagement from '../components/MovieManagement'
import MovieEdition from '../components/MovieEdition'
import MovieReading from '../components/MovieReading'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'MovieManagement',
    component: MovieManagement
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Testroute',
    component: Testroute
  },
  {
    path: '/movie/:idMovie/edition',
    name: 'MovieEdition',
    component: MovieEdition
  },
  {
    path: '/add',
    props: true,
    name: 'AddMovie',
    component: MovieEdition
  },
  {
    path: '/movie/:idMovie',
    name: 'ReadMovie',
    component: MovieReading
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
