import type { ApiResponse, ErrorResponse } from '@/config/response/types'
import type { Auth } from './auth'
import type { AuthLogin } from './authLogin'

export interface AuthRepository {
  login: (params: AuthLogin) => Promise<ApiResponse<Auth>>
  logout: () => Promise<ErrorResponse | void>
}
