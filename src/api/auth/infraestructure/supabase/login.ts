import { supabase } from '@/config/connections/supabase'
import { Response } from '@/config/response'
import { mapUserFromSupabaseSession } from './mappers/user'
import { AuthErrors } from '@/api/auth/domain/errors/authErrors'
import type { AuthLogin } from '@/api/auth/domain/authLogin'

export const login = async (params: AuthLogin) => {
  try {
    const { error, data } = await supabase.auth.signInWithPassword(params)

    if (error) {
      if (error.code === 'invalid_credentials')
        return Response.error(AuthErrors.invalidCredentials())
      else return Response.error(AuthErrors.loginUnknownError())
    }

    return Response.success(mapUserFromSupabaseSession(data.session))
  } catch {
    return Response.error(AuthErrors.loginUnknownError())
  }
}
