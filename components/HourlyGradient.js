"use client"

import { useEffect, useState } from "react"
import { hourlyGradients } from "@/data/gradients"
import { getCurrentHour } from "@/utils/time"

export default function HourlyGradientBackground({ children, staticHour = null }) {
    const [currentTheme, setCurrentTheme] = useState(hourlyGradients[12])

    useEffect(() => {
        const updateTheme = () => {
            const hourToUse = staticHour ?? getCurrentHour()
            const themeData = hourlyGradients.find((item) => item.hour === hourToUse)
            setCurrentTheme(themeData || hourlyGradients[12])
        }

        updateTheme()

        if (staticHour !== null) return

        const interval = setInterval(updateTheme, 60 * 1000)

        return () => clearInterval(interval)
    }, [staticHour])

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