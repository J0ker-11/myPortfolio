import { Sun, Moon } from "lucide-react"
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        storedTheme === "dark" ? (() => {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        })()
        : (() => {
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        })
    }, [])

    const toggleTheme = () => {
        isDarkMode 
        ? (() => {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
          })()
        : (() => {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
          })()
        setIsDarkMode(prev => !prev)
    }

  return (
    <div>
        <button onClick={toggleTheme} className={cn(" p-2 rounded-full transition-colors duration-300", "focus:outline-hidden cursor-pointer")}> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900" />} </button>
    </div>
  )
}

export default ThemeToggle