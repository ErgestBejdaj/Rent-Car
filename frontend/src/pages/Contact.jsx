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
import "../styles/pages.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Hap aplikacionin e email-it me mesazhin e plotësuar
  const submit = (e) => {
    e.preventDefault();
    const subject = `Website enquiry from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Helmet title="Contact">
      <CommonSection
        title="Contact us"
        crumb="Contact"
        text="The fastest way to reach us is WhatsApp. We answer around the clock."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <a href={whatsappLink("Hello! I have a question about renting a car.")} target="_blank" rel="noopener noreferrer" className="contact__card contact__card--wa">
              <RiWhatsappLine />
              <div>
                <strong>WhatsApp</strong>
                <span>Usually the quickest reply</span>
              </div>
            </a>
            <a href={SITE.phoneHref} className="contact__card">
              <RiPhoneLine />
              <div>
                <strong>{SITE.phoneDisplay}</strong>
                <span>Phone support 24/7</span>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="contact__card">
              <RiMailLine />
              <div>
                <strong>{SITE.email}</strong>
                <span>Email</span>
              </div>
            </a>
            <div className="contact__card">
              <RiMapPin2Line />
              <div>
                <strong>{SITE.address}</strong>
                <span>Office and city pick-up point</span>
              </div>
            </div>

            <div className="contact__social">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><RiInstagramLine /></a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><RiTiktokLine /></a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><RiFacebookLine /></a>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <h2>Send us a message</h2>
            <div className="field">
              <label htmlFor="c-name">Your name</label>
              <input id="c-name" name="name" className="input" required value={form.name} onChange={change} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" className="input" required value={form.email} onChange={change} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="message" className="input" required value={form.message} onChange={change} placeholder="Dates, car, pick-up point…" />
            </div>
            <button type="submit" className="btn btn--primary">Send email</button>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
