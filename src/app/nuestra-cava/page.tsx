"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import WineCard from "@/components/WineCardArgentina";

export default function NuestraCavaPage() {
  // Datos de las regiones y sus filtros
  const regionFilters = {
    Argentina: ["Bodega", "Provincia", "Región", "Cepa", "Año"],
    Italia: ["Región", "Cepa", "Año"],
    Francia: ["Región", "Cepa", "Año"],
    España: ["Región", "Cepa", "Año"],
    "Resto de Europa": ["País", "Región", "Cepa", "Año"],
    América: ["País", "Región", "Cepa", "Año"],
    "Resto del Mundo": ["País", "Región", "Cepa", "Año"],
  };

  // Estado para la región activa
  const [activeRegion, setActiveRegion] = useState("Argentina");

  const wines = [
    {
      title: "Malbec Reserva",
      year: 2021,
      bodega: "Bodega Catena Zapata",
      region: "Mendoza",
      cepa: "Malbec",
      imageSrc: "/Foto_261.jpg",
      classification: "tinto",
    },
    {
      title: "Cabernet Sauvignon",
      year: 2019,
      bodega: "Bodega Norton",
      region: "Mendoza",
      cepa: "Cabernet Sauvignon",
      imageSrc: "/Foto_261.jpg",
      classification: "blanco",
    },
    {
      title: "Aluvional Altamira",
      year: 2014,
      bodega: "Zuccardi",
      region: "Valle de Uco",
      cepa: "Malbec",
      imageSrc: "/zuccardi.jpg",
      classification: "blanco",
    },
    {
      title: "33 de Davalos",
      year: 2017,
      bodega: "Tacuil",
      region: "Valle Calchaqui",
      cepa: "Blend",
      imageSrc: "/Foto_127.jpg",
      classification: "tinto",
    },
  ];

  return (
    <main className="h-screen flex flex-col">
      {/* Hero Section */}
      <Hero title="Nuestra Cava" />

      {/* Título, Tabs y Filtros */}
      <section className="sticky top-0 z-20 bg-black">
        <div className="text-center px-10 mt-6">
          <h1 className="text-2xl text-left font-medium text-white font-[Spectral]">
            Nuestra Cava
          </h1>
        </div>
        {/* Tabs */}
        <div className="flex justify-start overflow-x-auto whitespace-nowrap border-b border-[#939598] gap-4 mt-6 px-2 max-w-[95%] mx-auto">
          {Object.keys(regionFilters).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-1 bg-black text-[#999999] text-sm border border-transparent border-b-0 rounded-t-md transition-all ${
                activeRegion === region
                  ? "bg-white text-black border-white"
                  : "hover:transparent hover:text-white"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
        {/* Filtros */}
        <div className="flex overflow-x-auto whitespace-nowrap justify-start items-center gap-4 mt-4 px-10">
          {regionFilters[activeRegion]?.map((filtro) => (
            <select
              key={filtro}
              className="bg-transparent border border-[#999999] text-[#999999] w-[180px] min-w-[120px] pl-2 pr-2 py-2 text-sm focus:outline-none focus:border-white rounded-md transition-all text-left"
            >
              <option>{filtro}</option>
            </select>
          ))}
        </div>
      </section>

      {/* Sección de vinos con scroll */}
      <section className="flex-1 overflow-y-auto bg-black px-10 md:px-10 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
          {wines.map((wine, index) => (
            <WineCard
              key={index}
              title={wine.title}
              year={wine.year}
              bodega={wine.bodega}
              region={wine.region}
              cepa={wine.cepa}
              imageSrc={wine.imageSrc}
              classification={wine.classification}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
