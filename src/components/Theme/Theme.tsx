import React,{useState} from 'react';
import {ThemeContext} from '../../Context/store';
import {getInitialTheme} from '../../services/themeContext'

export const ThemeProvider = ({ initialTheme, children }:{initialTheme?:string, children:React.ReactElement}) => {

    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme:string) => {
        const root = window.document.documentElement
        const isDark = theme === "dark"
    
        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(theme)
    
        localStorage.setItem("color-theme", theme)
      }

      if (initialTheme) {
        rawSetTheme(initialTheme)
      }

      React.useEffect(
        () => {
          rawSetTheme(theme)
        },
        [theme]
      )

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
    )
}
