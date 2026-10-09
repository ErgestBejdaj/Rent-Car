import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "../../lib/icons";
import {
  LOCATIONS,
  defaultTrip,
  toISODate,
  tripToQuery,
  rentalDays,
} from "../../lib/site";
import { useLang } from "../../lib/i18n";
import "../../styles/booking.css";

const TIMES = Array.from({ length: 48 }, (_, i) => {
  const h = String(Math.floor(i / 2)).padStart(2, "0");
  return `${h}:${i % 2 ? "30" : "00"}`;
});

/**
 * Formulari i rezervimit (si te Sixt / Europcar).
 * - variant="hero"  → në faqen kryesore
 * - variant="bar"   → mbi listën e makinave
 * Nëse jepet onChange, nuk navigon — vetëm njofton prindin (p.sh. te detajet e makinës).
 */
const BookingWidget = ({ initial, variant = "hero", onChange, submitLabel }) => {
  const navigate = useNavigate();
  const { t, tr } = useLang();
  const [trip, setTrip] = useState(initial || defaultTrip());
  const [sameReturn, setSameReturn] = useState(
    !initial || initial.pickup === initial.dropoff
  );

  const today = toISODate(new Date());

  const update = (patch) => {
    const next = { ...trip, ...patch };
    if (sameReturn && patch.pickup) next.dropoff = patch.pickup;
    // data e kthimit nuk mund të jetë para marrjes
    if (next.to < next.from) next.to = next.from;
    setTrip(next);
    onChange && onChange(next);
  };

  const toggleSame = (checked) => {
    setSameReturn(checked);
    if (checked) update({ dropoff: trip.pickup });
  };

  const submit = (e) => {
    e.preventDefault();
    navigate(`/cars?${tripToQuery(trip)}`);
  };

  const days = rentalDays(trip);

  return (
    <form className={`booking booking--${variant}`} onSubmit={submit}>
      <div className="booking__row">
        <div className="field booking__loc">
          <label htmlFor="bw-pickup">{t("bw.pickup")}</label>
          <select
            id="bw-pickup"
            className="input"
            value={trip.pickup}
            onChange={(e) => update({ pickup: e.target.value })}
          >
            {LOCATIONS.map((l) => (
              <option key={l.id} value={l.id}>{tr(l.name)}</option>
            ))}
          </select>
        </div>

        {!sameReturn && (
          <div className="field booking__loc">
            <label htmlFor="bw-dropoff">{t("bw.return")}</label>
            <select
              id="bw-dropoff"
              className="input"
              value={trip.dropoff}
              onChange={(e) => update({ dropoff: e.target.value })}
            >
              {LOCATIONS.map((l) => (
                <option key={l.id} value={l.id}>{tr(l.name)}</option>
              ))}
            </select>
          </div>
        )}

        <div className="field booking__when">
          <label htmlFor="bw-from">{t("bw.pickupDate")}</label>
          <div className="booking__pair">
            <input
              id="bw-from"
              type="date"
              className="input"
              min={today}
              value={trip.from}
              onChange={(e) => update({ from: e.target.value })}
              required
            />
            <select
              className="input"
              aria-label={t("bw.pickupTime")}
              value={trip.fromTime}
              onChange={(e) => update({ fromTime: e.target.value })}
            >
              {TIMES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="field booking__when">
          <label htmlFor="bw-to">{t("bw.returnDate")}</label>
          <div className="booking__pair">
            <input
              id="bw-to"
              type="date"
              className="input"
              min={trip.from}
              value={trip.to}
              onChange={(e) => update({ to: e.target.value })}
              required
            />
            <select
              className="input"
              aria-label={t("bw.returnTime")}
              value={trip.toTime}
              onChange={(e) => update({ toTime: e.target.value })}
            >
              {TIMES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {!onChange && (
          <button type="submit" className="btn btn--primary booking__submit">
            <RiSearchLine /> {submitLabel || t("bw.showCars")}
          </button>
        )}
      </div>

      <div className="booking__foot">
        <label className="booking__check">
          <input
            type="checkbox"
            checked={sameReturn}
            onChange={(e) => toggleSame(e.target.checked)}
          />
          {t("bw.same")}
        </label>
        <span className="booking__days">
          {t("bw.days", { n: days })}
        </span>
      </div>
    </form>
  );
};

export default BookingWidget;
