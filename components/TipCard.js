"use client"

import Image from 'next/image'

import CheckIconWhite from '@/public/checkIconWhite.svg'

import TipPopin from '@/components/TipPopin'

export default function TipCard({ tip }) {
    return (
        <div className="bg-white rounded-2xl p-4 border border-(--border-color) flex flex-col gap-2">
            <h3 className="text-black text-2xl font-semibold">{tip.title}</h3>
            <p className="text-black text-base">{tip.shortDescription}</p>
            <div className='flex items-center gap-2'>
                <button className="btn-secondary">Pour quoi faire ?</button>
                <button className="btn-primary has-icon">C'est fait <Image src={CheckIconWhite} alt="" /></button>
            </div>
        </div>
    )
}