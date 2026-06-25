"use client"

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import TipCard from "./TipCard";

import { tips } from "@/data/tips";

export default function CurrentTips({ onDone }) {
    const [randomTips, setRandomTips] = useState([]);

    useEffect(() => {
        setRandomTips(tips.slice().sort(() => Math.random() - 0.5).slice(0, 5));
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Le geste à faire</h2>
            <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                style={{ width: '100%' }}
                spaceBetween={16}
            >
                {randomTips.map((tip) => (
                    <SwiperSlide key={tip.id}>
                        <TipCard tip={tip} onDone={onDone} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
