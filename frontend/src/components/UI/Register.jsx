import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Helmet from "../Helmet/Helmet";
import "../../styles/pages.css";

const RegisterForm = () => {
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
      setStatus({ type: "error", text: "The two passwords don't match. Type them again." });
      return;
    }
    try {
      await axios.post("/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({ type: "ok", text: "Account created. You can now log in." });
    } catch (error) {
      setStatus({
        type: "error",
        text: "We couldn't create the account. Check your details and try again.",
      });
    }
  };

  return (
    <Helmet title="Create account">
      <section className="auth">
        <form className="auth__card" onSubmit={handleSubmit}>
          <h1>Create account</h1>

          <div className="auth__row">
            <div className="field">
              <label htmlFor="r-first">First name</label>
              <input id="r-first" name="firstName" className="input" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="r-last">Last name</label>
              <input id="r-last" name="lastName" className="input" required value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="r-email">Email</label>
            <input id="r-email" name="email" type="email" className="input" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="auth__row">
            <div className="field">
              <label htmlFor="r-pass">Password</label>
              <input id="r-pass" name="password" type="password" className="input" autoComplete="new-password" required value={formData.password} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="r-pass2">Confirm password</label>
              <input id="r-pass2" name="confirmPassword" type="password" className="input" autoComplete="new-password" required value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          {status && (
            <p className={`auth__status auth__status--${status.type}`} role="status">
              {status.text}
            </p>
          )}

          <button type="submit" className="btn btn--primary btn--block">Create account</button>
          <p className="auth__alt">
            Already have an account? <Link to="/login" className="text-link">Log in</Link>
          </p>
        </form>
      </section>
    </Helmet>
  );
};

export default RegisterForm;
