import { ENV } from '@/config/env'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

export const supabase = createClient<Database>(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY)
