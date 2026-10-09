import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

export const formatPostDate = (iso) =>
  new Date(`${iso}T00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogList = ({ exclude }) => {
  return (
    <div className="posts">
      {blogData
        .filter((b) => b.slug !== exclude)
        .map((post) => (
          <article className="post-card" key={post.id}>
            <Link to={`/blogs/${post.slug}`} className="post-card__media" tabIndex={-1} aria-hidden="true">
              <img src={post.imgUrl} alt="" loading="lazy" />
            </Link>
            <div className="post-card__body">
              <p className="post-card__meta">{post.readTime}</p>
              <h3>
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="muted">{post.excerpt}</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default BlogList;
