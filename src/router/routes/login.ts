import { LAYOUTS } from '@/lib/layouts'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/login/LoginView.vue'

export const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: LoginView,
  meta: {
    layout: LAYOUTS.EMPTY,
  },
}
