"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string; // Título que aparece en el breadcrumb
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section
      className="relative w-full h-[35vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black" />
      <div className="px-8 text-base text-white font-medium absolute top-16 left-1 tracking-wider">
        {/* Breadcrumbs */}
        <a href="/" className="text-gray-400 font-light hover:text-white">
          Inicio
        </a>
        <span className="mx-2">{">"}</span>
        <span>{title}</span>
      </div>
      <Image
        src="/logo.png"
        alt="Espacio Cava Logo"
        width={140}
        height={100}
        className="z-10 object-contain"
      />
    </section>
  );
};

export default Hero;
