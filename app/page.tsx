"use client";
import Image from "next/image";
import logo from "@/public/logo-cnch.jpeg";
import CardNav from "./components/CardNav";
import CardSwap, { Card } from "./components/CardSwap";
import image1 from '@/public/poza-cnch-2.jpg';
import image2 from '@/public/activitati-cnch-5.jpg';
import image3 from '@/public/cnch-activitati-2.jpg';
import { Button } from "@/components/ui/button";

export default function Home() {
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
    <>
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
  <div style={{ height: '600px', position: 'relative' }} className="overflow-x-clip">
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
      <h1 className="text-xl md:text-2xl xl:text-8xl font-bold tracking-tighter bg-gradient-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text -mt-10 xl:-mt-96 xl:ml-5">
        Educație cu impact.<br/>
        Viitor cu sens.
      </h1>
      <p className="text-xl xl:text-xl text-[#010D3E] tracking-tight mt-6 ml-8 md:ml-16 xl:ml-5 max-w-3xl">
  Colegiul Național „Calistrat Hogaș" din Piatra-Neamț este un spațiu unde tradiția
  se întâlnește cu inovația. Cu o istorie de peste un secol, rezultate excepționale și
  dotări moderne, formăm elevi pregătiți să devină liderii unei lumi în schimbare.
  Aici, fiecare zi deschide uși către viitor.
</p>
<div className="flex gap-4 xl:ml-5 xl:mt-5">
  <Button className="bg-black text-white hover:bg-black/90" size="lg">
    Află mai multe
  </Button>
  <Button className="bg-white text-black hover:bg-white/90 border border-black" size="lg">
    Contactează-ne
  </Button>
</div>
    </>
  );
}