import { createRouter, createWebHistory } from 'vue-router'
import { homeRoute } from './routes/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute],
})

export default router
