import type { AuthLogin } from '../authLogin'
import { getEmailErrors } from './email'
import { getPasswordErrors } from './password'

export const getLoginErrors = (login: AuthLogin) => {
  const errors = {
    email: getEmailErrors(login.email),
    password: getPasswordErrors(login.password),
  }

  const hasErrors = Object.values(errors).some((e) => e !== undefined)

  return !hasErrors ? null : errors
}
