import { LAYOUTS } from '@/lib/layouts'
import type { RouteRecordRaw } from 'vue-router'

export const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/LoginView.vue'),
  meta: {
    layout: LAYOUTS.EMPTY,
  },
}
