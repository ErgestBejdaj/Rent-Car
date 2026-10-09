import React from "react";
import { Link, useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import BlogList, { formatPostDate } from "../components/UI/BlogList";
import blogData from "../assets/data/blogData";
import NotFound from "./NotFound";
import "../styles/pages.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) return <NotFound />;

  return (
    <Helmet title={post.title}>
      <article className="article">
        <header className="page-hero">
          <div className="container article__narrow">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/home">Home</Link> / <Link to="/blogs">Travel tips</Link>
            </nav>
            <h1>{post.title}</h1>
            <p>
              {post.author}, {formatPostDate(post.date)}. {post.readTime}
            </p>
          </div>
        </header>

        <div className="container article__narrow article__body">
          <img src={post.imgUrl} alt="" className="article__img" />
          {post.body.map((para, i) => (
            <React.Fragment key={i}>
              <p>{para}</p>
              {i === 0 && <blockquote>{post.quote}</blockquote>}
            </React.Fragment>
          ))}

          <div className="article__cta">
            <p>Ready to plan your trip?</p>
            <Link to="/cars" className="btn btn--primary">See available cars</Link>
          </div>
        </div>
      </article>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head">
            <h2>More travel tips</h2>
          </div>
          <BlogList exclude={post.slug} />
        </div>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
