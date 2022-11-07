import React, { useState, FC } from "react"

interface IThemeContext {
  dark: string
  toggleDark?: (param: string) => void
}

const defaultState = {
  dark: "theme-dark",
}

export const ThemeContext = React.createContext<IThemeContext>(defaultState)

export const ThemeProvider: FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark)

  const toggleDark = (param: string) => {
    setDark(param)
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
