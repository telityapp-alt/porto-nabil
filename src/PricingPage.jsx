import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="icon-inline bullet-icon"
      style={{ width: "16px", height: "16px", flexShrink: 0, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", marginRight: "10px", marginTop: "2px" }}
    >
      <polyline points="20 6 9 17 4 12" style={{ transform: "scale(0.6) translate(1px, 2px)" }} />
    </svg>
  );
}

export default function PricingPage() {
  const [method, setMethod] = useState("project"); // "project" | "subscribe"
  const [category, setCategory] = useState("website"); // "website" | "apps" | "odoo"

  const websiteProjectCards = [
    {
      title: "Landing Page Only",
      desc: "Cocok untuk validasi ide bisnis atau campaign singkat.",
      price: "Rp 7.500.000",
      oldPrice: "Rp 14.000.000",
      features: ["1 Page High-converting", "Copywriting basic", "Responsive Design", "Setup Domain & Hosting"],
      cta: "Pilih Paket Ini"
    },
    {
      title: "Multi-feature + Dashboard",
      desc: "Web lengkap dengan dashboard admin untuk kelola data.",
      price: "Rp 10.500.000",
      oldPrice: "Rp 17.000.000",
      features: ["Multi-pages Website", "Custom Admin Dashboard", "CMS Integration", "SEO Basic Setup", "Analytics Integration"],
      cta: "Pilih Paket Ini",
      popular: true
    },
    {
      title: "Supermassive Platform",
      desc: "Production grade website dengan kapabilitas enterprise.",
      price: "Rp 13.500.000",
      oldPrice: "Rp 20.000.000",
      features: ["Custom Web Application", "Advanced UI/UX Animation", "Performance Optimization", "Scalable Architecture", "Advanced Security"],
      cta: "Pilih Paket Ini"
    }
  ];

  const appsProjectCards = [
    {
      title: "Multi Features App",
      desc: "Aplikasi mobile/web dengan fitur lengkap dari awal.",
      price: "Start dari Rp 11.000.000",
      oldPrice: "Start dari Rp 17.500.000",
      features: ["Cross-platform App", "Custom Backend", "Authentication", "Push Notifications", "Publish to Stores"],
      cta: "Mulai Konsultasi",
      popular: true
    },
    {
      title: "Enterprise / Custom",
      desc: "Solusi kompleks dengan kebutuhan spesifik dan unik.",
      price: "Discuss",
      features: ["Bespoke Architecture", "Third-party Integrations", "Legacy System Migration", "Dedicated Team", "SLA Support"],
      cta: "Hubungi Sales"
    }
  ];

  const odooProjectCards = [
    {
      title: "Odoo ERP Implementation",
      desc: "Setup dan kustomisasi Odoo sesuai proses bisnis Anda.",
      price: "By Contact",
      features: ["Business Process Audit", "Modul Customization", "Data Migration", "Training Staff", "Maintenance Support"],
      cta: "Hubungi Konsultan",
      popular: true
    }
  ];

  const websiteSubscribeCards = [
    {
      title: "Supermassive",
      desc: "Akses web production grade dengan langganan bulanan yang ringan.",
      price: "Rp 700.000 / bln",
      features: ["Supermassive Platform Features", "Hosting Included", "Weekly Backups", "Basic Maintenance", "Email Support"],
      cta: "Mulai Berlangganan"
    },
    {
      title: "Supermassive + SEO",
      desc: "Semua fitur Supermassive ditambah optimasi SEO berkelanjutan.",
      price: "Rp 1.800.000 / bln",
      features: ["Semua Fitur Supermassive", "On-page & Off-page SEO", "Keyword Research", "Monthly SEO Report", "Priority Support"],
      cta: "Mulai Berlangganan",
      popular: true
    }
  ];

  const appsSubscribeCards = [
    {
      title: "Apps Subscription",
      desc: "Kelola aplikasi Anda tanpa biaya setup awal yang besar.",
      price: "Start dari Rp 600.000 / bln",
      features: ["Full App Access", "Cloud Server Included", "Regular Updates", "Bug Fixes", "Technical Support"],
      cta: "Mulai Berlangganan",
      popular: true
    }
  ];

  const odooSubscribeCards = [
    {
      title: "Odoo SaaS Subscription",
      desc: "Sistem ERP Odoo berbasis cloud yang siap pakai dengan biaya bulanan.",
      price: "By Subscribe",
      features: ["Cloud-hosted Odoo", "Auto Updates", "Daily Backups", "Dedicated Account Manager", "Custom SLAs available"],
      cta: "Tanya Harga Langganan",
      popular: true
    }
  ];

  const getCards = () => {
    if (method === "project") {
      if (category === "website") return websiteProjectCards;
      if (category === "apps") return appsProjectCards;
      if (category === "odoo") return odooProjectCards;
    } else {
      if (category === "website") return websiteSubscribeCards;
      if (category === "apps") return appsSubscribeCards;
      if (category === "odoo") return odooSubscribeCards;
    }
    return [];
  };

  const cards = getCards();

  return (
    <div style={{ paddingBottom: "40px" }}>
      <section style={{ paddingBottom: "20px", paddingTop: "40px" }}>
        <div style={{ textAlign: "center", margin: "0 auto", maxWidth: "800px", padding: "0 20px" }}>
          <h1 style={{ fontSize: "48px", letterSpacing: "-0.04em", marginBottom: "8px" }}>
            Transparan, masuk akal, dan penuh value.
          </h1>
          <p style={{ fontSize: "20px", color: "#55606d", lineHeight: 1.5, marginBottom: "24px" }}>
            Pilih model pembayaran yang paling pas buat timeline dan budget lo. Bayar penuh di awal untuk project, atau langganan bulanan tanpa beban.
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div className="tabs" style={{ background: "#f1f3f5", padding: "6px", borderRadius: "12px", display: "inline-flex", gap: "8px" }}>
              <button
                className={`tab-button ${method === "project" ? "active" : ""}`}
                onClick={() => setMethod("project")}
                style={{ fontSize: "16px", padding: "10px 24px", color: method === "project" ? "#11222b" : undefined }}
              >
                By Project
              </button>
              <button
                className={`tab-button ${method === "subscribe" ? "active" : ""}`}
                onClick={() => setMethod("subscribe")}
                style={{ fontSize: "16px", padding: "10px 24px", color: method === "subscribe" ? "#11222b" : undefined }}
              >
                By Subscribe
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="category-tabs" style={{ display: "flex", borderBottom: "2px solid #e1e4e8", gap: "32px", paddingBottom: "0" }}>
              <button
                className={`category-tab ${category === "website" ? "active" : ""}`}
                onClick={() => setCategory("website")}
              >
                Website
              </button>
              <button
                className={`category-tab ${category === "apps" ? "active" : ""}`}
                onClick={() => setCategory("apps")}
              >
                Application Apps
              </button>
              <button
                className={`category-tab ${category === "odoo" ? "active" : ""}`}
                onClick={() => setCategory("odoo")}
              >
                Odoo ERP SaaS
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="pricing-grid">
          {cards.map((card, idx) => (
            <div key={idx} className={`pricing-card ${card.popular ? "popular" : ""}`}>
              {card.popular && (
                <div 
                  className="cta-button" 
                  style={{ 
                    alignSelf: "flex-start", 
                    marginBottom: "12px", 
                    pointerEvents: "none",
                    height: "32px",
                    fontSize: "14px",
                    padding: "0 12px"
                  }}
                >
                  🔥 Paling Laris
                </div>
              )}
              <h3 className="pricing-title">{card.title}</h3>
              <p className="pricing-desc">{card.desc}</p>
              <div className="pricing-price-wrap">
                {card.oldPrice && (
                  <span className="pricing-old-price">{card.oldPrice}</span>
                )}
                <span className="pricing-price">{card.price}</span>
              </div>
              
              <ul className="pricing-features">
                {card.features.map((feat, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-footer">
                <button className="cta-button" style={{ width: "100%", justifyContent: "center" }}>
                  {card.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
