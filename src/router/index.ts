import { createRouter, createWebHistory } from 'vue-router'
import { homeRoute } from './routes/home'
import { loginRoute } from './routes/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, loginRoute],
})

export default router
