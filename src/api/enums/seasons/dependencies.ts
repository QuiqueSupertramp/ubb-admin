import { createSeasonsService } from './aplication/service'
import { SeasonsSupabaseRepository } from './infraestructure/supabase/repository'

const currentRepository = new SeasonsSupabaseRepository()
export const seasonService = createSeasonsService(currentRepository)
