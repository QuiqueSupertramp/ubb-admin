import { createRouter, createWebHistory } from 'vue-router'
import { homeRoute } from './routes/home'
import { loginRoute } from './routes/login'
import { notFoundRoute } from './routes/notFount'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, loginRoute, notFoundRoute],
})

export default router
