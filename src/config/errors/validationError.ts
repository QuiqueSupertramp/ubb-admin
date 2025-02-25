import { CustomError } from './customError'

export type ValidationErrors<T extends object> = {
  [k in keyof T]?: string[]
}

export class ValidationError<T extends object> extends CustomError {
  errors?: ValidationErrors<T>

  constructor({ message, errors }: { message?: string; errors?: ValidationErrors<T> }) {
    super(message ?? 'Validation Error')
    this.name = 'ValidationError'
    this.errors = errors
  }
}
