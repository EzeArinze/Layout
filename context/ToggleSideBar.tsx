"use client";
import React, { createContext, useContext, useState } from "react";

// Define the type for the context
interface SidebarContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

// Create the context with a default value
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
// const SidebarContext = createContext();

function ToggleSideBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSideBar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) throw new Error("used outside of it's scope ");

  return context;
};

export default ToggleSideBar;
