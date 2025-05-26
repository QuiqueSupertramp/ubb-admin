import { AuthErrors } from '@/api/auth/domain/errors/authErrors'
import { supabase } from '@/config/connections/supabase'
import { Response } from '@/config/response'

export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    const unknownError = AuthErrors.logoutUnknownError()
    return Response.error(unknownError)
  }
}
