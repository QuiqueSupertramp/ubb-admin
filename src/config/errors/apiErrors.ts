import { CustomError } from './customError'

export class NotFoundError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Not Found Error')
    this.name = 'NotFoundError'
  }
}

export class NetworkError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Network Error')
    this.name = 'NetworkError'
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Unauthorized Error')
    this.name = 'UnauthorizedError'
  }
}

export class UnknownError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Unknown Error')
    this.name = 'UnknownError'
  }
}
