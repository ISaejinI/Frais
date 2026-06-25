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

    if (pathname?.startsWith('/sandbox')) {
        return null
    }

    const isActive = (href) => pathname === href

    return (
        <nav className="fixed bottom-4 right-3.5 left-3.5 z-10 rounded-3xl flex justify-between bg-white px-8 py-3 gap-4 border border-(--border-color)">
            <Link href="/dashboard" className={`flex flex-col items-center ${isActive('/dashboard') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/dashboard') ? DashboardIconSelected : DashboardIcon} alt="" className="h-8 w-auto" />
                Accueil
                <div className={`h-1 w-5 rounded-full ${isActive('/dashboard') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="#" className={`flex flex-col items-center ${isActive('/stats') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/stats') ? StatsIconSelected : StatsIcon} alt="" className="h-8 w-auto" />
                Stats
                <div className={`h-1 w-5 rounded-full ${isActive('/stats') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="#" className={`flex flex-col items-center ${isActive('/tips') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/tips') ? TipsIconSelected : TipsIcon} alt="" className="h-8 w-auto" />
                Conseils
                <div className={`h-1 w-5 rounded-full ${isActive('/tips') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
            <Link href="#" className={`flex flex-col items-center ${isActive('/settings') ? 'text-(--active-color)' : 'text-black'}`}>
                <Image src={isActive('/settings') ? SettingsIconSelected : SettingsIcon} alt="" className="h-8 w-auto" />
                Réglages
                <div className={`h-1 w-5 rounded-full ${isActive('/settings') ? 'bg-(--active-color)' : 'bg-transparent'}`}></div>
            </Link>
        </nav>
    )
}