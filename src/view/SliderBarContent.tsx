import { Cross2Icon } from "@radix-ui/react-icons"
import { Quote, Strong } from "@radix-ui/themes"

import { UserInfo } from "~components/UserInfo"

import { Recite } from "./Recite"
import { Translate } from "./Translate/Translate"

type TProps = {
  onClose: () => void
}

export function SliderBarContent({ onClose }: TProps) {
  return (
    <div className=" plasmo-bg-gray-50 plasmo-h-screen plasmo-px-2 plasmo-py-2">
      <div className=" plasmo-flex plasmo-items-center plasmo-justify-between plasmo-mb-2">
        <Strong>
          <Quote>吉单词</Quote>
        </Strong>
        <Cross2Icon className=" plasmo-cursor-pointer" onClick={onClose} />
      </div>
      <UserInfo />
      <Translate visible />
      <Recite />
    </div>
  )
}
