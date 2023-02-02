import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/EthanPortfolio/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EthanPortfolio/about',
    name: 'About',
    // route level code splitting
    // this generates a seperate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/EthanPortfolio/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router