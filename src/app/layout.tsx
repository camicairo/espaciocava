import type { Metadata } from "next";
import "./globals.css";
import HeaderAndSidebarClient from "@/components/HeaderAndSidebarClient";
import { Montserrat, Spectral } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Configura los pesos que necesitas
  variable: "--font-montserrat", // Define una variable CSS
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Configura los pesos necesarios
  variable: "--font-spectral", // Define una variable CSS para Spectral
});

export const metadata: Metadata = {
  title: "Espacio Cava",
  description: "Espacio Cava",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon512_rounded.png",
  },
  themeColor: "#a62a57",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${spectral.variable}`}>
      <body className="bg-black text-white">
        {/* 
          Layout sigue siendo un Server Component. 
          Simplemente importamos un componente cliente que se ocupará
          de los hooks (estado, efecto, etc.).
        */}
        <HeaderAndSidebarClient />
        {children}
      </body>
    </html>
  );
}
