import type { ApiRepository } from '@/api/network/apiRepository'
import type { League } from './league'
import type { Season } from '@/api/enums/seasons/domain/season'
import type { ApiResponse } from '@/config/response/types'

export interface LeaguesRepository extends ApiRepository<League> {
  getLeaguesBySeason: (season: Season) => Promise<ApiResponse<League[]>>
}
