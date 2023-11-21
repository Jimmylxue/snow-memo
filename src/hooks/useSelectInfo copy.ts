import { useEffect, useState } from "react"

export function useSelectInfo() {
  const [selectInfo, setSelectInfo] = useState({
    selectedText: "",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseDownEvent = (event) => {
      startCoords.x = event.clientX
      startCoords.y = event.clientY
    }

    const mouseUpEvent = (event) => {
      endCoords.x = event.clientX
      endCoords.y = event.clientY

      const selection = window.getSelection()
      const selectedText = selection.toString()
      const range = selection.getRangeAt(0)
      const { x, y, left, top, bottom, right, width, height } =
        range.getBoundingClientRect()

      if (!!selectedText && selectedText.length !== 0) {
        console.log(
          "range.getBoundingClientRect()",
          range.getBoundingClientRect()
        )
        setSelectInfo({
          selectedText,
          x: endCoords.x,
          y: endCoords.y,
          left,
          top,
          bottom,
          right,
          width,
          height
        })
      } else {
        setSelectInfo({
          selectedText: "",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0
        })
      }
      console.log("Selected Text:", selectedText)
      console.log("Selected Range:", range.getBoundingClientRect())
    }
    let startCoords = { x: 0, y: 0 }
    let endCoords = { x: 0, y: 0 }

    document.addEventListener("mousedown", mouseDownEvent)
    document.addEventListener("mouseup", mouseUpEvent)

    return () => {
      document.removeEventListener("mousedown", mouseDownEvent)
      document.removeEventListener("mouseup", mouseUpEvent)
    }
  }, [])

  const hasSelected = selectInfo.selectedText !== ""

  return {
    ...selectInfo,
    hasSelected
  }
}
