import { BookmarkIcon } from "@radix-ui/react-icons"
import {
  Box,
  Button,
  Flex,
  Heading,
  Switch,
  Text,
  TextField
} from "@radix-ui/themes"
import { useState } from "react"

export function Recite() {
  const [showRecite, setShowRecite] = useState<boolean>(false)

  return (
    <div>
      <div className=" plasmo-my-3">
        <Text as="label" size="2">
          <Flex gap="2">
            <Switch
              checked={showRecite}
              onClick={() => setShowRecite(!showRecite)}
            />{" "}
            单词小本本
          </Flex>
        </Text>
      </div>
      {showRecite && (
        <div>
          <div className=" plasmo-mt-2">
            <Heading size="4" mb="2" trim="start">
              hello
            </Heading>
            <Flex gap="3">
              <Box grow="1">
                {/* <TextArea placeholder="Write a comment…" /> */}
                <TextField.Input size="1" placeholder="Search the docs…" />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="1">
                      <Text>Send to group</Text>
                    </Text>
                  </Flex>
                  <Button size="1">check</Button>
                </Flex>
              </Box>
            </Flex>
          </div>
          <div className=" plasmo-mt-2">
            <Heading size="4" mb="2" trim="start">
              hello
            </Heading>
            <Flex gap="3">
              <Box grow="1">
                {/* <TextArea placeholder="Write a comment…" /> */}
                <TextField.Input size="1" placeholder="Search the docs…" />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="1">
                      <Text>Send to group</Text>
                    </Text>
                  </Flex>
                  <Button size="1">check</Button>
                </Flex>
              </Box>
            </Flex>
          </div>
          <div className=" plasmo-mt-2">
            <Heading size="4" mb="2" trim="start">
              hello
            </Heading>
            <Flex gap="3">
              <Box grow="1">
                {/* <TextArea placeholder="Write a comment…" /> */}
                <TextField.Input size="1" placeholder="Search the docs…" />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="1">
                      <Text>Send to group</Text>
                    </Text>
                  </Flex>
                  <Button size="1">check</Button>
                </Flex>
              </Box>
            </Flex>
          </div>
          <div className=" plasmo-mt-2">
            <Heading size="4" mb="2" trim="start">
              hello
            </Heading>
            <Flex gap="3">
              <Box grow="1">
                {/* <TextArea placeholder="Write a comment…" /> */}
                <TextField.Input size="1" placeholder="Search the docs…" />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="1">
                      <Text>Send to group</Text>
                    </Text>
                  </Flex>
                  <Button size="1">check</Button>
                </Flex>
              </Box>
            </Flex>
          </div>
          <div className=" plasmo-mt-2">
            <Heading size="4" mb="2" trim="start">
              hello
            </Heading>
            <Flex gap="3">
              <Box grow="1">
                {/* <TextArea placeholder="Write a comment…" /> */}
                <TextField.Input size="1" placeholder="Search the docs…" />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="1">
                      <Text>Send to group</Text>
                    </Text>
                  </Flex>
                  <Button size="1">check</Button>
                </Flex>
              </Box>
            </Flex>
          </div>
          <Flex justify="between" my="3">
            <Button variant="soft">
              <BookmarkIcon width="16" height="16" /> 上一批
            </Button>
            <Button variant="soft">
              <BookmarkIcon width="16" height="16" /> 下一批
            </Button>
          </Flex>
        </div>
      )}
    </div>
  )
}
