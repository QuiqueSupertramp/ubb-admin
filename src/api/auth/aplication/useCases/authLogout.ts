import type { AuthRepository } from '../../domain/authRepository'

export const authLogout = async (repository: AuthRepository) => {
  return await repository.logout()
}
