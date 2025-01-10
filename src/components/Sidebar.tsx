"use client";

import React from "react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen w-[270px] bg-black/70 backdrop-blur-md border-r border-black/70 
                    shadow-xl transition-all duration-300 z-[1100]
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="list-none mt-20 px-8 space-y-8">
          <li>
            <Link href="/" onClick={onClose}>
              <span className="text-white/75 text-sm uppercase hover:text-white duration-200 tracking-wide hover:tracking-wider transition-all">
                Inicio
              </span>
            </Link>
          </li>
          <li>
            <Link href="nuestra-cava" onClick={onClose}>
              <span className="text-white/75 text-sm uppercase hover:text-white duration-200 tracking-wide hover:tracking-wider transition-all">
                Nuestra Cava
              </span>
            </Link>
          </li>
          <li>
            <Link href="experiencias" onClick={onClose}>
              <span className="text-white/75 text-sm uppercase hover:text-white duration-200 tracking-wide hover:tracking-wider transition-all">
                Experiencias
              </span>
            </Link>
          </li>
          <li>
            <Link href="sobre-nosotros" onClick={onClose}>
              <span className="text-white/75 text-sm uppercase hover:text-white duration-200 tracking-wide hover:tracking-wider transition-all">
                Sobre Nosotros
              </span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[999]"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
