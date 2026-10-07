import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-body">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}