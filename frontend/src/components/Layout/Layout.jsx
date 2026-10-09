import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiWhatsappLine } from "../../lib/icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { whatsappLink } from "../../lib/site";

// Kthen faqen lart sa herë ndryshon rruga
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />

      <a
        href={whatsappLink("Hello! I'd like information about renting a car.")}
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <RiWhatsappLine />
      </a>
    </>
  );
};

export default Layout;
