"use client"

import Welcome from "@/components/Welcome"
import Weather from "@/components/Weather"
import TapBar from "@/components/TapBar"
import HourlyGradientBackground from "@/components/HourlyGradient"
import { useSandbox } from "@/contexts/SandboxContext"

export default function DashboardScreen() {
    const sandbox = useSandbox()

    const staticHour = sandbox?.isStatic ? sandbox.hour : null
    const staticTemp = sandbox?.isStatic ? sandbox.temp : null

    return (
        <HourlyGradientBackground staticHour={staticHour}>
            <main>
                <Welcome />
                <Weather staticTemp={staticTemp} />
            </main>
            <TapBar />
        </HourlyGradientBackground>
    )
}