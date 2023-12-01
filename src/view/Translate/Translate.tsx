import { StarIcon } from "@radix-ui/react-icons"
import {
  Badge,
  Blockquote,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  ScrollArea,
  TextArea
} from "@radix-ui/themes"

type TProps = {
  visible: boolean
}

export function Translate({ visible }: TProps) {
  if (!visible) {
    return null
  }
  return (
    <>
      <div>
        <TextArea size="1" placeholder="Reply to comment…" />
      </div>
      <Button
        color="cyan"
        variant="soft"
        className=" plasmo-w-full plasmo-mt-2">
        立即翻译
      </Button>
      <Flex justify="between" my="2">
        <Badge color="blue">单词</Badge>
        <IconButton size="1">
          <StarIcon width="12" height="12" />
        </IconButton>
        {/* <Badge color="green">句子</Badge> */}
      </Flex>

      <div>
        <ScrollArea type="always" scrollbars="vertical">
          <Box p="2" pr="8">
            <Heading size="4" mb="2" trim="start">
              ~hello world, my name is Jimmy~
            </Heading>
            <Flex direction="column" gap="4">
              <Blockquote
                size="1"
                style={{
                  wordBreak: "break-all",
                  wordWrap: "break-word",
                  overflow: "auto",
                  whiteSpace: "pre-wrap"
                }}>
                ~你好世界，我的名字是吉米
              </Blockquote>
            </Flex>
          </Box>
        </ScrollArea>
      </div>
    </>
  )
}
