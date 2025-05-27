import type { Category } from '@/api/enums/categories/domain/category'
import type { Genre } from '@/api/enums/genres/domain/genre'
import type { Season } from '@/api/enums/seasons/domain/season'

export interface League {
  id: number
  name: string
  category: Category
  genre: Genre
  season: Season
}
