import { SupabaseRepository } from '@/api/network/supabase/repository'
import type { Category } from '../../domain/category'
import type { CategoriesRepository } from '../../domain/repository'

export class CategoriesSupabaseRepository
  extends SupabaseRepository<Category>
  implements CategoriesRepository
{
  constructor() {
    super({ table: 'categories' })
  }
}
