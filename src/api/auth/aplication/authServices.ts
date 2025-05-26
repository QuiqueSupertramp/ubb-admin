import type { AuthRepository } from '../domain/authRepository'
import { authLogout } from './useCases/authLogout'
import { authLogin } from './useCases/authLogin'
import type { AuthLogin } from '../domain/authLogin'

export const createAuthService = (repository: AuthRepository) => ({
  login: async (params: AuthLogin) => await authLogin(repository, params),
  logout: async () => await authLogout(repository),
})
