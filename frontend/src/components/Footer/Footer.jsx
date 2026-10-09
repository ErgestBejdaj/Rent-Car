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
import "../../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Auto Rent Pojana" className="footer__logo" />
          <p>
            Car rental in Tirana and at Tirana International Airport. Modern
            fleet, clear prices and support around the clock.
          </p>
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
          <h4>Rent</h4>
          <ul>
            <li><Link to="/cars">All cars</Link></li>
            <li><Link to="/cars?category=SUV">SUVs</Link></li>
            <li><Link to="/cars?category=Sedan">Sedans</Link></li>
            <li><Link to="/cars?category=Hatchback">Hatchbacks</Link></li>
          </ul>
        </div>

        <div>
          <h4>Pick-up points</h4>
          <ul>
            {LOCATIONS.map((l) => (
              <li key={l.id}>{l.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
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
          <Link to="/about">About</Link>
          <Link to="/blogs">Travel tips</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span>Developed by Bejdex Solution</span>
      </div>
    </footer>
  );
};

export default Footer;
