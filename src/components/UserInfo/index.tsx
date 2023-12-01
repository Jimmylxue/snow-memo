import { LinkBreak1Icon } from "@radix-ui/react-icons"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

export function UserInfo() {
  return (
    <Card mt="2" mb="2">
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://avatars.githubusercontent.com/u/65758455?v=4"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            Jimmy
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
          {/* <EnterIcon
        className=" plasmo-cursor-pointer"
        onClick={() => {
          console.log("close")
        }}
      /> */}
          <LinkBreak1Icon
            className=" plasmo-cursor-pointer"
            onClick={() => {
              console.log("close")
            }}
          />
        </Box>
      </Flex>
    </Card>
  )
}
