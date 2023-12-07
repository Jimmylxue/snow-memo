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
import { useEffect, useState } from "react"

import { useTranslate } from "~api"
import { useSelectInfo } from "~hooks"
import {
  countEnglishWords,
  getTranslateDirectionByEnglishAndChinese,
  isEnglishSentence,
  isEnglishWord
} from "~util"

type TProps = {
  visible: boolean
}

export function Translate({ visible }: TProps) {
  const [translateText, setTranslateText] = useState<string>("")
  const { selectedText } = useSelectInfo()
  const { data, mutateAsync } = useTranslate()

  useEffect(() => {
    setTranslateText(selectedText || "")
  }, [selectedText])

  if (!visible) {
    return null
  }
  return (
    <>
      <div>
        <TextArea
          size="1"
          placeholder="Reply to comment…"
          value={translateText}
          onChange={(e) => {
            setTranslateText(e.target.value)
          }}
        />
      </div>
      <Button
        color="cyan"
        variant="soft"
        className=" plasmo-w-full plasmo-mt-2"
        onClick={async () => {
          await mutateAsync(
            getTranslateDirectionByEnglishAndChinese(translateText)
          )
        }}>
        立即翻译
      </Button>

      {data?.trans_result && (
        <>
          <Flex justify="between" my="2">
            {isEnglishWord(data?.trans_result[0].dst) ? (
              <Badge color="blue">单词</Badge>
            ) : (
              <Badge color="green">句子</Badge>
            )}
          </Flex>
          <div>
            <ScrollArea type="always" scrollbars="vertical">
              <Box p="2">
                <Heading
                  size="4"
                  mb="2"
                  trim="start"
                  className=" plasmo-whitespace-pre-wrap">
                  {data?.trans_result[0]?.src}
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
                    {data.trans_result[0].dst}
                  </Blockquote>
                </Flex>
              </Box>
            </ScrollArea>
          </div>
        </>
      )}
    </>
  )
}
