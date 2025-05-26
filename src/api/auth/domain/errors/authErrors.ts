import { ErrorFactory } from '@/config/errors'
import type { ListOfValidationErrors } from '@/config/errors/validation/types'
import type { AuthLogin } from '../authLogin'

export class AuthErrors {
  static invalidCredentials() {
    return ErrorFactory.http.notFound({
      name: 'Invalid Credentials Error',
      message: 'El mail o la contraseña son incorrectos',
    })
  }

  static invalidLoginParams(errors: ListOfValidationErrors<AuthLogin>) {
    return ErrorFactory.validations.invalidParams({
      name: 'Invalid Login Params Error',
      message: 'El mail o la contraseña no cumple con las reglas de validación',
      errors,
    })
  }

  static loginUnknownError() {
    return ErrorFactory.http.unknown({
      message: 'No se ha podido completar el login',
      name: 'Login Unknown Error',
    })
  }

  static logoutUnknownError() {
    return ErrorFactory.http.unknown({
      message: 'No se ha podido cerrar sesión',
      name: 'Logout Unknown Error',
    })
  }
}
