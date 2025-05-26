import { useUserStore } from '@/store/user'
import type { NavigationGuard } from 'vue-router'

export const beforeEachGuard: NavigationGuard = async (to) => {
  const isAuth = useUserStore().isAuthenticated()
  const isLoginRoute = to.name === 'login'
  const routeRequiresAuth = to.meta.requiresAuth !== false

  if (routeRequiresAuth && !isAuth) {
    return {
      name: 'login',
      query: { next: to.fullPath },
    }
  }

  if (isLoginRoute && isAuth) {
    return { name: 'home' }
  }
}
