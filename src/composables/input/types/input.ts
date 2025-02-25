import type { InputStatus } from './inputStatus'
import type { InputTypes } from './inputTypes'
import type { InputValidationParams } from './inputValidation'

export interface Input<T extends InputTypes> {
  value: T
  status: InputStatus
  validate: (otherValues?: InputValidationParams<T>['otherValues']) => void
}
