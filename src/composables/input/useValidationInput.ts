import { computed, ref } from 'vue'
import { InputValidationError } from '@/config/errors'
import type {
  InputStatus,
  InputTypes,
  InputValidateParams,
  UseValidationInputParams,
} from './types'

export const useValidationInput = <T extends InputTypes>(params: UseValidationInputParams<T>) => {
  const { name, validation } = params

  const errors = ref<string[] | null>(null)

  const setErrors = (error: string | null) => {
    if (!error) return (errors.value = null)

    if (!errors.value) errors.value = []
    errors.value.push(error)
  }

  const validate = (params?: InputValidateParams<T>) => {
    errors.value = null
    if (!validation) return
    validation({ setErrors, ...params })
  }

  const status = computed<InputStatus>(() => {
    if (!errors.value || !errors.value.length) return { isValid: true, error: null }
    return { isValid: false, error: new InputValidationError({ id: name, errors: errors.value }) }
  })

  return { validate, status }
}
