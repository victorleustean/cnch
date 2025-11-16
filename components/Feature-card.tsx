"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import React, { useState, useRef } from "react"

const cardData = [
    {
        image: "/desktop.png",
        title: 'Învață practic, nu doar teoretic',
        description: 'laboratoare de științe, informatică și limbi moderne dotate cu tehnologie de ultimă generație.'
    },
    
    {
        image: '/painting.png',
        title: 'Dezvoltă-ți pasiunile, dezvotă-te personal',
        description: 'cluburi de arte, sport, robotică și proiecte europene pentru experiențe reale și distracție.',
    },
   
    {
        image: "/stack-of-books.png",
        title: 'Acces nelimitat la cunoaștere',
        description: 'peste 26.000 de volume și spații dedicate pentru studiu și proiecte.Oportunitățile sunt nelimitate.'
    },
]

export const FeaturesCardSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToCard = (index: number) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const cardWidth = 384; // w-96 = 384px
            const gap = 32; // gap-8 = 32px
            const scrollPosition = index * (cardWidth + gap);
            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 md:-mt-28 overflow-clip">
            <div className="w-full mx-auto">
                <div className="relative w-full flex flex-col items-center">
                    <h2 className="text-center font-bold tracking-tighter bg-gradient-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text -mt-20 md:mt-5 lg:-mt-7 text-3xl md:text-3xl lg:text-8xl">
                        CNCH,un lider în învățământul nemțean
                    </h2>
                </div>
                <div className="mt-16 lg:-mt-5 pt-28" ref={scrollContainerRef}>
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 items-center justify-center">
                            {cardData.map(({image, title, description }, index) => {
                                // Define gradient colors for each card
                                const gradients = [
                                    'bg-[linear-gradient(135deg,white_0%,#28cdd8_100%)]',
                                    'bg-[linear-gradient(135deg,white_0%,#f4c842_100%)]',
                                    'bg-[linear-gradient(135deg,white_0%,#cccccc_100%)]',
                                ];
                                return (
                                    <div key={index} className={`relative z-0 p-8 w-80 md:w-96 shrink-0 group ${gradients[index]}`}>
                                        <div className={`absolute inset-0 -z-10 rounded-2xl mask-[linear-gradient(225deg,transparent,transparent_40px,black_40px)]`} />
                                        <div className="flex justify-center -mt-28">
                                            <div className="inline-flex relative xl:mt-25">
                                                <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"/>
                                                <Image 
                                                    src={image} 
                                                    alt={`${title} Image`} 
                                                    width={160}
                                                    height={160}
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                    className="size-40 group-hover:-translate-y-6 transition-300" 
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-black text-3xl mt-12">{title}</h3>
                                        <p className="text-lg text-white mt-4">{description}</p>
                                        <div className="flex items-center gap-2 justify-between mt-12">
                                            <Button className="text-sm font-heading uppercase font-extrabold tracking-wider bg-black hover:bg-black active:bg-black text-white border-black hover:border-black active:border-black" >
                                                Află mai multe
                                            </Button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-white group-hover:text-black -translate-x-2 group-hover:translate-x-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}