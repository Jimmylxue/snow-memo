import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { useState, type HTMLAttributes } from "react"

import { useUserLogin } from "~api"
import { encrypt } from "~util/encrypt"

interface TProps extends HTMLAttributes<HTMLDivElement> {}

export function Login({ children }: TProps) {
  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { mutateAsync } = useUserLogin({
    onSuccess: (res) => {
      console.log("saveSuccess")
      chrome.storage.sync.set({
        snow_memo_token: res.token,
        snow_memo_user: res.user
      })
    }
  })
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>账号登录</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          享受背单词的快乐吧~
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              手机号
            </Text>
            <TextField.Input
              value={phone}
              placeholder="Enter your full phone"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              密码
            </Text>
            <TextField.Input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={async () => {
                const pwd = await encrypt(password)
                await mutateAsync({
                  phone,
                  password: pwd
                })
              }}>
              登录
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
