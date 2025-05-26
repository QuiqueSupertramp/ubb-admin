export interface CustomErrorParams {
  message?: string
  code?: string
  name?: string
}

export class CustomError extends Error {
  code: string

  constructor({
    message = "There has been a Custom Error",
    code = "CUSTOM_ERROR",
    name = "Custom Error",
  }: CustomErrorParams) {
    super(message)
    this.code = code
    this.name = name
  }
}
