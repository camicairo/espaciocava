"use client";
// OJO: si este componente no necesita Hooks ni estado interno,
// puedes omitir 'use client'. Sin embargo, si maneja toggles
// o algo interactivo adicional, déjalo como componente cliente.

import React from "react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-4 w-full flex justify-between items-center px-8 py-2 z-[10000] text-white bg-transparent">
      {/* Botón menú */}
      <div
        onClick={onMenuClick}
        className="w-6 h-6 cursor-pointer transition-all"
      >
        <Image
          src="/menu.svg"
          alt="Abrir menú"
          width={24}
          height={24}
          className="invert"
        />
      </div>

      {/* Search Container */}
      <div className="relative flex items-center">
        <div className="w-6 h-6 cursor-pointer mr-2">
          <Image
            src="/search.svg"
            alt="Buscar"
            width={24}
            height={24}
            className="invert"
          />
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-0 md:w-36 h-6 bg-transparent border-b border-gray-300 text-white 
                     outline-none transition-all duration-300 
                     focus:border-white placeholder:text-sm placeholder:text-gray-400"
        />
      </div>
    </header>
  );
};

export default Header;
