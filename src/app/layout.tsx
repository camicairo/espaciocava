import type { Metadata } from "next";
import "./globals.css";
import HeaderAndSidebarClient from "@/components/HeaderAndSidebarClient";

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
    <html lang="es">
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
