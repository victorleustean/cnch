"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-cnch.jpeg";
import CardNav from "./components/CardNav";
import CardSwap, { Card } from "./components/CardSwap";
import image1 from '@/public/poza-cnch-2.jpg';
import image2 from '@/public/activitati-cnch-5.jpg';
import image3 from '@/public/cnch-activitati-2.jpg';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FeaturesCardSection } from "@/components/Feature-card";
import CircularGallery from '@/components/CircularGallery';
import AdmisionSection from "@/components/AdmisionSection"

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data.slice(0, 3)));
  }, []);

  const items = [
    {
      label: "Oameni și Activități",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Personalul", ariaLabel: "About Company" },
        { label: "Activități", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Organizare și Documente", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Despre noi", ariaLabel: "Featured Projects" },
        { label: "Informații de interes public", ariaLabel: "Project Case Studies" },
        { label: "Organigramă", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Evaluări și Competiții",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Competiții", ariaLabel: "Email us" },
        { label: "Examene", ariaLabel: "Twitter" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-200 to-gray-400_100%">
      <CardNav
        logo={logo}
        logoAlt='Colegiul Național "Calistrat Hogaș" Piatra-Neamț'
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      {/* Hero Section - Completely Restructured for Mobile */}
      <div className="relative pt-24 md:pt-0">
        {/* Mobile Layout: CardSwap ABOVE text */}
        <div className="md:hidden">
          {/* CardSwap Container - Centered on mobile */}
          <div className="flex justify-center items-center overflow-x-clip px-4 mb-8">
            <div style={{ height: '350px', width: '100%', maxWidth: '450px', position: 'relative' }}>
              <CardSwap
                width={350}      
                height={300}   
                cardDistance={70}
                verticalDistance={40}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <Image src={image1} alt="Card 1" fill style={{ objectFit: 'cover' }} />
                </Card>
                <Card>
                  <Image src={image2} alt="Card 2" fill style={{ objectFit: 'cover' }} />
                </Card>
                <Card>
                  <Image src={image3} alt="Card 3" fill style={{ objectFit: 'cover' }} />
                </Card>
              </CardSwap>
            </div>
          </div>

          {/* Text Content - Below CardSwap on mobile */}
          <div className="px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text mb-6">
              Educație cu impact.<br/>
              Viitor cu sens.
            </h1>
            <p className="text-base text-[#010D3E] tracking-tight mb-8 leading-relaxed">
              Colegiul Național „Calistrat Hogaș" din Piatra-Neamț este un spațiu unde tradiția
              se întâlnește cu inovația. Cu o istorie de peste un secol, rezultate excepționale și
              dotări moderne, formăm elevi pregătiți să devină liderii unei lumi în schimbare.
              Aici, fiecare zi deschide uși către viitor.
            </p>
          </div>

          {/* Buttons with proper spacing */}
          <div className="flex flex-col gap-4 px-6 mt-8">
            <Button className="bg-black text-white hover:bg-black/90 w-full" size="lg">
              Află mai multe
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 border border-black w-full" size="lg">
              Contactează-ne
            </Button>
          </div>
        </div>

        {/* Desktop Layout: Original positioning */}
        <div className="hidden md:block">
          <div className="overflow-x-clip" style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              width={600}      
              height={500}   
              cardDistance={100}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <Image src={image1} alt="Card 1" fill style={{ objectFit: 'cover' }} />
              </Card>
              <Card>
                <Image src={image2} alt="Card 2" fill style={{ objectFit: 'cover' }} />
              </Card>
              <Card>
                <Image src={image3} alt="Card 3" fill style={{ objectFit: 'cover' }} />
              </Card>
            </CardSwap>
          </div>

          <div className="px-4">
            <h1 className="text-2xl xl:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text -mt-10 xl:-mt-96 xl:ml-5">
              Educație cu impact.<br/>
              Viitor cu sens.
            </h1>
            <p className="text-xl xl:text-xl text-[#010D3E] tracking-tight mt-6 ml-16 xl:ml-5 max-w-3xl">
              Colegiul Național „Calistrat Hogaș" din Piatra-Neamț este un spațiu unde tradiția
              se întâlnește cu inovația. Cu o istorie de peste un secol, rezultate excepționale și
              dotări moderne, formăm elevi pregătiți să devină liderii unei lumi în schimbare.
              Aici, fiecare zi deschide uși către viitor.
            </p>
          </div>

          <div className="flex gap-4 ml-16 xl:ml-5 mt-5">
            <Button className="bg-black text-white hover:bg-black/90" size="lg">
              Află mai multe
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 border border-black" size="lg">
              Contactează-ne
            </Button>
          </div>
        </div>
      </div>

      {/* Blog Section - Properly centered on mobile */}
      <section className="w-11/12 md:w-2/3 mt-24 md:mt-30 mb-20 mx-auto md:ml-8 md:mr-auto xl:ml-5">
        <div className="flex justify-center md:justify-start items-center mb-8">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center md:text-left">
            Avizier
          </h2>
        </div>
        
        {/* Cards container - centered on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-center md:items-stretch">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              href={`/blog/${article.id}`}
              className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow w-full max-w-sm md:max-w-none"
            >
              <span className="text-sm text-gray-500 uppercase">{article.category}</span>
              <h3 className="text-xl font-semibold mt-2 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.date}</p>
            </Link>
          ))}
        </div>
        
        {/* Button centered on mobile */}
        <div className="mt-8 flex justify-center md:justify-start">
          <Link href="/blog">
            <Button className="bg-black text-white hover:bg-black/90 w-full md:w-auto" size="lg">
              Vezi tot avizierul
            </Button>
          </Link>
        </div>
      </section>

      <FeaturesCardSection />

      {/* Gallery Section - Centered title on mobile */}
      <div className="px-4 mb-8">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center md:text-left md:ml-5">
          CNCH în imagini
        </h2>
      </div>
      
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2}/>
      </div>

      <AdmisionSection/>
      
      <p className="mt-10 text-sm md:text-lg text-center text-foreground px-4 pb-4">
        &copy; 2025 Colegiul Național "Calistrat Hogaș" Piatra-Neamț, Toate drepturile rezervate.
      </p>
      <p className="text-sm md:text-lg text-center text-foreground px-4 pb-10">
        Site realizat de Leuștean Victor si Tărîță Alexia.
      </p>
    </div>
  );
}