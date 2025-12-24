import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../src/components/shared/Footer";
import ScrollToTop from "../src/components/shared/ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
