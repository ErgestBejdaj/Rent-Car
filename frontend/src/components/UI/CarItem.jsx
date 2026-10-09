import React from "react";
import { Link } from "react-router-dom";
import { RiSettings3Line, RiGasStationLine, RiCalendarLine } from "../../lib/icons";
import { SITE, engineLabel } from "../../lib/site";
import { useLang } from "../../lib/i18n";
import "../../styles/car.css";

/**
 * Karta e makinës.
 * trip (opsionale) — nëse ka data të zgjedhura, shfaq çmimin total.
 * query (opsionale) — ruhen datat kur klikon te detajet.
 */
const CarItem = ({ item, days, query = "" }) => {
  const { slug, imgUrl, carName, category, year, automatic, price } = item;
  const href = `/cars/${slug}${query ? `?${query}` : ""}`;
  const { t } = useLang();
  const engine = engineLabel(item, t);

  return (
    <article className="car-card">
      <Link to={href} className="car-card__media" tabIndex={-1} aria-hidden="true">
        <img src={imgUrl} alt="" loading="lazy" style={item.imgPosition ? { objectPosition: item.imgPosition } : undefined} />
        <span className="car-card__tag">{t(`cat.${category}`)}</span>
      </Link>

      <div className="car-card__body">
        <h3 className="car-card__title">
          <Link to={href}>{carName}</Link>
        </h3>
        <p className="car-card__similar">{t("car.similar", { cat: category })}</p>

        <ul className="car-card__specs">
          <li><RiSettings3Line /> {t(`val.${automatic}`)}</li>
          {engine && <li><RiGasStationLine /> {engine}</li>}
          {year && <li><RiCalendarLine /> {year}</li>}
        </ul>

        <div className="car-card__foot">
          <div className="car-card__price">
            <strong>{SITE.currency}{price}</strong>
            <span>{t("perDay")}</span>
            {days > 1 && (
              <small>
                {t("car.totalFor", { total: `${SITE.currency}${price * days}`, days })}
              </small>
            )}
          </div>
          <Link to={href} className="btn btn--dark">
            {t("car.select")}
          </Link>
        </div>
      </div>
    </article>
  );
};

// Kartë bosh që shfaqet sa ngarkohen makinat
export const CarSkeleton = () => (
  <div className="car-card car-card--skeleton" aria-hidden="true">
    <div className="car-card__media" />
    <div className="car-card__body">
      <span className="sk sk--title" />
      <span className="sk sk--line" />
      <span className="sk sk--line sk--short" />
    </div>
  </div>
);

export default CarItem;
