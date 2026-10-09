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
  RiUserLine,
} from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem from "../components/UI/CarItem";
import { useCars } from "../lib/cars";
import {
  SITE,
  tripFromParams,
  rentalDays,
  whatsappLink,
  bookingMessage,
  engineLabel,
  yearLabel,
} from "../lib/site";
import { useLang } from "../lib/i18n";
import NotFound from "./NotFound";
import "../styles/car.css";
import "../styles/pages.css";

const INCLUDED = ["inc.1", "inc.2", "inc.3", "inc.4"];

const CarDetails = () => {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const i18n = useLang();
  const { t, tr, locale } = i18n;
  const { cars: carData, loading } = useCars();
  const car = carData.find((c) => c.slug === slug);
  const [trip, setTrip] = useState(() => tripFromParams(params));

  if (!car && loading) {
    return (
      <section className="detail">
        <div className="container">
          <p className="muted detail__loading">{t("cars.loading")}</p>
        </div>
      </section>
    );
  }
  if (!car) return <NotFound />;

  const days = rentalDays(trip);
  const total = days * car.price;

  const specs = [
    { icon: RiRoadsterLine, label: t("spec.type"), value: t(`cat.${car.category}`) },
    { icon: RiSettings3Line, label: t("spec.gearbox"), value: t(`val.${car.automatic}`) },
    { icon: RiGasStationLine, label: t("spec.engine"), value: engineLabel(car, t) },
    { icon: RiCalendarLine, label: t("spec.year"), value: car.year },
    { icon: RiUserLine, label: t("spec.seats"), value: car.seats || "" },
    { icon: RiMapPinLine, label: t("spec.nav"), value: car.gps ? t(`val.${car.gps}`) : "" },
    { icon: RiTempHotLine, label: t("spec.comfort"), value: car.seatType ? t(`val.${car.seatType}`) : "" },
  ].filter((s) => s.value);

  const similar = carData
    .filter((c) => c.id !== car.id && c.category === car.category)
    .slice(0, 3);

  return (
    <Helmet title={`${car.carName} ${car.year}`.trim()}>
      <section className="detail">
        <div className="container">
          <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
            <Link to="/home">{t("crumb.home")}</Link> / <Link to="/cars">{t("crumb.cars")}</Link> / <span>{car.carName}</span>
          </nav>

          <div className="detail__grid">
            <div className="detail__main">
              <div className="detail__media">
                <img src={car.imgUrl} alt={`${car.carName} ${car.year}`.trim()} style={car.imgPosition ? { objectPosition: car.imgPosition } : undefined} />
              </div>

              <div className="detail__head">
                <span className="detail__cat">{t(`cat.${car.category}`)}</span>
                <h1>{car.carName}</h1>
                <p className="muted">
                  {car.year
                    ? t("detail.subYear", { year: yearLabel(car.year, t), cat: car.category })
                    : t("detail.subNoYear", { cat: car.category })}
                </p>
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
                <h2>{t("detail.about")}</h2>
                {tr(car.description) && <p>{tr(car.description)}</p>}

                {car.features && tr(car.features).length > 0 && (
                  <>
                    <h2>{t("detail.features")}</h2>
                    <ul className="checklist">
                      {tr(car.features).map((f) => (
                        <li key={f}><RiCheckLine /> {f}</li>
                      ))}
                    </ul>
                  </>
                )}

                <h2>{t("detail.included")}</h2>
                <ul className="checklist">
                  {INCLUDED.map((i) => (
                    <li key={i}><RiCheckLine /> {t(i)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail__aside">
              <div className="quote">
                <div className="quote__price">
                  <strong>{SITE.currency}{car.price}</strong>
                  <span>{t("perDay")}</span>
                </div>

                <BookingWidget variant="side" initial={trip} onChange={setTrip} />

                <dl className="quote__sum">
                  <div>
                    <dt>{t("quote.line", { price: `${SITE.currency}${car.price}`, n: days })}</dt>
                    <dd>{SITE.currency}{total}</dd>
                  </div>
                  <div>
                    <dt>{t("quote.km")}</dt>
                    <dd>{(SITE.kmPerDay * days).toLocaleString(locale)} km</dd>
                  </div>
                  <div className="quote__total">
                    <dt>{t("quote.total")}</dt>
                    <dd>{SITE.currency}{total}</dd>
                  </div>
                </dl>

                <a
                  href={whatsappLink(bookingMessage(car, trip, i18n))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--block"
                >
                  <RiWhatsappLine /> {t("quote.book")}
                </a>
                <a href={SITE.phoneHref} className="btn btn--outline btn--block quote__call">
                  <RiPhoneLine /> {t("call", { phone: SITE.phoneDisplay })}
                </a>
                <p className="quote__note">{t("quote.note")}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <div className="section-head">
              <h2>{t("detail.similar")}</h2>
              <Link to={`/cars?category=${encodeURIComponent(car.category)}`} className="text-link">
                {t(`catAll.${car.category}`)}
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
