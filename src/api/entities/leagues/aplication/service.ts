import type { Season } from '@/api/enums/seasons/domain/season'
import type { LeaguesRepository } from '../domain/repository'

export const createLeaguesService = (repository: LeaguesRepository) => ({
  getLeaguesBySeason: async (season: Season) => await repository.getLeaguesBySeason(season),
})
