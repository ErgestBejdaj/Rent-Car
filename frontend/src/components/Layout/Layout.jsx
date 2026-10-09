import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiWhatsappLine } from "../../lib/icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { whatsappLink } from "../../lib/site";
import { useLang } from "../../lib/i18n";

// Kthen faqen lart sa herë ndryshon rruga
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const { t } = useLang();
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />

      <a
        href={whatsappLink(t("wa.default"))}
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("wa.aria")}
      >
        <RiWhatsappLine />
      </a>
    </>
  );
};

export default Layout;
