import type { SeasonsRepository } from '../domain/repository'

export const createSeasonsService = (repository: SeasonsRepository) => ({
  getAll: async () => await repository.get(),
})
