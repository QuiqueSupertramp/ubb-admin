import { computed, ref, watch } from 'vue'
import type { FormError, FormErrors, FormModel, InputModel, Model } from './types'
import { getValuesFromModel, setErrorsFromModel, setOptionsFromModel } from './helpers'

export const useForm = <M extends Model>(params: {
  model: FormModel<M>
  submit: () => Promise<unknown>
}) => {
  const { model, submit } = params

  const isFormSubmitting = ref(false)

  const form = ref(getValuesFromModel<M>(model))
  const formErrors = ref(setErrorsFromModel<M>(model))
  const formOptions = setOptionsFromModel<M>(model)

  const onSubmit = async () => {
    isFormSubmitting.value = true
    if (!isFormSent.value) isFormSent.value = true

    try {
      const res = await submit()
      return res
    } catch (error) {
      return error
    } finally {
      isFormSubmitting.value = false
    }
  }

  const isFormSent = ref(false)

  const formHasErrors = computed(() => {
    return Object.values<FormError>(formErrors.value).some((error) => error)
  })

  const allRequiredsFieldsReady = computed(() => {
    return Object.entries(formOptions).every((o) => {
      if (!o[1].required) return true
      else return !!form.value[o[0]]
    })
  })

  const isFormReady = computed(
    () =>
      (!isFormSent.value && allRequiredsFieldsReady.value) ||
      (isFormSent.value && !formHasErrors.value),
  )

  const setError = (key: keyof FormErrors<M>, error: string | null) => {
    if (!key) return
    if (!error) return (formErrors.value[key] = null)

    if (!formErrors.value[key]) formErrors.value[key] = [] as string[]
    formErrors.value[key].push(error)
  }

  const validateForm = () => {
    Object.entries<InputModel<M>>(model).forEach(([key, input]) => {
      setError(key, null)
      input.validation?.({
        formValues: form.value,
        setError: (error: string | null) => setError(key, error),
      })

      if (model[key].options.required) {
        if (!form.value[key] || (typeof form.value[key] === 'string' && !form.value[key].length))
          setError(key, 'Este campo es obligatorio')
      }
    })
  }

  watch(form.value, validateForm, { immediate: true })

  return {
    form,
    formErrors,
    formOptions,
    validateForm,
    formHasErrors,
    onSubmit,
    isFormSent,
    allRequiredsFieldsReady,
    isFormReady,
  }
}
