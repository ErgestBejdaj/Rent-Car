import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Helmet from "../Helmet/Helmet";
import { useLang } from "../../lib/i18n";
import "../../styles/pages.css";

const RegisterForm = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatus({ type: "error", text: t("reg.mismatch") });
      return;
    }
    try {
      await axios.post("/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({ type: "ok", text: t("reg.ok") });
    } catch (error) {
      setStatus({
        type: "error",
        text: t("reg.fail"),
      });
    }
  };

  return (
    <Helmet title={t("reg.title")}>
      <section className="auth">
        <form className="auth__card" onSubmit={handleSubmit}>
          <h1>{t("reg.title")}</h1>

          <div className="auth__row">
            <div className="field">
              <label htmlFor="r-first">{t("reg.first")}</label>
              <input id="r-first" name="firstName" className="input" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="r-last">{t("reg.last")}</label>
              <input id="r-last" name="lastName" className="input" required value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="r-email">{t("contact.email")}</label>
            <input id="r-email" name="email" type="email" className="input" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="auth__row">
            <div className="field">
              <label htmlFor="r-pass">{t("login.pass")}</label>
              <input id="r-pass" name="password" type="password" className="input" autoComplete="new-password" required value={formData.password} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="r-pass2">{t("reg.pass2")}</label>
              <input id="r-pass2" name="confirmPassword" type="password" className="input" autoComplete="new-password" required value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          {status && (
            <p className={`auth__status auth__status--${status.type}`} role="status">
              {status.text}
            </p>
          )}

          <button type="submit" className="btn btn--primary btn--block">{t("reg.title")}</button>
          <p className="auth__alt">
            {t("reg.have")} <Link to="/login" className="text-link">{t("login.title")}</Link>
          </p>
        </form>
      </section>
    </Helmet>
  );
};

export default RegisterForm;
