import HomeView from '@/views/home/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: HomeView,
}
