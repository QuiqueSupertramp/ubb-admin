import type { CustomError } from '../errors/customError'

export interface SuccessResponse<T> {
  count: number | null
  data: T
  error: null
}

export interface ErrorResponse {
  count: null
  data: null
  error: CustomError
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
