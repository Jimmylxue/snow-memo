import { createContext, FC, ReactNode, useContext, useState } from "react"

type ToastFnOption = {
  duration?: number
}

type ToastType = {
  describe: string
  visible: boolean
  toast: (describe: string, option?: ToastFnOption) => void
}

const ToastContext = createContext<ToastType>({
  toast: () => {},
  describe: "",
  visible: false
})

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [describe, setDescribe] = useState<string>("")

  const toast = (describe: string, { duration = 3000 }: ToastFnOption = {}) => {
    console.log("comming")
    setVisible(true)
    setDescribe(describe)
    setTimeout(() => {
      setVisible(false)
    }, duration)
  }

  return (
    <ToastContext.Provider value={{ visible, toast, describe }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
