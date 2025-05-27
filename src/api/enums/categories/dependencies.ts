import { createCategoriesService } from './aplication/service'
import { CategoriesSupabaseRepository } from './infraestructure/supabase/repository'

const currentRepository = new CategoriesSupabaseRepository()
export const categoriesService = createCategoriesService(currentRepository)
