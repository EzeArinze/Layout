"use client";

import React from "react";
import { useSideBar } from "@/context/ToggleSideBar";

function Overlay() {
  const { isOpen, handleToggle } = useSideBar();

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-10 z-30 md:hidden"
        onClick={handleToggle}
      ></div>
    )
  );
}

export default Overlay;
