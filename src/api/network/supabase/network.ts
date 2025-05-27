import { supabase } from '@/config/connections/supabase'
import type {
  ApiCreateParams,
  ApiGetOneParams,
  ApiGetParams,
  ApiNetwork,
  ApiUpdateParams,
} from '../apiNetwork'
import { buildQuery } from './buildQuery'
import { handleSupabaseResponse } from './response'

export class SupabaseNetwork implements ApiNetwork {
  async get<T>(params: ApiGetParams) {
    const newQuery = buildQuery(params)
    const response = await newQuery.returns<T>()

    return handleSupabaseResponse({ response, errorMessage: 'error get' })
  }

  async getOne<T>(params: ApiGetOneParams) {
    const newQuery = buildQuery(params)
    const response = await newQuery.returns<T>().limit(1).maybeSingle<T>()

    return handleSupabaseResponse({ response, errorMessage: 'error getOne' })
  }

  async create<T>({ body, from }: ApiCreateParams) {
    const response = await supabase
      .from(from)
      .insert(body)
      .select('id')
      .returns<T>()
      .limit(1)
      .single<T>()

    return handleSupabaseResponse({ response, errorMessage: 'error inserting' })
  }

  async update<T>({ body, from }: ApiUpdateParams) {
    const response = await supabase.from(from).update(body).select().returns<T>()

    return handleSupabaseResponse({ response, errorMessage: 'error inserting' })
  }
}
