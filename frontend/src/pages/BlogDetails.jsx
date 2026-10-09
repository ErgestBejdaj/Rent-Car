import React from "react";
import { Link, useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import BlogList, { formatPostDate } from "../components/UI/BlogList";
import blogData from "../assets/data/blogData";
import NotFound from "./NotFound";
import { useLang } from "../lib/i18n";
import "../styles/pages.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const { t, tr, locale } = useLang();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) return <NotFound />;

  return (
    <Helmet title={tr(post.title)}>
      <article className="article">
        <header className="page-hero">
          <div className="container article__narrow">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/home">{t("crumb.home")}</Link> / <Link to="/blogs">{t("blog.title")}</Link>
            </nav>
            <h1>{tr(post.title)}</h1>
            <p>
              {post.author}, {formatPostDate(post.date, locale)}. {tr(post.readTime)}
            </p>
          </div>
        </header>

        <div className="container article__narrow article__body">
          <img src={post.imgUrl} alt="" className="article__img" />
          {tr(post.body).map((para, i) => (
            <React.Fragment key={i}>
              <p>{para}</p>
              {i === 0 && <blockquote>{tr(post.quote)}</blockquote>}
            </React.Fragment>
          ))}

          <div className="article__cta">
            <p>{t("blog.ready")}</p>
            <Link to="/cars" className="btn btn--primary">{t("blog.seeCars")}</Link>
          </div>
        </div>
      </article>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head">
            <h2>{t("blog.more")}</h2>
          </div>
          <BlogList exclude={post.slug} />
        </div>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
