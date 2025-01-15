"use client";

import Hero from "@/components/Hero";

export default function Experiencias() {
  const experiences = [
    {
      title: "Degustaciones",
      image: "/degustaciones.jpeg",
      link: "/degustaciones",
    },
    {
      title: "Gastronómicas",
      image: "/gastronomicas1.jpeg",
      link: "/gastronomicas",
    },
    {
      title: "Cumpleaños",
      image: "/images/cumpleanos.jpg",
      link: "/cumpleanos",
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <Hero title="Experiencias" />

      {/* Título fijo con línea */}
      <div className="bg-black sticky top-[100px] z-10">
        <h2 className="text-white text-2xl font-[Spectral] px-6 pt-6">
          Experiencias
        </h2>
        <div className="border-b border-[#939598] mx-6 mt-2"></div>
      </div>

      {/* Lista de experiencias con scroll */}
      <section className="bg-black px-6 py-8 overflow-y-auto flex-1">
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <a
              key={index}
              href={experience.link}
              className="relative group overflow-hidden rounded-md shadow-lg"
            >
              {/* Imagen de la experiencia */}
              <div className="h-[200px] sm:h-[250px] md:h-[300px] w-full">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="object-cover object-bottom w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Rectángulo oscuro con blur y contenido */}
              <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 flex items-center justify-between">
                <p className="text-white font-[Spectral] text-lg font-medium">
                  {experience.title}
                </p>
                <div className="transition-transform duration-300">
                  <img
                    src="/arrow_forward.svg"
                    alt="Arrow Forward"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
