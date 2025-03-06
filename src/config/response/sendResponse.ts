import { CustomError } from '../errors'
import type { Response } from './types'

export const sendResponse = <T>({
  response,
  count,
}: {
  response: CustomError | T
  count?: number
}): Response<T> => {
  if (response instanceof CustomError) {
    return {
      count: null,
      data: null,
      error: response,
    }
  }

  return {
    count: count ?? null,
    data: response,
    error: null,
  }
}
