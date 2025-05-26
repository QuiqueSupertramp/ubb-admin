import type { CustomErrorParams } from '../customError'

export enum HTTP_STATUS_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  UNKNOWN = 500,
}

export type HttpErrorParams = Omit<CustomErrorParams, 'code'> & { endpoint?: string }
export type CustomHttpErrorParams = HttpErrorParams & { statusCode?: HTTP_STATUS_CODE }
