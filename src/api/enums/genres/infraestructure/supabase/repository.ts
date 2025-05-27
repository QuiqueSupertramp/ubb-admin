import { SupabaseRepository } from '@/api/network/supabase/repository'
import type { Genre } from '../../domain/genre'
import type { GenresRepository } from '../../domain/repository'

export class GenresSupabaseRepository
  extends SupabaseRepository<Genre>
  implements GenresRepository
{
  constructor() {
    super({ table: 'genres' })
  }
}
