import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import('../assets/css/projects.css');
import('../assets/css/about.css')


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code splitting
    // this generates a seperate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: () => {
      window.location.replace('/')
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes
})

export default router