import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";
import { useLang } from "../../lib/i18n";

export { formatLongDate as formatPostDate } from "../../lib/site";

const BlogList = ({ exclude }) => {
  const { tr } = useLang();
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
              <p className="post-card__meta">{tr(post.readTime)}</p>
              <h3>
                <Link to={`/blogs/${post.slug}`}>{tr(post.title)}</Link>
              </h3>
              <p className="muted">{tr(post.excerpt)}</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default BlogList;
