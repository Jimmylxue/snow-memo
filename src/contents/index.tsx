import cssText from "data-text:~style.css"
import { useEffect, useState } from "react"

import { SliderBar } from "~components/SliderBar"
import { useSelectInfo } from "~hooks"

// @ts-ignore
import icon from "../../assets/icon.png"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
const CustomButton = () => {
  const { startY, endX, haveSelectedInfo } = useSelectInfo()
  const [showSliderBar, setShowSliderBar] = useState<boolean>(false)

  useEffect(() => {
    if (!haveSelectedInfo) {
      setShowSliderBar(false)
    }
  }, [haveSelectedInfo])

  return (
    <div className=" plasmo-w-screen plasmo-h-full">
      <SliderBar show={showSliderBar}>hello world</SliderBar>
      {haveSelectedInfo && (
        <img
          src={icon}
          className=" plasmo-cursor-pointer plasmo-w-10 plasmo-h-10 plasmo-absolute"
          style={{
            left: endX - 40,
            top: startY - 45
          }}
          alt=""
          onClick={() => {
            setShowSliderBar(true)
          }}
        />
      )}
    </div>
  )
}

export default CustomButton
