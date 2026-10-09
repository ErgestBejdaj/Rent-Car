import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  RiSettings3Line,
  RiGasStationLine,
  RiCalendarLine,
  RiRoadsterLine,
  RiMapPinLine,
  RiTempHotLine,
  RiCheckLine,
  RiWhatsappLine,
  RiPhoneLine,
} from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import {
  SITE,
  tripFromParams,
  rentalDays,
  whatsappLink,
  bookingMessage,
  categoryLabel,
  engineLabel,
  yearLabel,
} from "../lib/site";
import NotFound from "./NotFound";
import "../styles/car.css";
import "../styles/pages.css";

const INCLUDED = [
  `${SITE.kmPerDay} km per day (then ${SITE.currency}${SITE.extraKmPrice}/km)`,
  "Pick-up at Rinas Airport or Tirana centre",
  "24/7 support by phone",
  "Confirmation on WhatsApp, no account needed",
];

const CarDetails = () => {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const car = carData.find((c) => c.slug === slug);
  const [trip, setTrip] = useState(() => tripFromParams(params));

  if (!car) return <NotFound />;

  const days = rentalDays(trip);
  const total = days * car.price;

  const specs = [
    { icon: RiRoadsterLine, label: "Type", value: car.category },
    { icon: RiSettings3Line, label: "Gearbox", value: car.automatic },
    { icon: RiGasStationLine, label: "Engine", value: engineLabel(car) },
    { icon: RiCalendarLine, label: "Year", value: car.year },
    { icon: RiMapPinLine, label: "Navigation", value: car.gps },
    { icon: RiTempHotLine, label: "Comfort", value: car.seatType },
  ].filter((s) => s.value);

  const similar = carData
    .filter((c) => c.id !== car.id && c.category === car.category)
    .slice(0, 3);

  return (
    <Helmet title={`${car.carName} ${car.year}`.trim()}>
      <section className="detail">
        <div className="container">
          <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
            <Link to="/home">Home</Link> / <Link to="/cars">Cars</Link> / <span>{car.carName}</span>
          </nav>

          <div className="detail__grid">
            <div className="detail__main">
              <div className="detail__media">
                <img src={car.imgUrl} alt={`${car.carName} ${car.year}`.trim()} style={car.imgPosition ? { objectPosition: car.imgPosition } : undefined} />
              </div>

              <div className="detail__head">
                <span className="detail__cat">{car.category}</span>
                <h1>{car.carName}</h1>
                <p className="muted">{car.year ? `${yearLabel(car.year)}, or similar` : "Or similar"} {categoryLabel(car.category)}</p>
              </div>

              <dl className="specs">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div className="spec" key={label}>
                    <Icon />
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="detail__text">
                <h2>About this car</h2>
                <p>{car.description}</p>

                <h2>Included in every rental</h2>
                <ul className="checklist">
                  {INCLUDED.map((i) => (
                    <li key={i}><RiCheckLine /> {i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail__aside">
              <div className="quote">
                <div className="quote__price">
                  <strong>{SITE.currency}{car.price}</strong>
                  <span>/ day</span>
                </div>

                <BookingWidget variant="side" initial={trip} onChange={setTrip} />

                <dl className="quote__sum">
                  <div>
                    <dt>{SITE.currency}{car.price} × {days} day{days > 1 ? "s" : ""}</dt>
                    <dd>{SITE.currency}{total}</dd>
                  </div>
                  <div>
                    <dt>Kilometres included</dt>
                    <dd>{(SITE.kmPerDay * days).toLocaleString("en-GB")} km</dd>
                  </div>
                  <div className="quote__total">
                    <dt>Total</dt>
                    <dd>{SITE.currency}{total}</dd>
                  </div>
                </dl>

                <a
                  href={whatsappLink(bookingMessage(car, trip))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--block"
                >
                  <RiWhatsappLine /> Book on WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn btn--outline btn--block quote__call">
                  <RiPhoneLine /> Call {SITE.phoneDisplay}
                </a>
                <p className="quote__note">
                  Your dates and price are added to the message. We reply to confirm availability.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <div className="section-head">
              <h2>Similar cars</h2>
              <Link to={`/cars?category=${encodeURIComponent(car.category)}`} className="text-link">
                All {car.category === "SUV" ? "SUVs" : `${car.category.toLowerCase()}s`}
              </Link>
            </div>
            <div className="car-grid">
              {similar.map((c) => (
                <CarItem key={c.id} item={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Helmet>
  );
};

export default CarDetails;
