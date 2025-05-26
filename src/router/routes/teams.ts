import TeamView from '@/views/teams/TeamsView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const teamsRoute: RouteRecordRaw = {
  path: '/teams',
  name: 'teams',
  component: TeamView,
}
