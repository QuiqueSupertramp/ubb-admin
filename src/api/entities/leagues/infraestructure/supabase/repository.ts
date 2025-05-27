import { SupabaseRepository } from '@/api/network/supabase/repository'
import type { League } from '../../domain/league'
import type { LeaguesRepository } from '../../domain/repository'
import type { Season } from '@/api/enums/seasons/domain/season'
import { leagueEntityQuery } from '@/api/network/supabase/queries'

export class LeaguesSupabaseRepository
  extends SupabaseRepository<League>
  implements LeaguesRepository
{
  constructor() {
    super({
      table: 'leagues',
      query: leagueEntityQuery,
    })
  }

  async getLeaguesBySeason(season: Season) {
    return await this.get({
      filter: { key: 'season_id', value: season.id },
    })
  }
}
