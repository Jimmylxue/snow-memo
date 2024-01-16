import {
  useMutation,
  useQuery,
  type QueryKey,
  type UseMutationOptions,
  type UseQueryOptions
} from "react-query"

import { post, type ClientError } from "~api/client"

import type { TSaveWordParams, TUserWordList } from "./type"

export function useUserWords(
  queryKey: QueryKey,
  variable: {
    page: number
    pageSize: number
    languageId?: number
    sort?: "ASC" | "DESC"
    word?: string
    chineseMean?: string
  },
  config?: UseQueryOptions<TUserWordList, ClientError>
) {
  return useQuery<TUserWordList, ClientError>(
    queryKey,
    () => post("words/list", variable),
    config
  )
}

export function useSaveWord(
  options?: UseMutationOptions<
    { code: number; result: string },
    ClientError,
    TSaveWordParams
  >
) {
  return useMutation<
    { code: number; result: string },
    ClientError,
    TSaveWordParams
  >((data) => post("words/save", data), options)
}
