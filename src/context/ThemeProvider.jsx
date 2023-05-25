import { useState, useEffect } from "react"
import { ThemeContext } from "./dataContext"

export const ThemeProvider = ({ children }) => {
  const getInitTheme = () => {
    const initialColor =  sessionStorage.getItem('theme')
    return initialColor ? initialColor : ''
  }

  const [theme, setTheme] = useState(getInitTheme)
  const toggleTheme = () => {
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}