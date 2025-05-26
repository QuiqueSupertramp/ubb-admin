import { InvalidParamsError, ValidationError, type ValidationErrorParams } from './validationErrors'

export class ValidationErrorFactory {
  static custom<T>({ errors, message, name }: ValidationErrorParams<T>) {
    return new ValidationError({ errors, message, name })
  }

  static invalidParams<T>({ errors, message, name }: ValidationErrorParams<T>) {
    return new InvalidParamsError({ errors, message, name })
  }
}
