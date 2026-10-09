import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import { useLang } from "../../lib/i18n";
import "../../styles/pages.css";

const LogInForm = () => {
  const { t } = useLang();
  return (
    <Helmet title={t("login.title")}>
      <section className="auth">
        <form className="auth__card" onSubmit={(e) => e.preventDefault()}>
          <h1>{t("login.title")}</h1>
          <div className="field">
            <label htmlFor="l-user">{t("login.user")}</label>
            <input id="l-user" type="text" className="input" autoComplete="username" required />
          </div>
          <div className="field">
            <label htmlFor="l-pass">{t("login.pass")}</label>
            <input id="l-pass" type="password" className="input" autoComplete="current-password" required />
          </div>
          <button type="submit" className="btn btn--primary btn--block">{t("login.title")}</button>
          <p className="auth__alt">
            {t("login.none")} <Link to="/register" className="text-link">{t("login.create")}</Link>
          </p>
        </form>
      </section>
    </Helmet>
  );
};

export default LogInForm;
