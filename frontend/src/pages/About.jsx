import React from "react";
import { Link } from "react-router-dom";
import { RiCheckLine, RiPhoneLine } from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Commonsection";
import { useCars } from "../lib/cars";
import { SITE } from "../lib/site";
import aboutImg from "../assets/all-images/slider-img/slider-3.jpg";
import driveImg from "../assets/all-images/drive.jpg";
import { useLang } from "../lib/i18n";
import "../styles/pages.css";

const POINTS = ["about.p1", "about.p2", "about.p3", "about.p4"];

const About = () => {
  const { t } = useLang();
  const { cars: carData } = useCars();
  const brands = [...new Set(carData.map((c) => c.brand).filter(Boolean))];

  return (
    <Helmet title={t("about.pageTitle")}>
      <CommonSection
        title={t("about.title")}
        crumb={t("about.crumb")}
        text={t("about.text")}
      />

      <section className="section">
        <div className="container about">
          <div className="about__media">
            <img src={aboutImg} alt={t("about.imgAlt")} />
          </div>
          <div className="about__copy">
            <h2>{t("about.h2")}</h2>
            <p className="lead">{t("about.lead")}</p>
            <ul className="checklist">
              {POINTS.map((p) => (
                <li key={p}><RiCheckLine /> {t(p)}</li>
              ))}
            </ul>

            <dl className="about__stats">
              <div><dt>{t("about.statCars")}</dt><dd>{carData.length}</dd></div>
              <div><dt>{t("about.statBrands")}</dt><dd>{brands.length}</dd></div>
              <div><dt>{t("about.statSupport")}</dt><dd>24/7</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container about about--reverse">
          <div className="about__copy">
            <h2>{t("about.h2b")}</h2>
            <p>{t("about.t1")}</p>
            <p>{t("about.t2")}</p>
            <div className="about__actions">
              <Link to="/cars" className="btn btn--primary">{t("about.seeCars")}</Link>
              <a href={SITE.phoneHref} className="btn btn--outline">
                <RiPhoneLine /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="about__media">
            <img src={driveImg} alt={t("about.driveAlt")} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
