import React from "react";
import Image from "next/image";
import WineCard from "@/components/WineCard";

export default function NuestraCavaPage() {
  // Ejemplo: data "mock" de vinos
  const wines = [
    {
      title: "Malbec Reserva",
      year: 2021,
      bodega: "Bodega Catena Zapata",
      region: "Mendoza",
      cepa: "Malbec",
      imageSrc: "/Foto_261.jpg",
    },
    {
      title: "Cabernet Sauvignon",
      year: 2019,
      bodega: "Bodega Norton",
      region: "Mendoza",
      cepa: "Cabernet Sauvignon",
      imageSrc: "/Foto_261.jpg",
    },
    // ... más vinos
  ];
  return (
    <main>
      {" "}
      {/* Este padding top para que no tape el header fijo */}
      {/* Encabezado con breadcrumbs */}
      {/* Hero */}
      <section
        className="relative w-full h-[35vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black" />
        <div className="px-8 text-base text-white font-medium	 absolute top-16 left-1 tracking-wider	">
          <a href="/" className="text-gray-400 font-light	 hover:text-white">
            Inicio
          </a>
          <span className="mx-2">{">"}</span>
          <span>Nuestra Cava</span>
        </div>
        <Image
          src="/logo.png"
          alt="Espacio Cava Logo"
          width={240}
          height={100}
          className="z-10 object-contain"
        />
      </section>
      {/* Contenido principal */}
      <section className="bg-black min-h-screen ">
        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 mt-8 px-4 scrollbar-hide">
          {[
            "Argentina",
            "Italia",
            "Francia",
            "España",
            "Resto de Europa",
            "América",
            "Resto del Mundo",
          ].map((pais) => (
            <button
              key={pais}
              className="px-6 py-2 bg-black text-white text-sm border border-white rounded-md transition-all focus:bg-white focus:text-black whitespace-nowrap"
            >
              {pais}
            </button>
          ))}
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-2 mt-8">
          {["Bodega", "Provincia", "Región", "Cepa"].map((filtro) => (
            <select
              key={filtro}
              className="bg-black border border-white text-white px-4 py-2 text-sm"
            >
              <option>{filtro}</option>
            </select>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {wines.map((wine, index) => (
            <WineCard
              key={index}
              title={wine.title}
              year={wine.year}
              bodega={wine.bodega}
              region={wine.region}
              cepa={wine.cepa}
              imageSrc={wine.imageSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
