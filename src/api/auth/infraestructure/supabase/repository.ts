import type { AuthRepository } from '@/api/auth/domain/authRepository'
import { login } from './login'
import { logout } from './logout'

export const authSupabaseRepository: AuthRepository = {
  login,
  logout,
}
