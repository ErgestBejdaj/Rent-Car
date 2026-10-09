import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/pages.css";

const NotFound = () => {
  return (
    <Helmet title="Page not found">
      <section className="section notfound">
        <div className="container">
          <h1>This page doesn't exist</h1>
          <p className="lead">The link may be old or mistyped. You can find all our cars on the cars page.</p>
          <div className="notfound__actions">
            <Link to="/cars" className="btn btn--primary">See our cars</Link>
            <Link to="/home" className="btn btn--outline">Go to home page</Link>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default NotFound;
