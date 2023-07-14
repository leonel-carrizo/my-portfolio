/* eslint-env browser */
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const theme = isDark ? 'dark' : 'light'

  const handleTheme = () => {
    const newIsDark = !isDark
    localStorage.setItem('isDark', JSON.stringify(newIsDark))
    setIsDark(newIsDark)
  }

  useEffect(() => {
    const storedIsDark = localStorage.getItem('isDark')
    const isDark = storedIsDark ? JSON.parse(storedIsDark) : false
    setIsDark(isDark)
  }, [])

  return (
    <ThemeContext.Provider
      value={{ theme, handleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
