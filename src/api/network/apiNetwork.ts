import type { ApiResponse } from '@/config/response/types'
import type { Database } from '@/config/connections/supabase/types'
import type { FilterQuery, OrderQuery } from './supabase/types'

export interface ApiNetwork {
  get<T>(params: ApiGetParams): Promise<ApiResponse<T>>
  getOne<T>(params: ApiGetOneParams): Promise<ApiResponse<T | null>>
  create<T>(params: ApiCreateParams): Promise<ApiResponse<T>>
  update<T>(params: ApiUpdateParams): Promise<ApiResponse<T>>
}

export interface ApiGetParams {
  from: DBTableNames
  query?: string
  filter?: FilterQuery
  order?: OrderQuery
}

export interface ApiGetOneParams {
  from: DBTableNames
  query?: string
  filter?: FilterQuery
}
export interface ApiCreateParams {
  from: DBTableNames
  body: DBTableInsert
}
export interface ApiUpdateParams {
  from: DBTableNames
  body: DBTableUpdate
}

export type DBTables = Database['public']['Tables']
export type DBTableNames = keyof DBTables
export type DBTableRows = DBTables[keyof DBTables]['Row']
export type DBTableInsert = DBTables[keyof DBTables]['Insert']
export type DBTableUpdate = DBTables[keyof DBTables]['Update']
