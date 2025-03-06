import type { CustomError } from '../errors'

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

export type Response<T> = SuccessResponse<T> | ErrorResponse
