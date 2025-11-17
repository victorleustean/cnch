"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    image: "/desktop.png",
    title: "Învață practic, nu doar teoretic",
    description:
      "laboratoare de științe, informatică și limbi moderne dotate cu tehnologie de ultimă generație."
  },

  {
    image: "/painting.png",
    title: "Dezvoltă-ți pasiunile, dezvoltă-te personal",
    description:
      "cluburi de arte, sport, robotică și proiecte europene pentru experiențe reale și distracție."
  },

  {
    image: "/stack-of-books.png",
    title: "Acces nelimitat la cunoaștere",
    description: "peste 26.000 de volume și spații dedicate pentru studiu și proiecte. Oportunitățile sunt nelimitate."
  }
];

export const FeaturesCardSection = () => {
  return (
    <section className="py-24 overflow-clip">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-bold tracking-tighter bg-gradient-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl xl:text-8xl max-w-5xl">
            CNCH, un lider în învățământul nemțean
          </h2>
        </div>

        {/* Increased gap to avoid overlap between cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {cardData.map(({ image, title, description }, index) => {
            const gradients = [
              "bg-[linear-gradient(135deg,white_0%,#28cdd8_100%)]",
              "bg-[linear-gradient(135deg,white_0%,#f4c842_100%)]",
              "bg-[linear-gradient(135deg,white_0%,#cccccc_100%)]"
            ];
            return (
              <div key={index} className={`relative z-0 p-8 w-full max-w-sm shrink-0 group ${gradients[index]} rounded-2xl`}>
                <div className={`absolute inset-0 -z-10 rounded-2xl`} />

                {/* Image at top with extra top padding to avoid interference */}
                <div className="flex justify-center -mt-24 mb-8">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
                    <Image src={image} alt={`${title} Image`} width={160} height={160} loading={index === 0 ? "eager" : "lazy"} className="size-40 group-hover:-translate-y-6 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">{title}</h3>
                <p className="text-base md:text-lg text-white leading-relaxed mb-8">{description}</p>

                <div className="flex items-center gap-2 justify-between">
                  <Button className="text-sm font-heading uppercase font-extrabold tracking-wider bg-black hover:bg-black/90 active:bg-black text-white border-black hover:border-black active:border-black">
                    Află mai multe
                  </Button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
