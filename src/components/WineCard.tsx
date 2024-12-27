"use client";

import { FC } from "react";
import Image from "next/image";

interface WineCardProps {
  /** Título o nombre del vino (ej. "Malbec Reserva") */
  title: string;
  /** Año del vino (opcional) */
  year?: number;
  /** Nombre de la bodega (opcional) */
  bodega?: string;
  /** Región del vino (opcional) */
  region?: string;
  /** Cepa del vino (opcional) */
  cepa?: string;
  /** Ruta de la imagen (opcional). Por defecto: '/wine-image.jpg' */
  imageSrc?: string;
}

const WineCard: FC<WineCardProps> = ({
  title,
  year,
  bodega,
  region,
  cepa,
  imageSrc = "/wine-image.jpg",
}) => {
  return (
    <div className="flex w-[500px] bg-black/80 text-white rounded-md overflow-hidden shadow-md hover:-translate-y-2 transition-transform border border-white/20">
      {/* Imagen */}
      <div className="relative w-1/3 h-full min-h-[200px]">
        <Image
          src={imageSrc}
          alt={`${title} ${year ? `(${year})` : ""}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4 w-2/3">
        <h3 className="text-lg font-semibold mb-2">
          {title} {year ? `(${year})` : ""}
        </h3>

        {bodega && <p className="text-sm mb-1">{bodega}</p>}

        {(region || cepa) && (
          <p className="text-sm">
            {region}
            {region && cepa ? " | " : ""}
            {cepa}
          </p>
        )}
      </div>
    </div>
  );
};

export default WineCard;
