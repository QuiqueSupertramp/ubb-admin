export type FilterQueryOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'like'
  | 'ilike'
  | 'is'

export interface FilterQuery {
  key: string
  operator?: FilterQueryOperator
  value: NonNullable<string | number | boolean | null>
}

export interface OrderQuery {
  column: string
  ascending?: boolean
  nullsFirst?: boolean
  referencedTable?: string
}
