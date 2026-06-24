"use client"

import { createContext, useContext } from "react"

export const SandboxContext = createContext(null)

export function useSandbox() {
    return useContext(SandboxContext)
}