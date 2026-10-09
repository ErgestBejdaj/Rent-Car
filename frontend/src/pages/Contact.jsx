import React, { useState } from "react";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPin2Line,
  RiWhatsappLine,
  RiInstagramLine,
  RiTiktokLine,
  RiFacebookLine,
} from "../lib/icons";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Commonsection";
import { SITE, whatsappLink } from "../lib/site";
import { useLang } from "../lib/i18n";
import "../styles/pages.css";

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Hap aplikacionin e email-it me mesazhin e plotësuar
  const submit = (e) => {
    e.preventDefault();
    const subject = t("contact.subject", { name: form.name });
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Helmet title={t("contact.crumb")}>
      <CommonSection
        title={t("contact.title")}
        crumb={t("contact.crumb")}
        text={t("contact.text")}
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <a href={whatsappLink(t("contact.waMsg"))} target="_blank" rel="noopener noreferrer" className="contact__card contact__card--wa">
              <RiWhatsappLine />
              <div>
                <strong>WhatsApp</strong>
                <span>{t("contact.waText")}</span>
              </div>
            </a>
            <a href={SITE.phoneHref} className="contact__card">
              <RiPhoneLine />
              <div>
                <strong>{SITE.phoneDisplay}</strong>
                <span>{t("contact.phoneText")}</span>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="contact__card">
              <RiMailLine />
              <div>
                <strong>{SITE.email}</strong>
                <span>{t("contact.email")}</span>
              </div>
            </a>
            <div className="contact__card">
              <RiMapPin2Line />
              <div>
                <strong>{SITE.address}</strong>
                <span>{t("contact.officeText")}</span>
              </div>
            </div>

            <div className="contact__social">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><RiInstagramLine /></a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><RiTiktokLine /></a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><RiFacebookLine /></a>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <h2>{t("contact.formTitle")}</h2>
            <div className="field">
              <label htmlFor="c-name">{t("contact.name")}</label>
              <input id="c-name" name="name" className="input" required value={form.name} onChange={change} />
            </div>
            <div className="field">
              <label htmlFor="c-email">{t("contact.email")}</label>
              <input id="c-email" name="email" type="email" className="input" required value={form.email} onChange={change} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">{t("contact.message")}</label>
              <textarea id="c-msg" name="message" className="input" required value={form.message} onChange={change} placeholder={t("contact.placeholder")} />
            </div>
            <button type="submit" className="btn btn--primary">{t("contact.send")}</button>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
