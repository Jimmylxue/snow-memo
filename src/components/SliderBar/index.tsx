import classNames from "classnames"
// import cssText from "data-text:~style.css"
import cssText from "data-text:./index.css"
import type { PlasmoGetStyle } from "plasmo"
import { useEffect, useState, type HTMLAttributes } from "react"

interface TProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export function SliderBar({ show, children }: TProps) {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(false)

  useEffect(() => {
    // 一个不是很好的实现方式 -> 防止最初渲染时 渲染出 sliderBarClose 这个class
    if (show) {
      setIsFirstRender(true)
    }
  }, [show])

  return (
    <div
      id="_extension_container_"
      className={classNames(
        "sliderBar-container plasmo-whitespace-nowrap plasmo-overflow-hidden plasmo-flex-shrink-0 plasmo-bg-white plasmo-h-screen plasmo-fixed plasmo-left-0 plasmo-top-0",
        {
          sliderBarShow: show,
          sliderBarClose: !show && isFirstRender
        }
      )}
      style={{
        borderRight: "1px solid #e5e8eb"
      }}>
      {children}
    </div>
  )
}
