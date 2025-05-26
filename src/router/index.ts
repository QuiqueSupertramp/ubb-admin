import { createRouter, createWebHistory } from 'vue-router'
import { homeRoute } from './routes/home'
import { loginRoute } from './routes/login'
import { notFoundRoute } from './routes/notFount'
import { beforeEachGuard } from './guards/beforeEach'
import { teamsRoute } from './routes/teams'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, loginRoute, teamsRoute, notFoundRoute],
})

router.beforeEach(beforeEachGuard)

export default router
