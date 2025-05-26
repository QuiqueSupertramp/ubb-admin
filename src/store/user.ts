import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserFromSessionStorage, setUserFromSessionStorage } from '@/lib/sessionStorage/user'
import type { Auth } from '@/api/auth/domain/auth'

export const useUserStore = defineStore('user', () => {
  const user = ref<Auth | null>(getUserFromSessionStorage())

  const setUser = (userInfo: Auth | null) => {
    setUserFromSessionStorage(userInfo)
    user.value = userInfo
  }

  const isAuthenticated = () => !!user.value

  return { user, setUser, isAuthenticated }
})
