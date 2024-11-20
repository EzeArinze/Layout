"use client";

import { BellDot, Equal } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import DropDownMenu from "./DropDownMenu";
import { useSideBar } from "@/context/ToggleSideBar";

function Header() {
  const { handleToggle } = useSideBar();

  return (
    <header className="bg-white p-4 z-50">
      <div className="w-full flex justify-between">
        <span className="flex gap-2">
          {/* Toggle button for small screens */}
          <Equal className="cursor-pointer md:hidden" onClick={handleToggle} />

          <BellDot />
        </span>
        <span className="text-right flex gap-2">
          <Button variant="outline">Login</Button>
          <DropDownMenu />
        </span>
      </div>
    </header>
  );
}

export default Header;
