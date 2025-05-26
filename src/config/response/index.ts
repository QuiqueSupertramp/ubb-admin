import type { CustomError } from '../errors/customError'
import type { ErrorResponse, SuccessResponse } from './types'

export class Response {
  static success<T>(data: T, count?: number): SuccessResponse<T> {
    return {
      count: count ?? null,
      data,
      error: null,
    }
  }

  static error(error: CustomError): ErrorResponse {
    return {
      count: null,
      data: null,
      error,
    }
  }
}
