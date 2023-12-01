import { Cross2Icon } from "@radix-ui/react-icons"
import { Quote, Strong } from "@radix-ui/themes"

import { UserInfo } from "~components/UserInfo"

import { Translate } from "./Translate/Translate"

export function SliderBarContent() {
  return (
    <div className=" plasmo-bg-gray-50 plasmo-h-screen plasmo-px-2 plasmo-py-2">
      <div className=" plasmo-flex plasmo-items-center plasmo-justify-between plasmo-mb-2">
        <Strong>
          <Quote>吉单词</Quote>
        </Strong>
        <Cross2Icon
          className=" plasmo-cursor-pointer"
          onClick={() => {
            console.log("close")
          }}
        />
      </div>
      <UserInfo />
      <Translate visible />
      {/* <Recite /> */}
    </div>
  )
}
