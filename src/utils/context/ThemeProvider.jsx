import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false)

    function toggleTheme() {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}