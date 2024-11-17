"use client";

import { useSideBar } from "@/context/ToggleSideBar";
import SideBarCard from "@/features/sidebar/SideBarCard";
import SideBarHeader from "@/features/sidebar/SideBarHeader";
import SideBarLinks from "@/features/sidebar/SideBarLinks";

function SideBar() {
  const { isOpen } = useSideBar();

  return (
    <div
      className={`fixed md:relative top-0 left-0 h-full w-[250px] bg-white text-grey p-4 border-r transform transition-transform duration-300 z-40  row-span-2 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <SideBarHeader />
      <SideBarLinks />
      <SideBarCard />
    </div>
  );
}

export default SideBar;
