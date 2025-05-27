import { supabase } from '@/config/connections/supabase'
import type { ApiGetParams } from '../apiNetwork'

export const buildQuery = (params: ApiGetParams) => {
  const { from, query = '*', filter, order } = params

  let newQuery = supabase.from(from).select(query)

  if (filter) {
    const { key, value, operator = 'eq' } = filter

    if (operator === 'eq') newQuery = newQuery.eq(key, value)
    if (operator === 'neq') newQuery = newQuery.neq(key, value)
    if (operator === 'gt') newQuery = newQuery.gt(key, value)
    if (operator === 'gte') newQuery = newQuery.gte(key, value)
    if (operator === 'lt') newQuery = newQuery.lt(key, value)
    if (operator === 'lte') newQuery = newQuery.lte(key, value)
    if (operator === 'like' && typeof value === 'string') newQuery = newQuery.like(key, value)
    if (operator === 'ilike' && typeof value === 'string')
      newQuery = newQuery.ilike(key, `%${value}%`)
    if (operator === 'is' && typeof value === 'boolean' && value === null)
      newQuery = newQuery.is(key, value)
  }

  if (order) {
    const { column, ...options } = order
    newQuery = newQuery.order(column, options)
  }

  return newQuery
}
