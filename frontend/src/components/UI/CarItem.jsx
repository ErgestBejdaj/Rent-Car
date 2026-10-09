import React from "react";
import { Link } from "react-router-dom";
import { RiSettings3Line, RiGasStationLine, RiCalendarLine } from "../../lib/icons";
import { SITE, categoryLabel, engineLabel } from "../../lib/site";
import "../../styles/car.css";

/**
 * Karta e makinës.
 * trip (opsionale) — nëse ka data të zgjedhura, shfaq çmimin total.
 * query (opsionale) — ruhen datat kur klikon te detajet.
 */
const CarItem = ({ item, days, query = "" }) => {
  const { slug, imgUrl, carName, category, year, automatic, price } = item;
  const href = `/cars/${slug}${query ? `?${query}` : ""}`;

  return (
    <article className="car-card">
      <Link to={href} className="car-card__media" tabIndex={-1} aria-hidden="true">
        <img src={imgUrl} alt="" loading="lazy" style={item.imgPosition ? { objectPosition: item.imgPosition } : undefined} />
        <span className="car-card__tag">{category}</span>
      </Link>

      <div className="car-card__body">
        <h3 className="car-card__title">
          <Link to={href}>{carName}</Link>
        </h3>
        <p className="car-card__similar">or similar {categoryLabel(category)}</p>

        <ul className="car-card__specs">
          <li><RiSettings3Line /> {automatic}</li>
          {engineLabel(item) && <li><RiGasStationLine /> {engineLabel(item)}</li>}
          {year && <li><RiCalendarLine /> {year}</li>}
        </ul>

        <div className="car-card__foot">
          <div className="car-card__price">
            <strong>{SITE.currency}{price}</strong>
            <span>/ day</span>
            {days > 1 && (
              <small>
                {SITE.currency}{price * days} total for {days} days
              </small>
            )}
          </div>
          <Link to={href} className="btn btn--dark">
            Select
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CarItem;
