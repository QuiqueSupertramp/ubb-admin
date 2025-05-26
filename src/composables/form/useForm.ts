import { computed, ref } from 'vue'

export const useForm = <T>({
  initialValue,
  submit,
  getErrors,
}: {
  initialValue: T | Partial<T>
  submit: (form: T) => Promise<void>
  getErrors?: (value: T) => null | { [key in keyof T]: string | undefined }
}) => {
  const form = ref({ ...initialValue })
  const isLoading = ref(false)
  const sent = ref(false)
  const errors = computed(() => {
    if (!getErrors || !sent.value) return null
    return getErrors(form.value)
  })

  const reset = () => (form.value = { ...initialValue })

  const handleSubmit = async () => {
    isLoading.value = true
    if (!sent.value) sent.value = true
    await submit(form.value)
    isLoading.value = false
  }

  return { form, isLoading, sent, errors, handleSubmit, reset }
}
