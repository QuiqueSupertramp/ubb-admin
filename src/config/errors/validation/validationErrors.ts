import { CustomError, type CustomErrorParams } from '../customError'
import type { ListOfValidationErrors } from './types'

export type ValidationErrorParams<T> = Omit<CustomErrorParams, 'code'> & {
  errors: ListOfValidationErrors<T>
}

export class ValidationError<T> extends CustomError {
  errors?: ListOfValidationErrors<T>

  constructor({
    message = 'There has been a Validation Error',
    name = 'Validation Error',
    errors,
  }: ValidationErrorParams<T>) {
    super({ message, code: 'VALIDATION_ERROR', name })
    this.errors = errors
  }
}

export class InvalidParamsError<T> extends ValidationError<T> {
  constructor({
    message = 'There has been an Invalid Params Error',
    name = 'Invalid Params Error',
    errors,
  }: ValidationErrorParams<T>) {
    super({ message, name, errors })
  }
}
