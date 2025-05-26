import { ENV } from '@/config/env'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
import { useUserStore } from '@/store/user'
import { mapUserFromSupabaseSession } from '@/api/auth/infraestructure/supabase/mappers/user'

export const supabase = createClient<Database>(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY)

supabase.auth.onAuthStateChange((event, session) => {
  const store = useUserStore()

  if (!session) {
    store.setUser(null)
    return
  }

  if (!store.user) {
    return store.setUser(mapUserFromSupabaseSession(session))
  }

  if (session.user.id !== store.user.id) return store.setUser(null)
})
