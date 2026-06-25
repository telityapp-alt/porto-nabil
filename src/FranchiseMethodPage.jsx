import React from "react";
import { useParams, Link } from "react-router-dom";
import { franchiseMethods } from "./franchiseData";

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon-inline"
      style={{ marginRight: "8px" }}
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="check-icon">
      <path
        d="M20 6L9 17l-5-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FranchiseMethodPage() {
  const { id } = useParams();
  const method = franchiseMethods.find((m) => m.id === id);

  if (!method) {
    return (
      <div className="page-wrapper" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h2>Method Not Found</h2>
        <Link to="/franchise" className="cta-button" style={{ display: 'inline-flex', marginTop: '20px' }}>Back to Franchise</Link>
      </div>
    );
  }

  return (
    <article className="news-article-page" style={{ paddingBottom: '120px' }}>
      <header className="article-header">
        <Link to="/franchise" className="back-link">
          <ChevronLeftIcon /> Back to Franchise
        </Link>
        <div className="article-meta-info" style={{ marginTop: '24px' }}>
          <span className="article-category" style={{ background: method.accent, color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>{method.subtitle}</span>
        </div>
        <h1 className="article-title">{method.title}</h1>
        <p className="article-excerpt" style={{ fontSize: '1.25rem', color: '#555', marginTop: '16px', lineHeight: 1.6 }}>{method.overview}</p>
      </header>

      <div className="article-hero-wrap" style={{ backgroundColor: method.accent, padding: '40px', borderRadius: '16px', display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img
          src={method.image}
          alt={method.title}
          className="article-hero-image"
          style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
        />
      </div>

      <div className="article-body" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Main Content: How to reach this method */}
        <div className="article-content">
          <h2 style={{ fontSize: '2rem', marginBottom: '32px', color: '#111' }}>How to execute this method</h2>
          
          <div className="tab-detail-grid" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {method.howToReach.map((step, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: method.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem' }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#111' }}>{step.phase}</h3>
                </div>
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#555', lineHeight: 1.6, paddingLeft: '56px' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '40px', background: '#f8f9fa', borderRadius: '12px', borderLeft: `6px solid ${method.accent}` }}>
            <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Start executing today</h3>
            <p style={{ color: '#555', marginBottom: '24px' }}>
              Want to implement <strong>{method.title}</strong> for your franchise business? Let our experts help you build the systems, landing pages, and automated workflows.
            </p>
            <button className="cta-button" style={{ background: method.accent, color: '#fff' }}>Consult with our team</button>
          </div>
        </div>

        {/* Right Sidebar: Stats & Highlights */}
        <aside className="article-sidebar" style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
          
          <div className="stats-box" style={{ background: '#111', color: '#fff', padding: '32px', borderRadius: '12px', marginBottom: '32px' }}>
            <h4 style={{ margin: '0 0 24px 0', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Expected Results</h4>
            {method.stats.map((stat, idx) => (
              <div key={idx} style={{ marginBottom: idx === method.stats.length - 1 ? 0 : '20px' }}>
                <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="highlights-box" style={{ padding: '32px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
            <h4 style={{ margin: '0 0 24px 0', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#555' }}>Key Highlights</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {method.highlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#333' }}>
                  <CheckIcon />
                  <span style={{ paddingTop: '2px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>
    </article>
  );
}
