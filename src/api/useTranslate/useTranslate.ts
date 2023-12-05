import { useMutation, type UseMutationOptions } from "react-query"

import { post, type ClientError } from "../client"
import type { TBaiduFanyi, TRequestParams } from "./type"

export function useTranslate(
  options?: UseMutationOptions<TBaiduFanyi, ClientError, TRequestParams>
) {
  return useMutation<TBaiduFanyi, ClientError, TRequestParams>(
    (data) => post("translate/base", data),
    options
  )
}
