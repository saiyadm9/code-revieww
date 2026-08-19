"use client";

import MainContainer from "@/components/layouts/MainContainer";
import SideNav from "@/components/sideNav/SideNav";
import TopBar from "@/components/topBar/TopBar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [navOpen, setNavOpen] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="flex h-screen bg-background">
      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <SideNav
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />

      <div className="w-full overflow-y-scroll">
        <TopBar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />

        <MainContainer>
          {children}
        </MainContainer>
      </div>
    </main>
  );
}