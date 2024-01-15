import { useMutation, type UseMutationOptions } from "react-query"

import { post, type ClientError } from "~api/client"

import type { TUserLoginByMailParams, TUserRegisterByMailParams } from "./type"

export type TLoginUser = {
  id: number
  username: string
  avatar: string
  sex: 1 | 0
  phone: string
  createTime: string
}

export function useUserLoginByMail(
  options?: UseMutationOptions<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserLoginByMailParams
  >
) {
  return useMutation<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserLoginByMailParams
  >((data) => post("user/login_by_mail", data), options)
}

export function useUserRegisterByMail(
  options?: UseMutationOptions<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserRegisterByMailParams
  >
) {
  return useMutation<
    {
      token: string
      user: TLoginUser
    },
    ClientError,
    TUserRegisterByMailParams
  >((data) => post("user/register_by_mail", data), options)
}

export function useSendMail(
  options?: UseMutationOptions<
    {
      code: number
      result: string
    },
    ClientError,
    { mail: string }
  >
) {
  return useMutation<
    {
      code: number
      result: string
    },
    ClientError,
    { mail: string }
  >((data) => post("mail/send_verification_code", data), options)
}
