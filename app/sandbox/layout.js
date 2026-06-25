"use client"

import { useState } from "react"
import { SandboxContext } from "@/contexts/SandboxContext"
import { getCurrentHour } from "@/utils/time"

export default function SandboxLayout({ children }) {
    const [isStatic, setIsStatic] = useState(false);
    const [hour, setHour] = useState(getCurrentHour());
    const [temp, setTemp] = useState(22);
    const [score, setScore] = useState(50);

    return (
        <SandboxContext.Provider value={{ hour, setHour, temp, setTemp, isStatic, setIsStatic, score, setScore }}>
            <section className="min-h-screen bg-[#e9f3f5] text-black">
                <main className="flex min-h-screen">
                    <div className="flex flex-1 items-center justify-center overflow-auto p-10">
                        <div className="relative">
                            <div className="absolute inset-0 translate-y-8 rounded-[60px] bg-black/20 blur-3xl" />
                            <div className="relative rounded-[56px] bg-[#111] p-4 shadow-2xl">
                            <div className="absolute left-1/2 top-5 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
                            <div className="absolute -left-1 top-32 h-16 w-1 rounded-l-full bg-[#222]" />
                            <div className="absolute -right-1 top-40 h-24 w-1 rounded-r-full bg-[#222]" />
                            <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[44px] bg-white">
                                {children}
                            </div>
                            </div>
                        </div>
                    </div>

                    <aside className="w-[320px] border-l border-black/10 bg-white/70 p-6 backdrop-blur-md font-[arial]">
                        <p className="text-sm font-semibold uppercase text-slate-500">Frais</p>

                        <h1 className="mt-2 text-2xl font-bold">Mode Sandbox</h1>

                        <p className="mt-4 text-sm text-slate-600">
                            Cette zone permet de tester les composants de l’application dans un aperçu mobile réaliste.
                        </p>

                        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm font-semibold">Aperçu</p>
                            <div className="mt-2 text-sm text-slate-500">
                                <div className="flex items-center">
                                    <p>Activer les données statiques</p>
                                    <input
                                        type="checkbox"
                                        checked={isStatic}
                                        onChange={(e) => setIsStatic(e.target.checked)}
                                        className="ml-2 h-4 w-4 rounded border-slate-300 text-slate-600 focus:ring-slate-400"
                                    />
                                </div>

                                {isStatic && (
                                    <>
                                        <p>Il est {hour}:{new Date().getMinutes()}</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="23"
                                            value={hour}
                                            onChange={(e) => setHour(Number(e.target.value))}
                                            className="w-full mt-2"
                                        />
        
                                        <p>Il fait : {temp}°C</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="40"
                                            value={temp}
                                            onChange={(e) => setTemp(Number(e.target.value))}
                                            className="w-full mt-2"
                                        />

                                        <p>Score : {score}</p>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={score}
                                            onChange={(e) => setScore(Number(e.target.value))}
                                            className="w-full mt-2"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </aside>
                </main>
            </section>
        </SandboxContext.Provider>
    )
}
