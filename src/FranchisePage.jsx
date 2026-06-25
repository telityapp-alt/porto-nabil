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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="check-icon" style={{ width: 16, height: 16, marginRight: 8, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
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
    <div className="news-gallery-page">
      <section className="hero" style={{ paddingBottom: "80px", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="hero-copy">
          <span className="perks-hero-eyebrow" style={{ display: "inline-block", marginBottom: "16px", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.85rem", opacity: 0.7 }}>Growww For Franchise</span>
          <h1>Bangun trust investor lewat psikologi & sistem Autopilot</h1>
          <p>
            Market franchise itu unik. Target audiens Anda bukan konsumen biasa, melainkan investor yang mencari <strong>ROI, minim risiko, dan kemudahan operasional (SOP)</strong>.
          </p>
          <p>
            Kami tidak hanya membuat website kemitraan yang cantik, tapi kami merancangnya dengan <em>method-backed psychology</em>. Mulai dari strategi Risk Reversal hingga Territorial Scarcity untuk melipatgandakan konversi kemitraan Anda.
          </p>

          <ul className="hero-highlights" aria-label="Key benefits">
            <li>
              <CheckIcon />
              <span>Metode tervalidasi secara psikologis</span>
            </li>
            <li>
              <CheckIcon />
              <span>Fokus pada ROI dan Risk Reversal</span>
            </li>
            <li>
              <CheckIcon />
              <span>Ekosistem autopilot terintegrasi Odoo ERP</span>
            </li>
          </ul>
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
                >
                  <div className="library-card-hero">
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

                  <div className="library-card-meta">
                    <p>{method.cardDesc}</p>
                    <div className="library-card-chip">Strategy</div>
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
