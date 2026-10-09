import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiPhoneLine } from "../../lib/icons";
import logo from "../../assets/all-images/logo-pojana.png";
import { SITE } from "../../lib/site";
import { useLang, LangSwitch } from "../../lib/i18n";
import "../../styles/header.css";

const navLinks = [
  { path: "/cars", key: "nav.cars" },
  { path: "/about", key: "nav.about" },
  { path: "/blogs", key: "nav.tips" },
  { path: "/contact", key: "nav.contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLang();

  // mbyll menunë kur ndryshon faqja
  useEffect(() => setOpen(false), [pathname]);

  // blloko scroll-in kur menuja mobile është hapur
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header__bar">
        <Link to="/home" className="header__logo" aria-label={t("header.home")}>
          <img src={logo} alt="Auto Rent Pojana" />
        </Link>

        <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `header__link ${isActive ? "is-active" : ""}`}
            >
              {t(item.key)}
            </NavLink>
          ))}

          <div className="header__mobile-extra">
            <Link to="/cars" className="btn btn--primary btn--block">
              {t("header.book")}
            </Link>
            <a href={SITE.phoneHref} className="btn btn--outline btn--block">
              <RiPhoneLine /> {SITE.phoneDisplay}
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a href={SITE.phoneHref} className="header__phone">
            <RiPhoneLine />
            <span>
              <small>{t("header.support")}</small>
              {SITE.phoneDisplay}
            </span>
          </a>
          <LangSwitch />
          <Link to="/cars" className="btn btn--primary header__cta">
            {t("header.book")}
          </Link>
          <button
            className="header__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={open}
          >
            {open ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
