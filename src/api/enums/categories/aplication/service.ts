import type { CategoriesRepository } from '../domain/repository'

export const createCategoriesService = (repository: CategoriesRepository) => ({
  getAll: async () => await repository.get(),
})
