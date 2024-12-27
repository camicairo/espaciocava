import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Espacio Cava",
    short_name: "EspacioCava",
    description: "Espacio Cava",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#a62a57",
    icons: [
      {
        src: "/icon512_maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
