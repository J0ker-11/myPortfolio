import { Sun, Moon } from "lucide-react"
import React, { useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        isDarkMode 
        ? document.documentElement.classList.remove("dark")
        : document.documentElement.classList.add("dark")
        setIsDarkMode((prev) => !prev)
    }

  return (
    <div>
        <button onClick={toggleTheme} className="cursor-pointer"> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900" />} </button>
    </div>
  )
}

export default ThemeToggle