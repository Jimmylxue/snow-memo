import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { useState, type HTMLAttributes } from "react"

import { useSendMail, useUserLoginByMail, useUserRegisterByMail } from "~api"
import { useUser } from "~hooks"
import { useToast } from "~hooks/useToast"
import { isQQMail } from "~util"

interface TProps extends HTMLAttributes<HTMLDivElement> {}

export function Login({ children }: TProps) {
  const { setUser } = useUser()
  const { toast } = useToast()
  const [modalType, setModalType] = useState<"login" | "register">("login")
  const [mail, setMail] = useState<string>("")
  const [code, setCode] = useState<string>("")
  const { mutateAsync: loginByMailFn } = useUserLoginByMail({
    onSuccess: (res) => {
      setUser(res?.user)
      chrome.storage.sync.set({
        snow_memo_token: res.token,
        snow_memo_user: res.user
      })
    }
  })
  const { mutateAsync: registerByMailFn } = useUserRegisterByMail({
    onSuccess: (res) => {
      setUser(res?.user)
      chrome.storage.sync.set({
        snow_memo_token: res.token,
        snow_memo_user: res.user
      })
    }
  })
  const { mutateAsync: sendMailFn } = useSendMail()
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450, zIndex: 10000 }}>
        <Dialog.Title>
          {modalType === "login" ? "账号登录" : "账号注册"}
        </Dialog.Title>
        <Dialog.Description size="2" mb="4">
          享受背单词的快乐吧~
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {modalType === "register" && (
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                用户名
              </Text>
              <TextField.Input
                value={mail}
                placeholder="起一个帅气的用户名吧"
                onChange={(e) => {
                  setMail(e.target.value)
                }}
              />
            </label>
          )}

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              qq邮箱
            </Text>
            <Flex>
              <div
                style={{
                  flexGrow: "1"
                }}>
                <TextField.Input
                  value={mail}
                  placeholder="请输入您的qq邮箱"
                  onChange={(e) => {
                    setMail(e.target.value)
                  }}
                />
              </div>
              <Button
                onClick={async () => {
                  if (!isQQMail(mail)) {
                    toast("请输入正确的qq邮箱地址")
                    return
                  }
                  await sendMailFn({
                    mail
                  })
                  toast("发送成功")
                }}>
                发送验证码
              </Button>
            </Flex>
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              验证码
            </Text>
            <TextField.Input
              value={code}
              placeholder="请输入6位邮箱验证码"
              onChange={(e) => {
                setCode(e.target.value)
              }}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Button
            variant="classic"
            onClick={() => {
              setModalType(modalType === "login" ? "register" : "login")
            }}>
            {modalType === "login"
              ? "没有账号？立即注册"
              : "已有账号，立即登录"}
          </Button>
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            {modalType === "login" ? (
              <Button
                onClick={async () => {
                  if (!isQQMail(mail)) {
                    toast("请输入正确的qq邮箱地址")
                    return
                  }
                  await loginByMailFn({
                    mail,
                    code
                  })
                }}>
                登录
              </Button>
            ) : (
              <Button
                onClick={async () => {
                  if (!isQQMail(mail)) {
                    toast("请输入正确的qq邮箱地址")
                    return
                  }
                  await registerByMailFn({
                    code,
                    mail
                  })
                }}>
                注册
              </Button>
            )}
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
