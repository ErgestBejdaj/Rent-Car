import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem, { CarSkeleton } from "../components/UI/CarItem";
import { CATEGORIES } from "../assets/data/carData";
import { useCars } from "../lib/cars";
import { yearNumber, tripFromParams, tripToQuery, rentalDays, locationName, formatDate } from "../lib/site";
import { useLang } from "../lib/i18n";
import "../styles/car.css";
import "../styles/pages.css";

const SORTS = {
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  "year-desc": (a, b) => yearNumber(b.year) - yearNumber(a.year),
};

const CarListing = () => {
  const [params, setParams] = useSearchParams();
  const { t, tr, locale } = useLang();
  const { cars: carData, loading } = useCars();
  const hasTrip = params.has("from");
  const trip = tripFromParams(params);
  const days = hasTrip ? rentalDays(trip) : 0;
  const tripQuery = hasTrip ? tripToQuery(trip) : "";

  const category = params.get("category") || "All";
  const sort = params.get("sort") || "price-asc";

  const setParam = (key, value, fallback) => {
    const next = new URLSearchParams(params);
    if (value === fallback) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const cars = useMemo(() => {
    const list = category === "All" ? carData : carData.filter((c) => c.category === category);
    return [...list].sort(SORTS[sort] || SORTS["price-asc"]);
  }, [category, sort, carData]);

  return (
    <Helmet title={t("list.title")}>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/home">{t("crumb.home")}</Link> / <span>{t("crumb.cars")}</span>
          </nav>
          <h1>{hasTrip ? t("list.titleTrip") : t("list.title")}</h1>
          {hasTrip && (
            <p>
              {tr(locationName(trip.pickup))}, {formatDate(trip.from, locale)} {trip.fromTime} {t("list.to")}{" "}
              {trip.dropoff !== trip.pickup ? `${tr(locationName(trip.dropoff))}, ` : ""}
              {formatDate(trip.to, locale)} {trip.toTime}
            </p>
          )}
        </div>
      </section>

      <div className="listing__booking">
        <div className="container">
          <BookingWidget
            key={params.toString()}
            variant="bar"
            initial={trip}
            submitLabel={hasTrip ? t("bw.update") : t("bw.showPrices")}
          />
        </div>
      </div>

      <section className="section listing">
        <div className="container">
          <div className="listing__toolbar">
            <div className="chips" role="group" aria-label={t("filter.aria")}>
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  className={`chip ${category === c ? "is-active" : ""}`}
                  onClick={() => setParam("category", c, "All")}
                  aria-pressed={category === c}
                >
                  {t(`cat.${c}`)}
                  <span>{c === "All" ? carData.length : carData.filter((x) => x.category === c).length}</span>
                </button>
              ))}
            </div>

            <label className="listing__sort">
              <span className="muted">{t("list.sort")}</span>
              <select
                className="input"
                value={sort}
                onChange={(e) => setParam("sort", e.target.value, "price-asc")}
              >
                {Object.keys(SORTS).map((k) => (
                  <option key={k} value={k}>{t(`sort.${k}`)}</option>
                ))}
              </select>
            </label>
          </div>

          <p className="listing__count muted">
            {t("list.count", { n: cars.length })}
            {days > 0 && t("list.pricesFor", { n: days })}
          </p>

          <div className="car-grid">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <CarSkeleton key={i} />)
              : cars.map((item) => (
                  <CarItem item={item} key={item.id} days={days} query={tripQuery} />
                ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CarListing;
