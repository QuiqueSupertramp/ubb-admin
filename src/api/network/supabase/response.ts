import { ErrorFactory } from '@/config/errors'
import type { ApiResponse } from '@/config/response/types'
import type { PostgrestSingleResponse } from '@supabase/supabase-js'

interface Params<T> {
  response: PostgrestSingleResponse<T>
  errorMessage: string
}

export const handleSupabaseResponse = <T>(params: Params<T>) => {
  const { response, errorMessage } = params
  const { data, error, count } = response

  if (error) {
    console.log('error:', error)
    const res: ApiResponse<T> = {
      error: ErrorFactory.http.custom({ message: errorMessage, name: error.name }),
      data: null,
      count: null,
    }
    return res as ApiResponse<T>
  }

  const res: ApiResponse<T> = { data, count: count ?? null, error: null }

  return res as ApiResponse<T>
}
