"use client"

import { useEffect, useState } from "react"
import { useSandbox } from "@/contexts/SandboxContext"
import Image from "next/image"

import Welcome from "@/components/Location"
import Weather from "@/components/Weather"
import HourlyGradientBackground from "@/components/HourlyGradient"
import Pet from "@/components/Pet"
import PetHumorBar from "@/components/PetHumorBar"
import CurrentTips from "@/components/CurrentTips"

import Flaque from "@/public/flaque.svg"

export default function DashboardScreen() {
    const sandbox = useSandbox()
    const [score, setScore] = useState(5)

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
            <div className="relative p-4 rounded-t-2xl -mt-5 z-10 bg-[#F2F7F7] overflow-hidden">
                <div className="absolute top-0 right-0 z-0">
                    <Image src={Flaque} alt="" />
                </div>
                <div className="relative flex flex-col gap-4 z-11">
                    <PetHumorBar score={staticScore ?? score} />
                    <CurrentTips />
                </div>
            </div>
        </main>
    )
}