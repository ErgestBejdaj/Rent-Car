import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import * as Ri from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem, { CarSkeleton } from "../components/UI/CarItem";
import { CATEGORIES } from "../assets/data/carData";
import { useCars } from "../lib/cars";
import serviceData from "../assets/data/serviceData";
import { SITE, LOCATIONS, whatsappLink } from "../lib/site";
import { useLang } from "../lib/i18n";
import heroImg from "../assets/all-images/slider-img/hero-q8.jpg";
import ctaImg from "../assets/all-images/slider-img/slider-2.jpg";
import "../styles/home.css";

const FACTS = [
  { icon: Ri.RiRoadMapLine, key: "km" },
  { icon: Ri.RiPlaneLine, key: "meet" },
  { icon: Ri.RiWhatsappLine, key: "wa" },
  { icon: Ri.RiCustomerService2Line, key: "support", text: SITE.phoneDisplay },
];

const REVIEWS = [
  { name: "Mark T.", key: "review.1" },
  { name: "Sophia M.", key: "review.2" },
  { name: "Dritan K.", key: "review.3" },
  { name: "Emily R.", key: "review.4" },
];

const initials = (name) => name.split(" ").map((p) => p[0]).join("");

const Home = () => {
  const { t, tr } = useLang();
  const { cars: carData, loading } = useCars();
  const [category, setCategory] = useState("All");

  const cars = useMemo(
    () => (category === "All" ? carData : carData.filter((c) => c.category === category)).slice(0, 6),
    [category, carData]
  );

  const minPrice = carData.length ? Math.min(...carData.map((c) => c.price)) : 35;
  const countInCategory =
    category === "All" ? carData.length : carData.filter((c) => c.category === category).length;

  return (
    <Helmet>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img src={heroImg} alt={t("home.heroAlt")} className="hero__img" />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">
              <Ri.RiMapPin2Fill /> {t("home.kicker")}
            </p>
            <h1>{t("home.title")}</h1>
            <p className="hero__sub">{t("home.sub", { price: `${SITE.currency}${minPrice}` })}</p>
          </div>
        </div>
        <div className="container hero__booking">
          <BookingWidget variant="hero" />
        </div>
      </section>

      {/* ================= FACTS ================= */}
      <section className="facts">
        <div className="container facts__grid">
          {FACTS.map(({ icon: Icon, key, text }) => (
            <div className="fact" key={key}>
              <Icon className="fact__icon" />
              <div>
                <strong>{t(`fact.${key}.title`)}</strong>
                <span>{text || t(`fact.${key}.text`)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FLEET ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{t("home.fleetTitle")}</h2>
              <p className="lead">{t("home.fleetLead")}</p>
            </div>
            <div className="chips" role="group" aria-label={t("filter.aria")}>
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  className={`chip ${category === c ? "is-active" : ""}`}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {t(`cat.${c}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="car-grid">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <CarSkeleton key={i} />)
              : cars.map((item) => <CarItem item={item} key={item.id} />)}
          </div>

          <div className="fleet__more">
            <Link
              to={category === "All" ? "/cars" : `/cars?category=${encodeURIComponent(category)}`}
              className="btn btn--outline"
            >
              {t("home.seeAll", { n: countInCategory })}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section section--ink steps">
        <div className="container">
          <h2 className="steps__title">{t("steps.title")}</h2>
          <ol className="steps__list">
            {[1, 2, 3].map((n) => (
              <li key={n} className="step">
                <span className="step__num">{n}</span>
                <h3>{t(`steps.${n}.title`)}</h3>
                <p>{t(`steps.${n}.text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= LOCATIONS + SERVICES ================= */}
      <section className="section">
        <div className="container split">
          <div>
            <h2>{t("loc.title")}</h2>
            <p className="lead">{t("loc.lead")}</p>

            <div className="locations">
              {LOCATIONS.map((l) => (
                <div className="location" key={l.id}>
                  {l.id === "airport" ? <Ri.RiPlaneLine /> : <Ri.RiBuilding2Line />}
                  <div>
                    <h3>{tr(l.name)}</h3>
                    <p>{tr(l.detail)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="services">
            {serviceData.map((s) => {
              const Icon = Ri[s.icon] || Ri.RiCheckLine;
              return (
                <li key={s.id} className="service">
                  <Icon className="service__icon" />
                  <div>
                    <h3>{tr(s.title)}</h3>
                    <p>{tr(s.desc)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="section section--mist">
        <div className="container">
          <div className="section-head">
            <h2>{t("reviews.title")}</h2>
          </div>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <figure className="review" key={r.name}>
                <div className="review__stars" aria-label={t("reviews.stars")}>
                  {Array.from({ length: 5 }).map((_, i) => <Ri.RiStarFill key={i} />)}
                </div>
                <blockquote>{t(r.key)}</blockquote>
                <figcaption>
                  <span className="review__avatar">{initials(r.name)}</span>
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section">
        <div className="container faq">
          <div>
            <h2>{t("faq.title")}</h2>
            <p className="lead">
              {t("faq.lead")}{" "}
              <a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {t("faq.message")}
              </a>
              .
            </p>
          </div>
          <div className="faq__list">
            {[1, 2, 3, 4, 5].map((n) => (
              <details key={n} className="faq__item">
                <summary>
                  {t(`faq.${n}.q`)}
                  <Ri.RiAddLine className="faq__icon" />
                </summary>
                <p>{t(`faq.${n}.a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <img src={ctaImg} alt="" className="cta__img" />
        <div className="cta__shade" />
        <div className="container cta__inner">
          <h2>
            {t("cta.title1")}
            <br />
            {t("cta.title2")}
          </h2>
          <p>{t("cta.text")}</p>
          <div className="cta__actions">
            <a
              href={whatsappLink(t("cta.waMsg"))}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ri.RiWhatsappLine /> {t("cta.wa")}
            </a>
            <a href={SITE.phoneHref} className="btn btn--outline cta__call">
              <Ri.RiPhoneLine /> {t("call", { phone: SITE.phoneDisplay })}
            </a>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
