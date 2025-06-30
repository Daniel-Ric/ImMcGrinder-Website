// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/',           name: 'home',       component: HomeView },
  { path: '/home',       redirect: { name: 'home' } },
  { path: '/who-we-are', name: 'who-we-are', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.name === 'who-we-are') {
      return { el: '#who-we-are', behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
