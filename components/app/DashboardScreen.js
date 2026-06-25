"use client"

import { useEffect, useState } from "react"
import { useSandbox } from "@/contexts/SandboxContext"

import Welcome from "@/components/Location"
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
                <div className="px-6 pt-6 pb-10 flex">
                    <div>
                        <Welcome />
                        <Weather staticTemp={staticTemp} />
                    </div>
                    <div className="flex items-end">
                        <Pet score={staticScore ?? score} />
                    </div>
                </div>
            </HourlyGradientBackground>
            <div className="relative p-4 rounded-t-2xl -mt-5 z-10 bg-[#F2F7F7] flex flex-col gap-4">
                <PetHumorBar score={staticScore ?? score} />
                {/* <CurrentTips /> */}
            </div>
        </main>
    )
}