import HeroInicio from "@/components/HeroInicio";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroInicio />

      {/* Bottom Section */}
      <div className="h-[35%] bg-black flex flex-col items-center justify-start pt-8 relative">
        {/* Ajustar margen superior al texto */}
        <p className="text-center max-w-2xl text-base italic text-[#f6eacebb] drop-shadow-sm px-4 mt-12 font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          condimentum massa nec aliquet efficitur. Phasellus aliquet est a
          rutrum hendrerit. Integer nec facilisis dolor, id rutrum libero.
        </p>

        {/* Navegación */}
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
    </div>
  );
}
