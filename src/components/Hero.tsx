import React from "react";
import Image from "next/image";

interface HeroProps {
  // Puedes pasarle props si quieres manejar títulos, background, etc.
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full h-screen text-white flex flex-col">
      {/* Top Section */}
      <div
        className="relative h-1/2 bg-center bg-cover"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* Overlay degradado */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 
                        bg-gradient-to-b from-transparent to-black"
        />
      </div>

      {/* Middle Section */}
      <div className="h-[5%] bg-gradient-to-b from-black/30 to-transparent relative flex items-center justify-center">
        {/* Logo centrado */}
        <div className="z-10">
          <Image
            src="/logo.png"
            alt="Espacio Cava Logo"
            width={240}
            height={100}
            // Ajusta la medida real de tu logo
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="h-[35%] bg-black flex flex-col items-center justify-start pt-8 relative">
        {/* Ajustar margen superior al texto */}
        <p className="text-center max-w-2xl text-base italic text-[#f6eacebb] drop-shadow-sm px-4 mt-12 font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          condimentum massa nec aliquet efficitur. Phasellus aliquet est a
          rutrum hendrerit. Integer nec facilisis dolor, id rutrum libero.
        </p>

        <nav className="flex items-center gap-2 text-white/80 uppercase font-medium tracking-wide mt-6">
          <a
            href="nuestra-cava"
            className="transition-colors hover:text-white duration-200"
          >
            Nuestra Cava
          </a>
          <span>|</span>
          <a
            href="experiencias"
            className="transition-colors hover:text-white duration-200"
          >
            Experiencias
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
