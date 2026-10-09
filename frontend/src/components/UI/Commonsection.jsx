import React from "react";
import { Link } from "react-router-dom";

// Koka e errët e faqeve të brendshme
const CommonSection = ({ title, text, crumb }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/home">Home</Link> / <span>{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
};

export default CommonSection;
