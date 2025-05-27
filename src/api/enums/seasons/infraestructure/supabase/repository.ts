import { SupabaseRepository } from '@/api/network/supabase/repository'
import type { Season } from '../../domain/season'

export class SeasonsSupabaseRepository extends SupabaseRepository<Season> {
  constructor() {
    super({ table: 'seasons' })
  }
}
