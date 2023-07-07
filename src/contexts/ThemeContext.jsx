import { createContext } from 'react'

export const ThemeConext = createContext()

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeConext.Provider
      value={
        [
          { Theme, isDark },
          toggleTheme
        ]
      }
    >
      {children}
    </ThemeConext.Provider>
  )
}
