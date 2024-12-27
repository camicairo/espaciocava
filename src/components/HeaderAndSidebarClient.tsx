"use client";

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function HeaderAndSidebarClient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* 
        Pasamos la función onMenuClick al Header para que,
        cuando el usuario haga click en el ícono de menú,
        abra la sidebar. 
      */}
      <Header onMenuClick={handleOpenSidebar} />

      {/* 
        Pasamos isSidebarOpen y onClose a la Sidebar.
        Cuando el usuario hace click en overlay o en alguna opción,
        se cierra. 
      */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
