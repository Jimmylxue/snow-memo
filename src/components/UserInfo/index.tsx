import { LinkBreak1Icon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

import { ConfirmModal } from "~components/Confirm"
import { Login } from "~components/Login/Login"
import { useUser } from "~hooks/useUser"

export function UserInfo() {
  const { user, logout } = useUser()
  return (
    <>
      <Card mt="2" mb="2">
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src={user?.avatar}
            radius="full"
            fallback={user?.username || "U"}
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              {user?.username}
            </Text>
            <Text
              className=" plasmo-flex-grow"
              as="div"
              size="1"
              color="gray"
              style={{
                wordBreak: "break-all",
                wordWrap: "break-word",
                overflow: "auto",
                whiteSpace: "pre-wrap"
              }}>
              永远相信，美好的事情即将发生
            </Text>
          </Box>
          <Box className=" plasmo-max-w-sm plasmo-flex-shrink-0 plasmo-ml-auto">
            {user?.username ? (
              <ConfirmModal
                titles="确定退出登录吗"
                describe="退出后无法体验完整功能~"
                onConfirm={() => {
                  logout()
                }}>
                <LinkBreak1Icon className=" plasmo-cursor-pointer" />
              </ConfirmModal>
            ) : (
              <Login>
                <PaperPlaneIcon className=" plasmo-cursor-pointer" />
              </Login>
            )}
          </Box>
        </Flex>
      </Card>
    </>
  )
}
