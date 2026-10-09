import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Commonsection";
import BlogList from "../components/UI/BlogList";
import { useLang } from "../lib/i18n";
import "../styles/pages.css";

const Blog = () => {
  const { t } = useLang();
  return (
    <Helmet title={t("blog.title")}>
      <CommonSection
        title={t("blog.title")}
        text={t("blog.text")}
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
