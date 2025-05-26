import { toast, type ToastOptions } from 'vue3-toastify'

const baseToastOptions: ToastOptions = {
  autoClose: 3000,
  position: toast.POSITION.TOP_CENTER,
}

const useToast = () => {
  const success = (message: string, options?: ToastOptions) => {
    toast(message, { ...baseToastOptions, ...options, type: 'success' })
  }
  const error = (message: string, options?: ToastOptions) => {
    toast(message, { ...baseToastOptions, ...options, type: 'error' })
  }

  return { success, error }
}

export default useToast
