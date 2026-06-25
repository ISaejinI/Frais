"use client"

import { useSandbox } from "@/contexts/SandboxContext"
import { useScore } from "@/contexts/ScoreContext"
import Image from "next/image"

import Welcome from "@/components/Location"
import Weather from "@/components/Weather"
import HourlyGradientBackground from "@/components/HourlyGradient"
import Pet from "@/components/Pet"
import PetHumorBar from "@/components/PetHumorBar"
import CurrentTips from "@/components/CurrentTips"
import PetQuote from "@/components/PetQuote"

import Flaque from "@/public/flaque.svg"

export default function DashboardScreen() {
    const sandbox = useSandbox()
    const { score: contextScore, addScore } = useScore()

    const staticHour = sandbox?.isStatic ? sandbox.hour : null
    const staticTemp = sandbox?.isStatic ? sandbox.temp : null

    const displayScore = sandbox ? sandbox.score : contextScore

    function handleDone() {
        if (sandbox) {
            sandbox.setScore(prev => Math.min(prev + 25, 100))
        } else {
            addScore(25)
        }
    }

    return (
        <main className="relative min-h-full">
            <HourlyGradientBackground staticHour={staticHour}>
                <div className="px-6 pt-6 pb-10 flex">
                    <div className="w-1/2">
                        <Welcome />
                        <Weather staticTemp={staticTemp} />
                        <PetQuote score={displayScore} />
                    </div>
                    <div className="flex items-end w-1/2">
                        <Pet score={displayScore} />
                    </div>
                </div>
            </HourlyGradientBackground>
            <div className="relative p-4 rounded-t-2xl -mt-5 z-10 bg-[#F2F7F7] overflow-hidden pb-32">
                <div className="absolute top-0 right-0 z-0">
                    <Image src={Flaque} alt="" />
                </div>
                <div className="relative flex flex-col gap-4 z-11">
                    <PetHumorBar score={displayScore} />
                    <CurrentTips onDone={handleDone} />
                </div>
            </div>
        </main>
    )
}
