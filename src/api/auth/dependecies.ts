import { createAuthService } from './aplication/authServices'
import { authSupabaseRepository } from './infraestructure/supabase/repository'

const currentRepository = authSupabaseRepository
export const authService = createAuthService(currentRepository)
