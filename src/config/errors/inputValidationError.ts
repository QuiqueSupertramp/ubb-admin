import { CustomError } from './customError'

type InputErrors = string[] | null

interface InputValidationErrorParams {
  id: string
  errors?: InputErrors
  name?: string
  message?: string
}

export class InputValidationError extends CustomError {
  id: string
  errors: InputErrors

  constructor({ id, errors, name, message }: InputValidationErrorParams) {
    super(message ?? 'Validation Error')
    this.id = id
    this.name = name ?? `${this.id} Validation Error`
    this.errors = errors ?? null
  }
}
