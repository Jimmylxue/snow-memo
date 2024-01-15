import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode
} from "react"

import type { TLoginUser } from "~api"

type TUserInfo = {
  user?: TLoginUser
  setUser?: (user: TLoginUser) => void
  logout: () => void
}

const UserContext = createContext<TUserInfo>({
  user: undefined,
  logout: () => {}
})

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TLoginUser>()

  useEffect(() => {
    chrome.storage.sync.get(
      ["snow_memo_token", "snow_memo_user"],
      async (result) => {
        setUser(result?.snow_memo_user)
      }
    )
  }, [])

  const logout = () => {
    chrome.storage.sync.remove(["snow_memo_token", "snow_memo_user"])
    setUser(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout
      }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
