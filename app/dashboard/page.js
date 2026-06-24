"use client"

import { useEffect, useState } from "react"

import Welcome from "@/components/Welcome"
import Weather from "@/components/Weather"
import HourlyGradientBackground from "@/components/HourlyGradient"
import TapBar from "@/components/TapBar"

export default function Dashboard() {

  return (
    <HourlyGradientBackground>
        <main>
            <Welcome />
            <Weather />
        </main>
        <TapBar />
    </HourlyGradientBackground>
  )
}