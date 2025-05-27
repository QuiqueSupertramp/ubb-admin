import { createGenresService } from './aplication/service'
import { GenresSupabaseRepository } from './infraestructure/supabase/repository'

const currentRepository = new GenresSupabaseRepository()
export const genresService = createGenresService(currentRepository)
