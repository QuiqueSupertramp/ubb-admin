import { CustomError } from '../customError'
import { HTTP_STATUS_CODE } from './types'
import type { CustomHttpErrorParams, HttpErrorParams } from './types'

export class CustomHttpError extends CustomError {
  statusCode: HTTP_STATUS_CODE
  endpoint?: string

  constructor({
    name = 'HTTP Error',
    message = 'There has been an HTTP Error',
    statusCode = HTTP_STATUS_CODE.UNKNOWN,
    endpoint,
  }: CustomHttpErrorParams) {
    super({ message, name, code: 'HTTP_ERROR' })
    this.statusCode = statusCode
    this.endpoint = endpoint
  }
}

export class BadRequestError extends CustomHttpError {
  constructor({
    name = 'Bad Request Error',
    message = 'There has been a Bad Request Error',
    endpoint,
  }: HttpErrorParams) {
    super({ message, name, endpoint, statusCode: HTTP_STATUS_CODE.BAD_REQUEST })
  }
}

export class UnauthorizedError extends CustomHttpError {
  constructor({
    name = 'Unauthorized Error',
    message = 'There has been an Unauthorized Error',
    endpoint,
  }: HttpErrorParams) {
    super({ message, name, endpoint, statusCode: HTTP_STATUS_CODE.UNAUTHORIZED })
  }
}

export class NotFoundError extends CustomHttpError {
  constructor({
    name = 'Not Found Error',
    message = 'There has been a Not Found Error',
    endpoint,
  }: HttpErrorParams) {
    super({ message, name, endpoint, statusCode: HTTP_STATUS_CODE.NOT_FOUND })
  }
}

export class UnknownError extends CustomHttpError {
  constructor({
    name = 'Unknown Error',
    message = 'There has been an Unknown Error',
    endpoint,
  }: HttpErrorParams) {
    super({ message, name, endpoint, statusCode: HTTP_STATUS_CODE.UNKNOWN })
  }
}
