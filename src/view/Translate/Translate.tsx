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

import { useSaveWord, useTranslate, useUserWords } from "~api"
import { useSelectInfo, useUser } from "~hooks"
import { useToast } from "~hooks/useToast"
import { getTranslateDirectionByEnglishAndChinese, isEnglishWord } from "~util"

type TProps = {
  visible: boolean
}

export function Translate({ visible }: TProps) {
  const [translateText, setTranslateText] = useState<string>("")
  const { toast } = useToast()
  const { selectedText } = useSelectInfo()
  const { data, mutateAsync } = useTranslate()
  const { mutateAsync: saveWord } = useSaveWord()

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
            <IconButton
              color="indigo"
              variant="soft"
              size="1"
              onClick={async () => {
                await saveWord({
                  languageId: 1001,
                  word: translateText,
                  chineseMean: data.trans_result[0].dst
                })
                toast("记录成功")
              }}>
              <StarIcon width="12" height="12" />
            </IconButton>
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
