export interface InputOptions {
  type?: 'text' | 'number' | 'search' | 'email' | 'password'
  label?: string
  labelIcon?: string
  autocomplete?: boolean
  inputClass?: string
  required?: boolean
}

export type FormOptions<T> = {
  [key in keyof T]?: InputOptions
}
