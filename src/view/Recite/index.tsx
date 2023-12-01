import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes"

export function Recite() {
  return (
    <div>
      <div>
        <Button
          color="cyan"
          variant="soft"
          className=" plasmo-w-full plasmo-mt-2">
          顺序背词
        </Button>
      </div>
      {/* <div>
    <Button
      color="cyan"
      variant="soft"
      className=" plasmo-w-full plasmo-mt-2">
      随机背词
    </Button>
  </div>
  <div>
    <Button
      color="cyan"
      variant="soft"
      className=" plasmo-w-full plasmo-mt-2">
      顺序复习
    </Button>
  </div>
  <div>
    <Button
      color="cyan"
      variant="soft"
      className=" plasmo-w-full plasmo-mt-2">
      随机复习
    </Button>
  </div> */}
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
    </div>
  )
}
