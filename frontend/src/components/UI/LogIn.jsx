import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import "../../styles/pages.css";

const LogInForm = () => {
  return (
    <Helmet title="Log in">
      <section className="auth">
        <form className="auth__card" onSubmit={(e) => e.preventDefault()}>
          <h1>Log in</h1>
          <div className="field">
            <label htmlFor="l-user">Email or username</label>
            <input id="l-user" type="text" className="input" autoComplete="username" required />
          </div>
          <div className="field">
            <label htmlFor="l-pass">Password</label>
            <input id="l-pass" type="password" className="input" autoComplete="current-password" required />
          </div>
          <button type="submit" className="btn btn--primary btn--block">Log in</button>
          <p className="auth__alt">
            No account yet? <Link to="/register" className="text-link">Create one</Link>
          </p>
        </form>
      </section>
    </Helmet>
  );
};

export default LogInForm;
