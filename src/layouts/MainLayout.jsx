import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";

export default function MainLayout() {
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
