import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiTiktokLine,
  RiFacebookLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPin2Line,
} from "../../lib/icons";
import logo from "../../assets/all-images/logo-pojana.png";
import { SITE, LOCATIONS } from "../../lib/site";
import { useLang } from "../../lib/i18n";
import "../../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t, tr } = useLang();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Auto Rent Pojana" className="footer__logo" />
          <p>{t("footer.text")}</p>
          <div className="footer__social">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <RiInstagramLine />
            </a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <RiTiktokLine />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <RiFacebookLine />
            </a>
          </div>
        </div>

        <div>
          <h4>{t("footer.rent")}</h4>
          <ul>
            <li><Link to="/cars">{t("footer.allCars")}</Link></li>
            <li><Link to="/cars?category=SUV">{t("footer.suvs")}</Link></li>
            <li><Link to="/cars?category=Sedan">{t("footer.sedans")}</Link></li>
            <li><Link to="/cars?category=Hatchback">{t("footer.hatchbacks")}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{t("footer.pickup")}</h4>
          <ul>
            {LOCATIONS.map((l) => (
              <li key={l.id}>{tr(l.name)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{t("footer.contact")}</h4>
          <ul className="footer__contact">
            <li>
              <RiPhoneLine /> <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <RiMailLine /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <RiMapPin2Line /> {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {SITE.name}</span>
        <nav>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/blogs">{t("nav.tips")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
        </nav>
        <span>{t("footer.dev")}</span>
      </div>
    </footer>
  );
};

export default Footer;
