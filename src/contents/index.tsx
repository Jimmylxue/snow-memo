import { Theme } from "@radix-ui/themes"
import cssText from "data-text:~style.css"
import originCss from "data-text:~styles.css"
import hotkeys from "hotkeys-js"
import { useEffect, useState } from "react"

import { config } from "~api/react-query"
import { SliderBar } from "~components/SliderBar"
import { useSelectInfo } from "~hooks"
import { UserProvider } from "~hooks/useUser"
import { SliderBarContent } from "~view/SliderBarContent"

// @ts-ignore
import icon from "../../assets/icon.png"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Root = () => {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = originCss
    document.body.append(style)
  }, [])

  const { queryClient, QueryClientProvider } = config()
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Theme
          accentColor="tomato"
          grayColor="sand"
          radius="large"
          scaling="95%">
          <CustomButton />
        </Theme>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default Root

const CustomButton = () => {
  const { startY, endX, haveSelectedInfo } = useSelectInfo()
  const [showSliderBar, setShowSliderBar] = useState<boolean>(false)

  useEffect(() => {
    hotkeys("ctrl+j", (e) => {
      e.preventDefault()
      setShowSliderBar((flag) => !flag)
    })
    hotkeys("escape", function (e) {
      e.preventDefault()
      setShowSliderBar(false)
    })
  }, [])

  return (
    <div className=" plasmo-w-screen plasmo-h-full">
      <SliderBar show={showSliderBar}>
        <SliderBarContent onClose={() => setShowSliderBar(false)} />
      </SliderBar>
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
