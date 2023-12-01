import { useMutation, type UseMutationOptions } from "react-query"

import { post, type ClientError } from "./client"

export function useTranslate(
  options?: UseMutationOptions<
    {
      code: number
      result: {
        token: string
        user: TLoginUser
      }
    },
    ClientError,
    TUserLoginParams
  >
) {
  return useMutation<
    {
      code: number
      result: {
        token: string
        user: TLoginUser
      }
    },
    ClientError,
    TUserLoginParams
  >((data) => post("user/login", data), options)
}
