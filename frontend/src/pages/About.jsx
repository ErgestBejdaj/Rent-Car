import React from "react";
import { Link } from "react-router-dom";
import { RiCheckLine, RiPhoneLine } from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Commonsection";
import carData from "../assets/data/carData";
import { SITE } from "../lib/site";
import aboutImg from "../assets/all-images/slider-img/slider-3.jpg";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/pages.css";

const POINTS = [
  "Daily pick-up and return in Tirana and at Rinas Airport",
  "Modern, well-maintained cars, inspected regularly",
  `${SITE.kmPerDay} km a day included, only ${SITE.currency}${SITE.extraKmPrice}/km extra`,
  "Quick booking online, on WhatsApp or by phone",
];

const About = () => {
  const brands = [...new Set(carData.map((c) => c.brand))];

  return (
    <Helmet title="About us">
      <CommonSection
        title="About Auto Rent Pojana"
        crumb="About"
        text="A Tirana car rental company with a premium, automatic fleet and pick-up right at the airport."
      />

      <section className="section">
        <div className="container about">
          <div className="about__media">
            <img src={aboutImg} alt="White Audi A4 from the Auto Rent Pojana fleet" />
          </div>
          <div className="about__copy">
            <h2>Car rental in Albania, made simple</h2>
            <p className="lead">
              Your trusted choice for car rental in Tirana and at Tirana International Airport (Rinas).
              With a modern fleet and competitive prices, we make travel across Albania safe, comfortable
              and flexible.
            </p>
            <ul className="checklist">
              {POINTS.map((p) => (
                <li key={p}><RiCheckLine /> {p}</li>
              ))}
            </ul>

            <dl className="about__stats">
              <div><dt>Cars in the fleet</dt><dd>{carData.length}</dd></div>
              <div><dt>Brands</dt><dd>{brands.length}</dd></div>
              <div><dt>Support</dt><dd>24/7</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container about about--reverse">
          <div className="about__copy">
            <h2>Committed to safe, easy travel</h2>
            <p>
              Whether you're arriving at Tirana International Airport or need a car in the city, we
              make your journey smooth and stress-free.
            </p>
            <p>
              All our cars are well maintained and regularly inspected for comfort and safety. With easy
              booking, clear pricing and flexible pick-up, your satisfaction is our priority.
            </p>
            <div className="about__actions">
              <Link to="/cars" className="btn btn--primary">See our cars</Link>
              <a href={SITE.phoneHref} className="btn btn--outline">
                <RiPhoneLine /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="about__media">
            <img src={driveImg} alt="Driver's view from inside a rental car" />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
