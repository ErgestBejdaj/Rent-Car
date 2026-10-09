import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { useLang } from "../lib/i18n";
import "../styles/pages.css";

const NotFound = () => {
  const { t } = useLang();
  return (
    <Helmet title={t("nf.pageTitle")}>
      <section className="section notfound">
        <div className="container">
          <h1>{t("nf.title")}</h1>
          <p className="lead">{t("nf.text")}</p>
          <div className="notfound__actions">
            <Link to="/cars" className="btn btn--primary">{t("nf.cars")}</Link>
            <Link to="/home" className="btn btn--outline">{t("nf.home")}</Link>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default NotFound;
