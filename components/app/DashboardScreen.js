"use client"

import { useSandbox } from "@/contexts/SandboxContext"

import Welcome from "@/components/Welcome"
import Weather from "@/components/Weather"
import TapBar from "@/components/TapBar"
import HourlyGradientBackground from "@/components/HourlyGradient"
import Pet from "@/components/Pet"
import PetHumorBar from "@/components/PetHumorBar"

export default function DashboardScreen() {
    const sandbox = useSandbox()

    const staticHour = sandbox?.isStatic ? sandbox.hour : null
    const staticTemp = sandbox?.isStatic ? sandbox.temp : null
    const staticScore = sandbox?.isStatic ? sandbox.score : null
    const score = sessionStorage.getItem("score") ? parseInt(sessionStorage.getItem("score")) : 50

    return (
        <main className="relative min-h-full">
            <HourlyGradientBackground staticHour={staticHour}>
                <Pet score={staticScore ? staticScore : score} />
                <div>
                    <Welcome />
                    <Weather staticTemp={staticTemp} />
                </div>
            </HourlyGradientBackground>
            <div className="p-4 rounded-t-2xl">
                <PetHumorBar score={staticScore ? staticScore : score} />
                {/* <CurrentTips /> */}
            </div>
        </main>
    )
}