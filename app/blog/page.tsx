"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-cnch.jpeg";

import image1 from "@/public/poza-cnch-2.jpg";
import image2 from "@/public/activitati-cnch-5.jpg";
import image3 from "@/public/cnch-activitati-2.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FeaturesCardSection } from "@/components/Feature-card";
import CircularGallery from "@/components/CircularGallery";
import AdmisionSection from "@/components/AdmisionSection";
import CardSwap from "../components/CardSwap";
import { Card } from "@/components/ui/card";
import CardNav from "../components/CardNav";


export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, 3)))
      .catch(() => setArticles([]));
  }, []);

  const items = [
    {
      label: "Oameni și Activități",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Personalul", ariaLabel: "Personalul" },
        { label: "Activități", ariaLabel: "Activități" }
      ]
    },
    {
      label: "Organizare și Documente",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Despre noi", ariaLabel: "Despre noi" },
        { label: "Informații de interes public", ariaLabel: "Informații de interes public" },
        { label: "Organigramă", ariaLabel: "Organigramă" }
      ]
    },
    {
      label: "Evaluări și Competiții",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Competiții", ariaLabel: "Competiții" },
        { label: "Examene", ariaLabel: "Examene" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-200 to-gray-400_100%">
      <CardNav logo={logo} logoAlt='Colegiul Național "Calistrat Hogaș" Piatra-Neamț' items={items} baseColor="#fff" menuColor="#000" buttonBgColor="#111" buttonTextColor="#fff" ease="power3.out" />

      {/* Hero Section */}
      <section className="pt-20 pb-20 md:pb-10 overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            {/* Mobile: CardSwap above text */}
            <div className="md:hidden mb-6 flex justify-center">
              <div className="relative w-full max-w-[420px] h-[360px] flex items-center justify-center">
                <CardSwap width={350} height={300} cardDistance={70} verticalDistance={40} delay={4500} pauseOnHover={false}>
                  <Card>
                    <Image src={image1} alt="Card 1" fill style={{ objectFit: "cover" }} />
                  </Card>
                  <Card>
                    <Image src={image2} alt="Card 2" fill style={{ objectFit: "cover" }} />
                  </Card>
                  <Card>
                    <Image src={image3} alt="Card 3" fill style={{ objectFit: "cover" }} />
                  </Card>
                </CardSwap>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-[478px] xl:w-[600px] px-4 md:px-0 md:ml-8 xl:ml-16">
              <h1 className="text-4xl md:text-5xl xl:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center md:text-left">
                Educație cu impact.<br />
                Viitor cu sens.
              </h1>
              <p className="text-base md:text-xl xl:text-xl text-[#010D3E] tracking-tight mt-6 text-center md:text-left">
                Colegiul Național „Calistrat Hogaș" din Piatra-Neamț este un spațiu unde tradiția
                se întâlnește cu inovația. Cu o istorie de peste un secol, rezultate excepționale și
                dotări moderne, formăm elevi pregătiți să devină liderii unei lumi în schimbare.
                Aici, fiecare zi deschide uși către viitor.
              </p>

              {/* small extra margin-top before buttons for mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start mt-6 md:mt-8 justify-center md:justify-start">
                <Button className="bg-black text-white hover:bg-black/90 w-full sm:w-auto" size="lg">
                  Află mai multe
                </Button>
                <Button className="bg-white text-black hover:bg-white/90 border border-black w-full sm:w-auto" size="lg">
                  Contactează-ne
                </Button>
              </div>
            </div>

            {/* Desktop: CardSwap on right */}
            <div className="hidden md:block mt-20 md:mt-0 md:h-[648px] xl:h-[780px] md:flex-1 relative">
              <div className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 xl:left-8">
                <CardSwap width={600} height={500} cardDistance={100} verticalDistance={70} delay={5000} pauseOnHover={false}>
                  <Card>
                    <Image src={image1} alt="Card 1" fill style={{ objectFit: "cover" }} />
                  </Card>
                  <Card>
                    <Image src={image2} alt="Card 2" fill style={{ objectFit: "cover" }} />
                  </Card>
                  <Card>
                    <Image src={image3} alt="Card 3" fill style={{ objectFit: "cover" }} />
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avizier Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center mb-8">
              Avizier
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl place-items-center">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow w-full max-w-xs">
                  <span className="text-sm text-gray-500 uppercase">{article.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.date}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center w-full">
              <Link href="/blog">
                <Button className="bg-black text-white hover:bg-black/90" size="lg">
                  Vezi tot avizierul
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCardSection />

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center mb-8">
            CNCH în imagini
          </h2>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
        </div>
      </section>

      <AdmisionSection />


      <footer className="py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm md:text-base text-center text-foreground">
              &copy; 2025 Colegiul Național "Calistrat Hogaș" Piatra-Neamț, Toate drepturile rezervate.
            </p>
            <p className="text-sm md:text-base text-center text-foreground">
              Site realizat de Leuștean Victor si Tărîță Alexia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
