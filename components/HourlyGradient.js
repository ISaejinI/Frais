"use client"

import { useEffect, useState } from "react"
import { hourlyGradients } from "@/data/gradients"
import { getCurrentHour } from "@/utils/time"

export default function HourlyGradientBackground({ children }) {
  const [currentTheme, setCurrentTheme] = useState(hourlyGradients[12])
  const [currentHour, setCurrentHour] = useState(null)

  useEffect(() => {
    const updateTheme = () => {
      const hour = getCurrentHour()

      const themeData = hourlyGradients.find((item) => item.hour === hour)

      setCurrentHour(hour)
      setCurrentTheme(themeData || hourlyGradients[12])
    }

    updateTheme()

    const interval = setInterval(updateTheme, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative min-h-full transition-all duration-1000 ease-in-out"
      style={{
        background: currentTheme.gradient,
        color: currentTheme.fontColor,
      }}
    >
      {children}
    </div>
  )
}