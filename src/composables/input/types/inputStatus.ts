import type { InputValidationError } from '@/config/errors'

export type InputStatus = InputValidStatus | InputInvalidStatus

interface InputValidStatus {
  isValid: true
  error: null
}

interface InputInvalidStatus {
  isValid: false
  error: InputValidationError
}
