import React, { useState } from "react";
import { Link } from "react-router-dom";
import { franchiseMethods } from "./franchiseData";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M15 15l4 4" strokeLinecap="round" />
    </svg>
  );
}

export default function FranchisePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMethods = franchiseMethods.filter((method) => {
    return (
      method.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.cardDesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="news-gallery-page" style={{ maxWidth: '100%' }}>
      <section className="perks-hero-panel" style={{ marginBottom: "60px" }}>
        <div className="perks-hero-copy">
          <span className="perks-hero-eyebrow">For Franchise</span>
          <h2>
            Scale-up bisnis franchise Anda dengan pendekatan psikologi investor.
          </h2>
          <p>
            Market franchise itu beda. Target marketnya adalah investor yang mencari ROI, minim risiko, dan kemudahan operasional (SOP). Jelajahi strategi jitu kami di bawah ini.
          </p>
        </div>
      </section>

      <section className="news-page-layout">
        {/* Left Sidebar: Info / Categories */}
        <aside className="apps-left-sidebar">
          <h3 className="left-sidebar-title">Methodology</h3>
          <div className="tags-list">
            <button className="mini-tag-btn active">All Strategies</button>
            <button className="mini-tag-btn">Psychology</button>
            <button className="mini-tag-btn">Operational</button>
            <button className="mini-tag-btn">Trust</button>
          </div>
        </aside>

        {/* Main Feed: Search & Grid */}
        <div className="apps-main-feed">
          <div
            className="mobile-category-bar"
            role="navigation"
            aria-label="Filter by category"
          >
            <button className="mini-tag-btn active">All Strategies</button>
            <button className="mini-tag-btn">Psychology</button>
          </div>

          <div className="apps-toolbar">
            <div className="search-bar-wrap">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search methods..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="news-gallery-grid">
            {filteredMethods.length > 0 ? (
              filteredMethods.map((method) => (
                <Link
                  key={method.id}
                  to={`/franchise/${method.id}`}
                  className="library-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="library-card-hero" style={{ backgroundColor: method.accent }}>
                    <div className="library-card-screenshot-wrap">
                      <img
                        src={method.image}
                        alt={`${method.title} illustration`}
                        className="library-card-screenshot"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }}
                      />
                      <div className="library-card-placeholder" aria-hidden="true">
                        <span className="placeholder-label">{method.title}</span>
                      </div>
                    </div>
                  </div>

                  <div className="library-card-ribbon">
                    <strong>{method.title}</strong>
                    <span>{method.subtitle}</span>
                  </div>

                  <div className="library-card-meta" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                    <p style={{ margin: 0 }}>{method.cardDesc}</p>
                    <div className="library-card-chip" style={{ background: method.accent, color: '#fff', alignSelf: 'flex-start' }}>Read Strategy</div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-results-msg">
                <p>No methods found matching "{searchQuery}".</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
