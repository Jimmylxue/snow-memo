import { useMutation, type UseMutationOptions } from "react-query"

import { post, type ClientError } from "~api/client"

import type { TUserLoginParams, TUserRegisterParams } from "./type"

export type TLoginUser = {
  id: number
  username: string
  avatar: string
  sex: 1 | 0
  phone: string
  createTime: string
}

export function useUserLogin(
  options?: UseMutationOptions<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserLoginParams
  >
) {
  return useMutation<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserLoginParams
  >((data) => post("user/login", data), options)
}

export function useUserRegister(
  options?: UseMutationOptions<
    {
      code: number
      result: string
    },
    ClientError,
    TUserRegisterParams
  >
) {
  return useMutation<
    {
      code: number
      result: string
    },
    ClientError,
    TUserRegisterParams
  >((data) => post("user/register", data), options)
}
