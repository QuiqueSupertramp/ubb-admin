import { ref } from 'vue'
import type { InputTypes } from './types'
import { useValidationInput } from './useValidationInput'
import type { InputValidationParams, UseValidationInputParams } from './types/inputValidation'

interface UseInputParams<T extends InputTypes> {
  initialValue?: T
  validation?: UseValidationInputParams<T>['validation']
  name: UseValidationInputParams<T>['name']
}

export const useInput = <T extends InputTypes>(params: UseInputParams<T>) => {
  const { name, initialValue, validation } = params

  const value = ref(initialValue)

  const { status, validate: validateInput } = useValidationInput({
    name,
    validation,
  })

  const validate = (otherValues?: InputValidationParams<T>['otherValues']) =>
    validateInput({ value: value.value, otherValues })

  return { value, status, validate }
}
