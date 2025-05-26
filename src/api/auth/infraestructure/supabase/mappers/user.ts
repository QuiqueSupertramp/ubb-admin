import type { Session } from '@supabase/supabase-js'
import type { Auth } from '@/api/auth/domain/auth'

export const mapUserFromSupabaseSession = (session: Session): Auth => ({
  // token: session.access_token,
  // user: {
  //   id: session.user.id,
  //   name: session.user.user_metadata?.name,
  //   mail: session.user.email,
  // },
  id: session.user.id,
  name: session.user.user_metadata?.name,
  mail: session.user.email,
})
