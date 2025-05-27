import type { ApiResponse } from '@/config/response/types'
import type { ApiNetwork, DBTableInsert, DBTableNames, DBTableUpdate } from '../network/apiNetwork'
import type { FilterQuery, OrderQuery } from './supabase/types'

export interface RepositoryGetParams {
  query?: string
  filter?: FilterQuery
  order?: OrderQuery
}

export interface RepositoryGetOneParams {
  query?: string
  filter: FilterQuery
}

export interface ApiRepositoryParams {
  table: DBTableNames
  query?: string
  idKey?: string
}

export abstract class ApiRepository<T> {
  abstract readonly network: ApiNetwork
  protected readonly table: DBTableNames
  protected readonly query: string
  protected readonly idKey: string

  constructor({ table, query = '*', idKey = 'id' }: ApiRepositoryParams) {
    this.table = table
    this.query = query
    this.idKey = idKey
  }

  abstract get<D = T[]>(params?: RepositoryGetParams): Promise<ApiResponse<D>>
  abstract getOne<D = T>(params: RepositoryGetOneParams): Promise<ApiResponse<D | null>>
  abstract getById<D = T>(id: string | number): Promise<ApiResponse<D | null>>
  abstract create<D = T>(body: DBTableInsert): Promise<ApiResponse<D>>
  abstract update<D = T>(body: DBTableUpdate): Promise<ApiResponse<D>>
}
