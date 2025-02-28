import type { FormModel, Model } from '@/composables/form/types'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export interface LoginModel extends Model {
  email?: string
  password?: string
}

export const loginModel: FormModel<LoginModel> = {
  email: {
    value: undefined,
    options: {
      label: 'Correo Electronico',
      type: 'email',
      required: true,
      autocomplete: true,
    },
    validation: ({ formValues, setError }) => {
      const { email } = formValues
      if (!email?.length) return
      if (!emailRegex.test(email)) setError('El email no es válido')
    },
  },
  password: {
    value: undefined,
    options: { label: 'Contraseña', type: 'password', required: true },
    validation: ({ formValues, setError }) => {
      const { password } = formValues
      if (!password?.length) return
      if (password.length < 6) return setError('Mínimo 6 caracteres')
    },
  },
}
