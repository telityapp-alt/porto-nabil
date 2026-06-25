import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { franchiseMethods } from "./franchiseData";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="check-icon" style={{ width: 16, height: 16, marginRight: 8, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FranchiseMethodPage() {
  const { id } = useParams();
  const method = franchiseMethods.find((m) => m.id === id);

  if (!method) {
    return <Navigate to="/franchise" />;
  }

  const suggestedMethods = franchiseMethods.filter((m) => m.id !== id).slice(0, 3);

  return (
    <div className="news-article-layout">
      {/* Main Article */}
      <main className="news-article-main">
        <article className="news-article-page" style={{ padding: 0 }}>
          <header className="news-article-header">
            <div className="news-article-meta-top">
              <Link to="/franchise" className="news-back-link">
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
                Back to Franchise
              </Link>
              <span className="news-article-category">{method.subtitle}</span>
            </div>
            <h1 className="news-article-title">{method.title}</h1>
            <div className="news-article-meta-bottom">
              <span className="news-article-author">Franchise Strategy</span>
              <span className="news-article-dot">&middot;</span>
              <span className="news-article-date">Growww Methods</span>
            </div>
          </header>

          <div className="news-article-hero">
            <img src={method.image} alt={method.title} className="news-article-hero-img" />
          </div>

          <div className="news-article-body">
            <p className="news-article-lead">
              {method.overview}
            </p>

            <h2 className="news-article-h2">How to execute this method</h2>

            {method.howToReach.map((step, idx) => (
              <div key={idx} style={{ marginBottom: "24px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px", color: "var(--foreground, #ededed)" }}>
                  <span style={{ color: method.accent, marginRight: "8px" }}>{idx + 1}.</span> 
                  {step.phase}
                </h3>
                <p className="news-article-p">
                  {step.desc}
                </p>
              </div>
            ))}

            <h2 className="news-article-h2" style={{ marginTop: "40px" }}>Expected Results</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "40px" }}>
              {method.stats.map((stat, idx) => (
                <li key={idx} style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
                  <span style={{ opacity: 0.7, marginRight: "8px" }}>{stat.label}:</span>
                  <strong style={{ color: "var(--foreground, #ededed)", fontSize: "1.1rem" }}>{stat.value}</strong>
                </li>
              ))}
            </ul>

            <h2 className="news-article-h2">Key Highlights</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {method.highlights.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "12px", opacity: 0.9 }}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>

      {/* Right Sidebar (Floating Suggest Cart) */}
      <aside className="news-article-sidebar" style={{ alignSelf: "start" }}>
        
        {/* Next Strategies */}
        <div className="perks-sidebar-card">
          <span className="perks-sidebar-kicker" style={{ marginBottom: "14px" }}>Up Next</span>
          <div className="news-suggest-list">
            {suggestedMethods.map((m) => (
              <Link
                key={m.id}
                to={`/franchise/${m.id}`}
                className="news-suggest-item"
              >
                <span className="pop-label-pill">{m.subtitle}</span>
                <h4>{m.title}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Suggest Features */}
        <div className="perks-sidebar-card" style={{ marginTop: "24px" }}>
          <span className="perks-sidebar-kicker" style={{ marginBottom: "14px" }}>Execute With Us</span>
          <div className="news-suggest-list">
            <Link to="/solutions/odoo-implementation" className="news-suggest-item">
              <h4>Odoo Implementation</h4>
              <span>Systemize your franchise ops</span>
            </Link>
            <Link to="/solutions" className="news-suggest-item">
              <h4 style={{ color: "#c48a28" }}>Consult with our team &rarr;</h4>
            </Link>
          </div>
        </div>

      </aside>
    </div>
  );
}
