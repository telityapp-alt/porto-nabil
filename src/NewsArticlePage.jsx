import { useParams, Link, Navigate } from "react-router-dom";
import { newsArticles } from "./NewsPage";

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" />;
  }

  return (
    <article className="news-article-page">
      <header className="news-article-header">
        <div className="news-article-meta-top">
          <Link to="/news" className="news-back-link">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 14, height: 14, marginRight: 6}}>
              <path d="M10 14L4 8l6-6" />
            </svg>
            Back to News
          </Link>
          <span className="news-article-category">{article.category}</span>
        </div>
        <h1 className="news-article-title">{article.title}</h1>
        <div className="news-article-meta-bottom">
          <span className="news-article-author">{article.author}</span>
          <span className="news-article-dot">&middot;</span>
          <span className="news-article-date">{article.date}</span>
          <span className="news-article-dot">&middot;</span>
          <span className="news-article-readtime">{article.readTime}</span>
        </div>
      </header>

      <div className="news-article-hero">
        <img src={article.image} alt="" className="news-article-hero-img" />
      </div>

      <div className="news-article-body">
        {article.content.map((block, i) => {
          if (block.type === "lead") {
            return (
              <p key={i} className="news-article-lead">
                {block.text}
              </p>
            );
          }
          if (block.type === "h2") {
            return (
              <h2 key={i} className="news-article-h2">
                {block.text}
              </h2>
            );
          }
          if (block.type === "p") {
            return (
              <p key={i} className="news-article-p">
                {block.text}
              </p>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}
