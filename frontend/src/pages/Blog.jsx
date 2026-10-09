import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Commonsection";
import BlogList from "../components/UI/BlogList";
import "../styles/pages.css";

const Blog = () => {
  return (
    <Helmet title="Travel tips">
      <CommonSection
        title="Travel tips"
        text="Practical notes on renting a car and driving around Albania."
      />
      <section className="section">
        <div className="container">
          <BlogList />
        </div>
      </section>
    </Helmet>
  );
};

export default Blog;
