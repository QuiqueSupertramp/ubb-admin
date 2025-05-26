import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import useToast from '@/composables/toast/useToast'
import { authService } from '@/api/auth/dependecies'
import type { AuthLogin } from '@/api/auth/domain/authLogin'
import { getLoginErrors } from '@/api/auth/domain/validations/login'
import { useForm } from '@/composables/form/useForm'

const useLogin = () => {
  const { setUser } = useUserStore()
  const router = useRouter()
  const toast = useToast()

  const login = async (params: AuthLogin) => {
    const errors = getLoginErrors(params)

    if (errors) {
      toast.error('Hay errores en algún campo del formulario. Revísalo e inténtalo de nuevo.')
      return
    }

    const res = await authService.login(params)

    if (res.error) {
      toast.error(res.error.message)
      return
    }

    setUser(res.data)
    router.push({ name: 'home' })
  }

  // const signOut = async () => {
  //   const res = await authService.logout()
  //   if (res) return res
  //   setUser(null)
  //   router.push({ name: 'login' })
  // }

  const { form, isLoading, errors, handleSubmit } = useForm<AuthLogin>({
    initialValue: {
      email: undefined,
      password: undefined,
    },
    submit: login,
    getErrors: getLoginErrors,
  })

  return { form, isLoading, errors, handleSubmit }
}

export default useLogin
