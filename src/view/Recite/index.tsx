import { BookmarkIcon } from "@radix-ui/react-icons"
import {
  Blockquote,
  Box,
  Button,
  Flex,
  Heading,
  Switch,
  Text,
  TextField
} from "@radix-ui/themes"
import { useState } from "react"

import { useUserWords } from "~api"
import { useUser } from "~hooks"

export function Recite() {
  const { user } = useUser()
  const [page, setPage] = useState<number>(1)
  const [showRecite, setShowRecite] = useState<boolean>(false)
  const [isRecite, _] = useState<boolean>(false)
  const { data: userWords } = useUserWords(
    ["userWords", page],
    {
      page,
      pageSize: 5
    },
    {
      refetchOnWindowFocus: false,
      enabled: showRecite && !!user?.id
    }
  )
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
          {userWords?.result?.map((item) => (
            <div className=" plasmo-mt-2" key={item.wordId}>
              <Heading size="4" trim="start">
                {item.word}
              </Heading>
              <Blockquote my="2">{item.chineseMean}</Blockquote>
              {isRecite && (
                <Flex gap="3">
                  <Box grow="1">
                    <TextField.Input size="1" placeholder="Search the docs…" />
                    <Flex gap="3" mt="3" justify="between">
                      <Flex align="center" gap="2" asChild>
                        <Text as="label" size="1">
                          <Text>输入答案</Text>
                        </Text>
                      </Flex>
                      <Button size="1">检查</Button>
                    </Flex>
                  </Box>
                </Flex>
              )}
            </div>
          ))}
          <Flex justify="between" my="3">
            <Button
              variant="soft"
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1)
              }}>
              <BookmarkIcon width="16" height="16" /> 上一批
            </Button>
            <Button
              variant="soft"
              disabled={page * 5 >= userWords?.total}
              onClick={() => {
                setPage(page + 1)
              }}>
              <BookmarkIcon width="16" height="16" /> 下一批
            </Button>
          </Flex>
        </div>
      )}
    </div>
  )
}
