import { useEffect, useState } from "react"

export function useSelectInfo() {
  const [selectInfo, setSelectInfo] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    selectedText: ""
  })
  useEffect(() => {
    const mouseDownEvent = function (event) {
      // 记录鼠标按下的初始坐标
      startX = event.clientX
      startY = event.clientY
    }
    const mouseUpEvent = function (event) {
      // 获取选中的文本范围
      var selection = window.getSelection()
      var range = selection.getRangeAt(0)

      // 获取选中文本的位置信息
      var rect = range.getBoundingClientRect()
      startX = rect.left + window.scrollX
      startY = rect.top + window.scrollY
      endX = rect.right + window.scrollX
      endY = rect.bottom + window.scrollY

      const text = selection.toString()
      if (text) {
        setSelectInfo({
          startX,
          startY,
          endX,
          endY,
          selectedText: text
        })
      } else {
        setSelectInfo({
          startX: 0,
          startY: 0,
          endX: 0,
          endY: 0,
          selectedText: ""
        })
      }
      // 打印选中文本和位置信息
      // console.log("Selected text:", selection.toString())
      // console.log("Selection coordinates:", startX, startY, endX, endY)
    }
    var startX, startY, endX, endY
    document.addEventListener("mousedown", mouseDownEvent)

    document.addEventListener("mouseup", mouseUpEvent)
    return () => {
      document.removeEventListener("mousedown", mouseDownEvent)

      document.removeEventListener("mouseup", mouseUpEvent)
    }
  }, [])

  const haveSelectedInfo = !(selectInfo.selectedText === "")

  return {
    ...selectInfo,
    haveSelectedInfo
  }
}
