"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import DashboardIcon from '@/public/dashboardIcon.svg'
import DashboardIconSelected from '@/public/dashboardIconSelect.svg'
import StatsIcon from '@/public/statsIcon.svg'
import StatsIconSelected from '@/public/statsIconSelect.svg'
import TipsIcon from '@/public/tipsIcon.svg'
import TipsIconSelected from '@/public/tipsIconSelect.svg'
import SettingsIcon from '@/public/settingsIcon.svg'
import SettingsIconSelected from '@/public/settingsIconSelect.svg'

export default function TapBar() {
    const pathname = usePathname()

    const isActive = (href) => pathname === href

    return (
        <nav className="absolute bottom-4 right-3.5 left-3.5 z-10 rounded-3xl flex justify-between bg-white px-8 py-3 gap-4 border border-(--border-color)">
            <Link href="/sandbox/dashboard" className={`flex flex-col items-center ${isActive('/sandbox/dashboard') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/sandbox/dashboard') ? DashboardIconSelected : DashboardIcon} alt="" className="h-8 w-auto" />
                Accueil
                <div className={`h-1 w-5 rounded-full ${isActive('/sandbox/dashboard') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="/sandbox/stats" className={`flex flex-col items-center ${isActive('/sandbox/stats') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/sandbox/stats') ? StatsIconSelected : StatsIcon} alt="" className="h-8 w-auto" />
                Stats
                <div className={`h-1 w-5 rounded-full ${isActive('/sandbox/stats') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="/sandbox/tips" className={`flex flex-col items-center ${isActive('/sandbox/tips') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/sandbox/tips') ? TipsIconSelected : TipsIcon} alt="" className="h-8 w-auto" />
                Conseils
                <div className={`h-1 w-5 rounded-full ${isActive('/sandbox/tips') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="/sandbox/settings" className={`flex flex-col items-center ${isActive('/sandbox/settings') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/sandbox/settings') ? SettingsIconSelected : SettingsIcon} alt="" className="h-8 w-auto" />
                Réglages
                <div className={`h-1 w-5 rounded-full ${isActive('/sandbox/settings') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
        </nav>
    )
}