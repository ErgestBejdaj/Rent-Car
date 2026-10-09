import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../lib/i18n";

// Koka e errët e faqeve të brendshme
const CommonSection = ({ title, text, crumb }) => {
  const { t } = useLang();
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/home">{t("crumb.home")}</Link> / <span>{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
};

export default CommonSection;
