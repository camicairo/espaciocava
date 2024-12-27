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
          className="absolute bottom-0 left-0 w-full h-1/5 
                        bg-gradient-to-b from-transparent to-black"
        />
      </div>

      {/* Middle Section */}
      <div className="h-[10%] bg-gradient-to-b from-black/30 to-transparent relative">
        {/* Logo superpuesto en el medio (opcional) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
      <div className="h-2/5 bg-black flex flex-col items-center justify-start pt-4 relative">
        <p className="text-center max-w-2xl text-base italic text-[#F6EACE] drop-shadow-sm px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          condimentum massa nec aliquet efficitur. Phasellus aliquet est a
          rutrum hendrerit. Integer nec facilisis dolor, id rutrum libero.
        </p>

        <nav className="flex items-center gap-2 text-white/80 uppercase font-semibold tracking-wide mt-4">
          <a href="nuestra-cava" className="transition-colors hover:text-white">
            Nuestra Cava
          </a>
          <span>|</span>
          <a href="experiencias" className="transition-colors hover:text-white">
            Experiencias
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
