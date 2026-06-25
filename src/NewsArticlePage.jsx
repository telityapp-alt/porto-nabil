import { useParams, Link, Navigate } from "react-router-dom";
import { newsArticles } from "./NewsPage";

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" />;
  }

  const suggestedNews = newsArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="news-article-layout">
      {/* Main Article */}
      <main className="news-article-main">
        <article className="news-article-page" style={{ padding: 0 }}>
          <header className="news-article-header">
            <div className="news-article-meta-top">
              <Link to="/news" className="news-back-link">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 14, height: 14, marginRight: 6 }}
                >
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
      </main>

      {/* Right Sidebar (Floating Suggest Cart) */}
      <aside className="news-article-sidebar" style={{ alignSelf: "start" }}>
        {/* Suggest Features */}
        <div className="perks-sidebar-card">
          <span className="perks-sidebar-kicker" style={{ marginBottom: "14px" }}>Explore Features</span>
          <div className="news-suggest-list">
            <Link to="/portfolio/signal-board" className="news-suggest-item">
              <h4>Signal board</h4>
              <span>Realtime funnels and analytics</span>
            </Link>
            <Link to="/portfolio/flow-pilot" className="news-suggest-item">
              <h4>Flow pilot</h4>
              <span>Onboarding command center</span>
            </Link>
            <Link to="/solutions" className="news-suggest-item">
              <h4 style={{ color: "#c48a28" }}>View all solutions &rarr;</h4>
            </Link>
          </div>
        </div>

        {/* Suggest News */}
        <div className="perks-sidebar-card">
          <span className="perks-sidebar-kicker" style={{ marginBottom: "14px" }}>Up Next</span>
          <div className="news-suggest-list">
            {suggestedNews.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.slug}`}
                className="news-suggest-item"
              >
                <span className="pop-label-pill">{news.category}</span>
                <h4>{news.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
