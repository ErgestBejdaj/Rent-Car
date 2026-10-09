import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import * as Ri from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem from "../components/UI/CarItem";
import carData, { CATEGORIES } from "../assets/data/carData";
import serviceData from "../assets/data/serviceData";
import { SITE, LOCATIONS, whatsappLink } from "../lib/site";
import heroImg from "../assets/all-images/slider-img/hero-q8.jpg";
import ctaImg from "../assets/all-images/slider-img/slider-2.jpg";
import "../styles/home.css";

const FACTS = [
  { icon: Ri.RiRoadMapLine, title: `${SITE.kmPerDay} km a day included`, text: `Then ${SITE.currency}${SITE.extraKmPrice} per extra km` },
  { icon: Ri.RiPlaneLine, title: "Meet & greet at Rinas", text: "We wait for you in arrivals" },
  { icon: Ri.RiWhatsappLine, title: "Confirm on WhatsApp", text: "Fast reply, no account needed" },
  { icon: Ri.RiCustomerService2Line, title: "Support 24/7", text: SITE.phoneDisplay },
];

const STEPS = [
  { title: "Pick your dates and car", text: "Choose where and when you need the car, then pick from the available fleet." },
  { title: "Confirm with us", text: "Send the booking on WhatsApp in one tap, or call us. We confirm availability right away." },
  { title: "Collect the keys", text: "Meet us at Rinas arrivals or in central Tirana. The car is clean and ready to drive." },
];

const REVIEWS = [
  { name: "Mark T.", text: "I rented a car for a weekend trip — the service was fast, friendly, and the car was in perfect condition. Highly recommended!" },
  { name: "Sophia M.", text: "Booking was easy and the staff was very helpful. I'll definitely use Auto Rent Pojana again for future travels." },
  { name: "Dritan K.", text: "Great value for money! The vehicle was clean and fuel-efficient. It made my trip stress-free from start to finish." },
  { name: "Emily R.", text: "I was impressed by their punctuality and professionalism. Top-notch service and a smooth rental process." },
];

const FAQ = [
  {
    q: "How many kilometres are included?",
    a: `Every rental day includes ${SITE.kmPerDay} km. Each extra kilometre costs ${SITE.currency}${SITE.extraKmPrice}.`,
  },
  {
    q: "Where can I pick up the car?",
    a: "At Tirana International Airport (Rinas), where we meet you in the arrivals hall, or at our office in central Tirana (Kompleksi Delijorgji).",
  },
  {
    q: "How do I book?",
    a: "Choose your dates and a car on this site and tap “Book on WhatsApp” — your dates and price are filled in for you. You can also call us on " + SITE.phoneDisplay + ".",
  },
  {
    q: "Can I return the car at a different location?",
    a: "Yes. Untick “Return to the same location” in the booking form and choose the airport or the city centre.",
  },
  {
    q: "What if I need help during the rental?",
    a: "Our support line is open 24/7. Call or message us on WhatsApp any time.",
  },
];

const initials = (name) => name.split(" ").map((p) => p[0]).join("");

const Home = () => {
  const [category, setCategory] = useState("All");

  const cars = useMemo(
    () => (category === "All" ? carData : carData.filter((c) => c.category === category)).slice(0, 6),
    [category]
  );

  const minPrice = Math.min(...carData.map((c) => c.price));

  return (
    <Helmet>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img src={heroImg} alt="Black Audi Q8 from the Auto Rent Pojana fleet" className="hero__img" />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">
              <Ri.RiMapPin2Fill /> Tirana and Rinas Airport
            </p>
            <h1>Car rental in Tirana, ready when you land.</h1>
            <p className="hero__sub">
              Premium cars from {SITE.currency}{minPrice} a day, with {SITE.kmPerDay} km a day included and 24/7 support.
            </p>
          </div>
        </div>
        <div className="container hero__booking">
          <BookingWidget variant="hero" />
        </div>
      </section>

      {/* ================= FACTS ================= */}
      <section className="facts">
        <div className="container facts__grid">
          {FACTS.map(({ icon: Icon, title, text }) => (
            <div className="fact" key={title}>
              <Icon className="fact__icon" />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
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
              <h2>Choose your car</h2>
              <p className="lead">Automatic, well-kept cars from Mercedes-Benz, Audi, Porsche, Range Rover, BMW and Volkswagen.</p>
            </div>
            <div className="chips" role="group" aria-label="Filter by type">
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  className={`chip ${category === c ? "is-active" : ""}`}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="car-grid">
            {cars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </div>

          <div className="fleet__more">
            <Link
              to={category === "All" ? "/cars" : `/cars?category=${encodeURIComponent(category)}`}
              className="btn btn--outline"
            >
              See all {category === "All" ? carData.length : carData.filter((c) => c.category === category).length} cars
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section section--ink steps">
        <div className="container">
          <h2 className="steps__title">Book in three steps</h2>
          <ol className="steps__list">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= LOCATIONS + SERVICES ================= */}
      <section className="section">
        <div className="container split">
          <div>
            <h2>Two places to pick up your car</h2>
            <p className="lead">Start your trip at the terminal or in the city. Return it at either one.</p>

            <div className="locations">
              {LOCATIONS.map((l) => (
                <div className="location" key={l.id}>
                  {l.id === "airport" ? <Ri.RiPlaneLine /> : <Ri.RiBuilding2Line />}
                  <div>
                    <h3>{l.name}</h3>
                    <p>{l.detail}</p>
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
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
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
            <h2>What our customers say</h2>
          </div>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <figure className="review" key={r.name}>
                <div className="review__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => <Ri.RiStarFill key={i} />)}
                </div>
                <blockquote>{r.text}</blockquote>
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
            <h2>Questions before you book</h2>
            <p className="lead">
              Can't find your answer? <a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Message us</a>.
            </p>
          </div>
          <div className="faq__list">
            {FAQ.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>
                  {f.q}
                  <Ri.RiAddLine className="faq__icon" />
                </summary>
                <p>{f.a}</p>
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
          <h2>Landing at Rinas?<br />Your car can be waiting.</h2>
          <p>Send us your flight number and dates, and we'll have the car ready in arrivals.</p>
          <div className="cta__actions">
            <a
              href={whatsappLink("Hello! I'm landing at Rinas and need a car. My flight number is: ")}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ri.RiWhatsappLine /> Message us on WhatsApp
            </a>
            <a href={SITE.phoneHref} className="btn btn--outline cta__call">
              <Ri.RiPhoneLine /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
