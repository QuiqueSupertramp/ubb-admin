import type { Auth } from '@/api/auth/domain/auth'
import { getFromSessionStorage, setFromSessionStorage } from '.'

export const getUserFromSessionStorage = () => getFromSessionStorage<Auth>('user')
export const setUserFromSessionStorage = (userInfo: Auth | null) =>
  setFromSessionStorage('user', userInfo)
