import type { InputTypes } from './inputTypes'

export interface InputValidateParams<T extends InputTypes = string> {
  value?: T
  otherValues?: Record<string, unknown>
}

type SetErrors = (error: string | null) => void

export interface InputValidationParams<T extends InputTypes = string>
  extends InputValidateParams<T> {
  setErrors: SetErrors
}

export interface UseValidationInputParams<T extends InputTypes = string> {
  name: string
  validation?: (params: InputValidationParams<T>) => void
}
