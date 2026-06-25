"use client"

import Image from 'next/image'

import PlaceIcon from '@/public/placeIcon.svg'

export default function Location() {
    const location = "Lille (59)";
    const currentDate = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };

    return (
        <div className="flex gap-2 items-start">
            <Image src={PlaceIcon} alt="" />
            <div>
                <p>{location}</p>
                <p>{currentDate.toLocaleDateString('fr-FR', dateOptions)}, {currentDate.toLocaleTimeString('fr-FR', timeOptions)}</p>
            </div>
        </div>
    )
}