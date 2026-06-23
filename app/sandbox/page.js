"use client"

import { useSandbox } from "./layout"

export default function SandboxPage() {
    const sandbox = useSandbox()
    const sandboxHour = sandbox?.hour ? sandbox.hour : new Date().getHours()
    const sandboxTemp = sandbox?.temp ? sandbox.temp : 22

    return (
        <main className="min-h-full">
            <p>Il fait : {sandboxTemp}°C</p>
            <p>Il est : {sandboxHour}:{new Date().getMinutes()}</p>
        </main>
    );
}