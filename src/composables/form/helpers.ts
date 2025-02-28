import type { FormErrors, FormModel, FormOptions, InputModel, Model } from './types'

export const getValuesFromModel = <M extends Model>(model: FormModel<M>): M => {
  const mappedForm = Object.entries<InputModel<M>>(model).map(([key, input]) => [key, input.value])
  return Object.fromEntries(mappedForm)
}

export const setErrorsFromModel = <M extends Model>(model: FormModel<M>): FormErrors<M> => {
  const mappedForm = Object.entries<InputModel<M>>(model).map(([key]) => [key, null])
  return Object.fromEntries(mappedForm)
}

export const setOptionsFromModel = <M extends Required<Model>>(
  model: FormModel<M>,
): FormOptions<M> => {
  const mappedForm = Object.entries<InputModel<M>>(model).map(([key, input]) => [
    key,
    input.options,
  ])
  return Object.fromEntries(mappedForm)
}
