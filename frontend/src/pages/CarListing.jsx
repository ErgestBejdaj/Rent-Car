import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import BookingWidget from "../components/UI/BookingWidget";
import CarItem from "../components/UI/CarItem";
import carData, { CATEGORIES } from "../assets/data/carData";
import { yearNumber, tripFromParams, tripToQuery, rentalDays, locationName, formatDate } from "../lib/site";
import "../styles/car.css";
import "../styles/pages.css";

const SORTS = {
  "price-asc": { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: high to low", fn: (a, b) => b.price - a.price },
  "year-desc": { label: "Newest first", fn: (a, b) => yearNumber(b.year) - yearNumber(a.year) },
};

const CarListing = () => {
  const [params, setParams] = useSearchParams();
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
    return [...list].sort((SORTS[sort] || SORTS["price-asc"]).fn);
  }, [category, sort]);

  return (
    <Helmet title="Our cars">
      <section className="page-hero page-hero--tight">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/home">Home</Link> / <span>Cars</span>
          </nav>
          <h1>{hasTrip ? "Available cars for your trip" : "Our cars"}</h1>
          {hasTrip && (
            <p>
              {locationName(trip.pickup)}, {formatDate(trip.from)} {trip.fromTime} to{" "}
              {trip.dropoff !== trip.pickup ? `${locationName(trip.dropoff)}, ` : ""}
              {formatDate(trip.to)} {trip.toTime}
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
            submitLabel={hasTrip ? "Update" : "Show prices"}
          />
        </div>
      </div>

      <section className="section listing">
        <div className="container">
          <div className="listing__toolbar">
            <div className="chips" role="group" aria-label="Filter by type">
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  className={`chip ${category === c ? "is-active" : ""}`}
                  onClick={() => setParam("category", c, "All")}
                  aria-pressed={category === c}
                >
                  {c}
                  <span>{c === "All" ? carData.length : carData.filter((x) => x.category === c).length}</span>
                </button>
              ))}
            </div>

            <label className="listing__sort">
              <span className="muted">Sort</span>
              <select
                className="input"
                value={sort}
                onChange={(e) => setParam("sort", e.target.value, "price-asc")}
              >
                {Object.entries(SORTS).map(([k, s]) => (
                  <option key={k} value={k}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>

          <p className="listing__count muted">
            {cars.length} car{cars.length !== 1 ? "s" : ""}
            {days > 0 && `, prices for ${days} day${days > 1 ? "s" : ""}`}
          </p>

          <div className="car-grid">
            {cars.map((item) => (
              <CarItem item={item} key={item.id} days={days} query={tripQuery} />
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CarListing;
