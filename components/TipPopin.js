"use client"

import Image from 'next/image'

import CheckIconWhite from '@/public/checkIconWhite.svg'

export default function TipPopin({ tip, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-11/12 max-w-md relative">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
                <button onClick={onClose} className="primary-button has-icon">
                    Compris
                    <Image src={CheckIconWhite} alt="" />
                </button>
            </div>
        </div>
    )
}