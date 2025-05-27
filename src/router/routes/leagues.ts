import LeaguesView from '@/views/leagues/LeaguesView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const leaguesRoute: RouteRecordRaw = {
  path: '/leagues',
  name: 'leagues',
  component: LeaguesView,
}
