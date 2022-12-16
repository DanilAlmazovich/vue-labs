import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../views/Show.vue')
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../views/People.vue')
    },
    {
      path: '/people/:id',
      name: 'person',
      component: () => import('../views/Person.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    }
  ]
})

export default router
