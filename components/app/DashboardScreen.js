"use client"

import { useEffect, useState } from "react"
import { useSandbox } from "@/contexts/SandboxContext"

import Welcome from "@/components/Welcome"
import Weather from "@/components/Weather"
import HourlyGradientBackground from "@/components/HourlyGradient"
import Pet from "@/components/Pet"
import PetHumorBar from "@/components/PetHumorBar"

export default function DashboardScreen() {
    const sandbox = useSandbox()
    const [score, setScore] = useState(50)

    const staticHour = sandbox?.isStatic ? sandbox.hour : null
    const staticTemp = sandbox?.isStatic ? sandbox.temp : null
    const staticScore = sandbox?.isStatic ? sandbox.score : null

    useEffect(() => {
        if (staticScore != null) {
            setScore(staticScore)
            return
        }

        const storedScore = sessionStorage.getItem("score")

        if (storedScore) {
            setScore(parseInt(storedScore))
        }
    }, [staticScore])

    return (
        <main className="relative min-h-full">
            <HourlyGradientBackground staticHour={staticHour}>
                <Pet score={staticScore ?? score} />
                <div>
                    <Welcome />
                    <Weather staticTemp={staticTemp} />
                </div>
            </HourlyGradientBackground>
            <div className="p-4 rounded-t-2xl">
                <PetHumorBar score={staticScore ?? score} />
                {/* <CurrentTips /> */}
            </div>
        </main>
    )
}