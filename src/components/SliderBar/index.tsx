import classNames from "classnames"
import cssText from "data-text:./index.css"
import type { PlasmoGetStyle } from "plasmo"
import type { HTMLAttributes } from "react"

interface TProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  // onSearchChange: (params: TSearchTaskParams) => void;
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export function SliderBar({ show, children }: TProps) {
  return (
    <div
      className={classNames(
        "sliderBar-container plasmo-whitespace-nowrap plasmo-overflow-hidden plasmo-flex-shrink-0 plasmo-bg-white plasmo-h-screen plasmo-fixed plasmo-left-0 plasmo-top-0",
        {
          sliderBarShow: show,
          sliderBarClose: !show
        }
      )}
      style={{
        borderRight: "1px solid #e5e8eb"
      }}>
      {children}
    </div>
  )
}
