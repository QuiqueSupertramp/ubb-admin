import type { InputOptions } from '@/components/forms/CustomInput.vue'

type InputTypes = string | number | boolean | undefined
type SetError = (error: string | null) => void

export type Model = { [key: string]: InputTypes }

export type FormModel<M extends Model> = {
  [key in keyof M]: {
    value: M[key]
    options: InputOptions
    validation?: (params: { setError: SetError; formValues: M }) => void
  }
}

export type InputModel<M extends Model> = FormModel<M>[keyof M]
export type FormError = string[] | null
export type FormErrors<M extends Model> = { [key in keyof M]: FormError }
export type FormOptions<M extends Model> = { [key in keyof Required<M>]: InputOptions }
