"use client"

import { tips } from "@/data/tips";
import TipCard from "@/components/TipCard";
import { useSandbox } from "@/contexts/SandboxContext";
import { useScore } from "@/contexts/ScoreContext";

export default function TipsScreen() {
    const sandbox = useSandbox()
    const { addScore } = useScore()

    function handleDone() {
        if (sandbox) {
            sandbox.setScore(prev => Math.min(prev + 25, 100))
        } else {
            addScore(25)
        }
    }

    return (
        <div>
            {tips.map((tip) => (
                <TipCard tip={tip} key={tip.id} onDone={handleDone} />
            ))}
        </div>
    )
}
