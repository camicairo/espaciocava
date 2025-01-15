"use client";

import { FC } from "react";
import Image from "next/image";

interface WineCardProps {
  title: string;
  year?: number;
  bodega?: string;
  region?: string;
  cepa?: string;
  imageSrc?: string;
  classification: "tinto" | "blanco";
}

const WineCard: FC<WineCardProps> = ({
  title,
  year,
  bodega,
  region,
  cepa,
  imageSrc = "/wine-image.jpg",
  classification,
}) => {
  const borderColor = classification === "tinto" ? "#941342" : "#F6EACE";

  return (
    <div className="flex w-full bg-black/80 rounded-md overflow-hidden shadow-md hover:-translate-y-1 transition-transform border border-[#3C3C3D] relative">
      {/* Imagen */}
      <div className="relative w-[100px] h-[150px]">
        <Image
          src={imageSrc}
          alt={`${title} ${year ? `(${year})` : ""}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4 w-2/3">
        {/* Contenedor flex para nombre y año */}
        <div className="flex justify-start gap-3 items-baseline mb-2">
          {/* Nombre del vino */}
          <h3 className="font-[Spectral] text-[22px] font-semibold">{title}</h3>

          {/* Año del vino */}
          {year && (
            <p className="font-[Montserrat] text-[14px] text-white/75">
              {year}
            </p>
          )}
        </div>

        {/* Bodega */}
        {bodega && (
          <p className="text-[16px] text-white/80 font-medium mb-1">{bodega}</p>
        )}

        {(region || cepa) && (
          <p className="text-[14px] text-white/80 font-medium mb-1">
            {region}
            {region && cepa ? " | " : ""}
            {cepa}
          </p>
        )}
      </div>

      {/* Borde derecho dinámico */}
      <div
        style={{ backgroundColor: borderColor }}
        className="w-3 h-full absolute top-0 right-0 rounded-r-md"
      ></div>
    </div>
  );
};

export default WineCard;
