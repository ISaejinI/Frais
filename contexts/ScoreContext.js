"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ScoreContext = createContext(null)

export function ScoreProvider({ children }) {
    const [score, setScore] = useState(5)

    useEffect(() => {
        const stored = sessionStorage.getItem("score")
        if (stored !== null) {
            setScore(parseInt(stored))
        } else {
            sessionStorage.setItem("score", "5")
        }
    }, [])

    function addScore(amount) {
        setScore(prev => {
            const next = Math.min(prev + amount, 100)
            sessionStorage.setItem("score", String(next))
            return next
        })
    }

    return (
        <ScoreContext.Provider value={{ score, addScore }}>
            {children}
        </ScoreContext.Provider>
    )
}

export function useScore() {
    return useContext(ScoreContext)
}
