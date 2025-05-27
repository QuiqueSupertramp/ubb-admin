import type { DBTableInsert, DBTableUpdate } from '../apiNetwork'
import {
  ApiRepository,
  type ApiRepositoryParams,
  type RepositoryGetOneParams,
  type RepositoryGetParams,
} from '../apiRepository'
import { SupabaseNetwork } from './network'

export class SupabaseRepository<T> extends ApiRepository<T> {
  readonly network

  constructor({ table, query, idKey }: ApiRepositoryParams) {
    super({ table, query, idKey })
    this.network = new SupabaseNetwork()
  }

  async get<D = T[]>(params?: RepositoryGetParams) {
    return await this.network.get<D>({
      from: this.table,
      query: params?.query ?? this.query,
      filter: params?.filter,
      order: params?.order,
    })
  }

  async getOne<D = T>(params: RepositoryGetOneParams) {
    return await this.network.getOne<D>({
      from: this.table,
      query: params?.query ?? this.query,
      filter: params?.filter,
    })
  }

  async getById<D = T>(id: string | number) {
    return await this.getOne<D>({
      filter: {
        key: this.idKey,
        value: id,
      },
    })
  }

  async create<D = T>(body: DBTableInsert) {
    return await this.network.create<D>({ from: this.table, body })
  }

  async update<D = T>(body: DBTableUpdate) {
    return await this.network.update<D>({ from: this.table, body })
  }
}
