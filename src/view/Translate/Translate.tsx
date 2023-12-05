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
import { useEffect, useMemo, useState } from "react"

import { useTranslate, type TShortEn } from "~api"
import { useSelectInfo } from "~hooks"
import { isEnglishSentence } from "~util"

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

  const requestParams = useMemo(() => {
    if (translateText) {
      const isEnglish = isEnglishSentence(translateText)
      if (isEnglish) {
        return {
          from: "en",
          to: "zh",
          q: translateText
        }
      } else {
        return {
          from: "zh",
          to: "en",
          q: translateText
        }
      }
    } else {
      return {
        from: "en",
        to: "zh",
        q: translateText
      }
    }
  }, [translateText]) as { from: TShortEn; to: TShortEn; q: string }

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
          await mutateAsync(requestParams)
        }}>
        立即翻译
      </Button>

      {data?.trans_result && (
        <>
          <Flex justify="between" my="2">
            {isEnglishSentence(data?.trans_result[0].dst) ? (
              <Badge color="green">句子</Badge>
            ) : (
              <Badge color="blue">单词</Badge>
            )}
            {/* <IconButton size="1">
              <StarIcon width="12" height="12" />
            </IconButton> */}
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
