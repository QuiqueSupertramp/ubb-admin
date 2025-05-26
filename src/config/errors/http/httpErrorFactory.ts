import {
  CustomHttpError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  UnknownError,
} from './httpErrors'
import type { CustomHttpErrorParams, HttpErrorParams } from './types'

export class HTTPErrorFactory {
  static custom({ endpoint, message, name, statusCode }: CustomHttpErrorParams) {
    return new CustomHttpError({ endpoint, message, name, statusCode })
  }

  static badRequest({ endpoint, message, name }: HttpErrorParams) {
    return new BadRequestError({ endpoint, message, name })
  }

  static unauthorized({ endpoint, message, name }: HttpErrorParams) {
    return new UnauthorizedError({ endpoint, message, name })
  }

  static notFound({ endpoint, message, name }: HttpErrorParams) {
    return new NotFoundError({ endpoint, message, name })
  }

  static unknown({ endpoint, message, name }: HttpErrorParams) {
    return new UnknownError({ endpoint, message, name })
  }
}
