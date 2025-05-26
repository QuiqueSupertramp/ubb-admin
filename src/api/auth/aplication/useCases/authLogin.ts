import { Response } from '@/config/response'
import type { AuthRepository } from '../../domain/authRepository'
import { AuthErrors } from '../../domain/errors/authErrors'
import type { AuthLogin } from '../../domain/authLogin'
import { getLoginErrors } from '../../domain/validations/login'

export const authLogin = async (repository: AuthRepository, params: AuthLogin) => {
  const errors = getLoginErrors(params)
  if (errors) return Response.error(AuthErrors.invalidLoginParams(errors))

  return await repository.login(params)
}
