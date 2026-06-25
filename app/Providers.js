"use client"

import { ScoreProvider } from "@/contexts/ScoreContext"

export default function Providers({ children }) {
    return <ScoreProvider>{children}</ScoreProvider>
}
