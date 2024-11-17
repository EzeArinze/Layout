"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import SideBar from "@/components/SideBar";
import Overlay from "@/components/Overlay";

function LandingPage() {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[250px_1fr] grid-rows-[auto_1fr] h-screen">
      {/* Sidebar */}
      <SideBar />
      {/* Overlay */}
      <Overlay />

      <div className="row-span-1 md:col-span-1">
        <Header />
      </div>

      <main className="bg-white overflow-scroll">
        <Main />
      </main>
    </div>
  );
}

export default LandingPage;
