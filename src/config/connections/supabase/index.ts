import { Consts } from '@/config/consts'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

export const supabase = createClient<Database>(Consts.SUPABASE_URL, Consts.SUPABASE_ANON_KEY)
