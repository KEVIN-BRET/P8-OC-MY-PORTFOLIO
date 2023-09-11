import { createContext, useState } from "react";

// Créer un contexte
export const ThemeContext = createContext()
// Créer un provider
export function ThemeProvider({ children }) {

    // Créer un state pour le thème
    const [darkMode, setDarkMode] = useState(false)
    // Créer une fonction pour changer le thème
    function toggleTheme() {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}