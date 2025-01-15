"use client";

import React from "react";
import Image from "next/image";

const HeroInicio: React.FC = () => {
  return (
    <section
      className="relative w-full h-[35vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black" />
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

export default HeroInicio;
