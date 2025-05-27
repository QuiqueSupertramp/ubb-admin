import { createLeaguesService } from './aplication/service'
import { LeaguesSupabaseRepository } from './infraestructure/supabase/repository'

const currentRepository = new LeaguesSupabaseRepository()
export const leaguesService = createLeaguesService(currentRepository)
