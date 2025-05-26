import { CustomError, type CustomErrorParams } from './customError'
import { HTTPErrorFactory } from './http/httpErrorFactory'
import { ValidationErrorFactory } from './validation/validationErrorFactory'

export class ErrorFactory {
  static validations = ValidationErrorFactory
  static http = HTTPErrorFactory

  static custom({ code, message, name }: CustomErrorParams) {
    return new CustomError({ code, message, name })
  }

  static unknown({ message, name }: Omit<CustomErrorParams, 'code'>) {
    return ErrorFactory.custom({ message, name, code: 'UNKNOWN_ERROR' })
  }
}
