import React, { createContext } from "react";
import useLocalStorage from "../components/useLocalStorage";

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useLocalStorage('themeStyle', 'themeLight')
    const toggleTheme = () => {
        const newTheme = theme === 'themeLight' ? 'themeDark' : 'themeLight'
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={[ theme, toggleTheme ]}>
            { children }
        </ThemeContext.Provider>
    )
}