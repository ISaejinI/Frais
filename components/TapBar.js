import Image from 'next/image'
import Link from 'next/link'

import DashboardIcon from '@/public/dashboardIcon.svg'
import StatsIcon from '@/public/statsIcon.svg'
import TipsIcon from '@/public/tipsIcon.svg'
import SettingsIcon from '@/public/settingsIcon.svg'

export default function TapBar() {

    return (
        <nav className="fixed bottom-4 z-10 rounded-full flex justify-between items-center w-full bg-amber-50 px-8 py-4 gap-4">
            <Link href="/dashboard" className="flex flex-col items-center">
                <Image src={DashboardIcon} alt="" className="h-8 w-auto" />
                Accueil
            </Link>
            <Link href="/stats" className="flex flex-col items-center">
                <Image src={StatsIcon} alt="" className="h-8 w-auto" />
                Stats
            </Link>
            <Link href="/tips" className="flex flex-col items-center">
                <Image src={TipsIcon} alt="" className="h-8 w-auto" />
                Conseils
            </Link>
            <Link href="/settings" className="flex flex-col items-center">
                <Image src={SettingsIcon} alt="" className="h-8 w-auto" />
                Réglages
            </Link>
        </nav>
    )
}