import type { GenresSupabaseRepository } from '../infraestructure/supabase/repository'

export const createGenresService = (repository: GenresSupabaseRepository) => ({
  getAll: async () => await repository.get(),
})
