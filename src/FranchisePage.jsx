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

function MinimalArrow() {
  return (
    <div style={{ padding: "0 12px", color: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", flexShrink: 0 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
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
        <div className="hero-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
          <div className="perks-sidebar-card" style={{ background: "var(--accent-orange, #f76b15)", color: "#111", border: "none", maxWidth: "340px", width: "100%", padding: "40px 32px", textAlign: "center", transform: "rotate(2deg)", margin: "auto" }}>
            <span className="perks-sidebar-kicker" style={{ color: "rgba(0,0,0,0.6)", marginBottom: "16px", display: "block" }}>Interactive Tool</span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.3 }}>Temukan Strategi yang Paling Tepat untuk Bisnismu</h3>
            <p style={{ margin: "0 0 32px 0", fontSize: "1rem", opacity: 0.8, lineHeight: 1.5 }}>
              Gunakan generator AI kami untuk memetakan metode psikologi yang paling cocok dengan model bisnis franchise Anda.
            </p>
            <Link 
              to="/franchise-strategy-generator" 
              className="cta-button" 
              style={{ background: "#111", color: "#fff", width: "100%", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Coba Generator &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="franchise-gap-panel" style={{ padding: "0 20px 80px", maxWidth: "1060px", margin: "0 auto", marginBottom: "40px" }}>
        <div>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "16px", letterSpacing: "-0.5px" }}>The Investor Disconnect</h2>
            <p style={{ opacity: 0.7, maxWidth: "600px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.6 }}>
              Alasan kenapa ribuan dollar budget listing Anda hangus dengan bounce rate di atas 85%.
            </p>
          </div>

          {/* Minimal Flow Container */}
          {/* Minimal Flow Container */}
          <div className="flowchart-container" style={{ display: "flex", alignItems: "stretch", justifyContent: "center", gap: "12px", flexWrap: "nowrap", paddingBottom: "20px" }}>
            
            {/* Step 1 */}
            <div className="perks-sidebar-card" style={{ flex: "1", maxWidth: "240px", margin: 0 }}>
              <span className="pop-label-pill" style={{ marginBottom: "16px" }}>Step 1: The Hook</span>
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 12px 0", fontWeight: 600 }}>Klik Portal Listing</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.5 }}>Investor melihat direktori franchise Anda dengan <em>High Intent</em>.</p>
            </div>

            <MinimalArrow />

            {/* Step 2 */}
            <div className="perks-sidebar-card" style={{ flex: "1", maxWidth: "240px", margin: 0 }}>
              <span className="pop-label-pill" style={{ marginBottom: "16px" }}>Step 2: Disconnect</span>
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 12px 0", fontWeight: 600 }}>Web Konsumer (B2C)</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.5 }}>Di-suguhi promo produk B2C, tanpa data ROI atau kejelasan SOP.</p>
            </div>

            <MinimalArrow />

            {/* Step 3 */}
            <div className="perks-sidebar-card" style={{ flex: "1", maxWidth: "240px", margin: 0 }}>
              <span className="pop-label-pill" style={{ marginBottom: "16px" }}>Step 3: The Drop</span>
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 12px 0", fontWeight: 600 }}>85% Bounce Rate</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.5 }}>Peluang investasi hilang krn investor merasa salah sasaran.</p>
            </div>

            <MinimalArrow />

            {/* Step 4 */}
            <div className="perks-sidebar-card" style={{ flex: "1", maxWidth: "240px", margin: 0 }}>
              <span className="pop-label-pill" style={{ marginBottom: "16px" }}>The Growww Fix</span>
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 12px 0", fontWeight: 600 }}>Investor Funnel</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.5 }}>Landing page terpisah bicara angka, ROI, & autopilot sistem.</p>
            </div>

          </div>
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
          
          <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "8px", fontWeight: 700 }}>Ini method yang akan kami terapkan di landing kamu.</h2>
            <p style={{ opacity: 0.7, margin: 0 }}>Eksplorasi strategi psikologi yang spesifik dan terbukti mengonversi investor franchise.</p>
          </div>

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
