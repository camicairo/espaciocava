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
    <main className="pt-[90px]">
      {" "}
      {/* Este padding top para que no tape el header fijo */}
      {/* Encabezado con breadcrumbs */}
      <div className="px-8 py-4 text-sm text-gray-200">
        <a href="/" className="text-gray-400 hover:text-white">
          Inicio
        </a>
        <span className="mx-2">{">"}</span>
        <span>Nuestra Cava</span>
      </div>
      {/* Hero */}
      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black" />
        <Image
          src="/logo.png"
          alt="Espacio Cava Logo"
          width={240}
          height={100}
          className="z-10 object-contain"
        />
      </section>
      {/* Contenido principal */}
      <section className="bg-black min-h-screen">
        {/* Tabs */}
        <div className="flex justify-center gap-2 mt-8">
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
              className="border border-white px-4 py-2 text-white text-sm hover:bg-yellow-300 hover:text-black transition"
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
