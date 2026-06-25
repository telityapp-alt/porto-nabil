import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const stepsData = {
  "growth": {
    number: 1,
    title: "Growth",
    bannerTitle: "Scale Your Business with Data-Driven Growth",
    bannerSubtitle: "Kita nggak cuma ngomongin marketing, tapi soal gimana setiap klik jadi user, dan setiap user jadi loyal. Ini adalah ilmu pasti, bukan tebak-tebakan.",
    bannerImage: "/builders-hero.png",
    accent: "#377cf6",
    sections: [
      {
        title: "The Psychology of Growth",
        content: "Di balik setiap kurva eksponensial ada pemahaman mendalam tentang psikologi kognitif pengguna. Kami membedah pain points, menyuntikkan micro-animations yang memicu dopamin, dan membangun flow yang membuat user betah secara bawah sadar.",
        image: "/lib-audience-lab.png",
        chip: "Cognitive"
      },
      {
        title: "Metrics that Matter",
        content: "Banyak startup terjebak vanity metrics. Pendekatan research-based kami fokus ke North Star Metric yang sesungguhnya. Aktivasi, Retensi, dan Referal dirancang menjadi satu kesatuan yang terukur dan dapat diprediksi secara matematis.",
        image: "/lib-signal-board.png",
        chip: "Data"
      },
      {
        title: "Growth Loops Architecture",
        content: "Kami tidak percaya pada akuisisi linier. Kami merancang arsitektur produk yang secara inheren mendorong pengguna untuk mengundang pengguna lain, menciptakan organic growth loops yang berjalan otomatis tanpa henti.",
        image: "/lib-warehouse-one.png",
        chip: "Architecture"
      },
      {
        title: "Conversion Rate Optimization",
        content: "Meningkatkan traffic tanpa CRO adalah membakar uang. Setiap landing page, tombol, dan formulir kami rancang ulang berdasarkan heatmap dan A/B testing untuk memastikan setiap kunjungan berharga secara optimal.",
        image: "/builders-hero.png",
        chip: "CRO"
      }
    ],
    research: [
      { title: "Behavioral Analysis", desc: "Menganalisis pola habit user saat berinteraksi dengan fitur inti aplikasi." },
      { title: "A/B Testing Loops", desc: "Validasi iterasi produk secara terus-menerus tanpa mengandalkan asumsi buta." },
      { title: "Cohort Retention Tracking", desc: "Membagi user ke dalam cohort untuk memahami life-time value (LTV)." },
      { title: "Friction Logging", desc: "Mendeteksi sekecil apapun hambatan yang dialami user dalam funnel konversi." }
    ]
  },
  "research-website": {
    number: 2,
    title: "Research-based Website",
    bannerTitle: "Website Bukan Cuma Etalase, Ini Salesman 24/7",
    bannerSubtitle: "Desain yang memukau mata hanyalah permulaan. Fondasi aslinya adalah riset psikologis untuk mengarahkan perjalanan pengunjung tanpa mereka sadari.",
    bannerImage: "/lib-signal-board.png",
    accent: "#f3ba3f",
    sections: [
      {
        title: "Cognitive Load Reduction",
        content: "Kami merancang UI/UX yang tidak membebani pikiran pembaca. Penempatan tombol, warna, dan whitespace diatur spesifik berdasarkan penelitian Eye-Tracking untuk mempermudah pengambilan keputusan audiens.",
        image: "/builders-hero.png",
        chip: "UI/UX"
      },
      {
        title: "The STOS Framework",
        content: "Mengimplementasikan struktur STOS (Semantic, Tracking, Optimization, Speed). Ini bukan sekadar arsitektur web biasa, melainkan formulasi eksklusif kami agar website Anda diistimewakan oleh mesin pencari.",
        image: "/lib-audience-lab.png",
        chip: "STOS"
      },
      {
        title: "Persuasive Architecture",
        content: "Kami merancang arsitektur informasi yang mengarahkan pikiran pengunjung secara bertahap. Mulai dari awareness, interest, hingga decision dibuat dalam satu flow psikologis yang halus dan tak terputus.",
        image: "/lib-warehouse-one.png",
        chip: "Conversion"
      },
      {
        title: "Subliminal Trust Signals",
        content: "Trust bukan cuma soal pasang logo klien. Kami menggunakan micro-copy, skema warna spesifik, dan asimetri visual yang telah terbukti secara ilmiah mampu meningkatkan trust score hingga 40% secara signifikan.",
        image: "/lib-signal-board.png",
        chip: "Trust"
      }
    ],
    research: [
      { title: "Eye Tracking Patterns", desc: "Penempatan elemen vital berdasarkan rute visual F-Pattern atau Z-Pattern untuk memandu atensi." },
      { title: "Neuro-Copywriting", desc: "Teks yang ditulis spesifik untuk memicu respon emosional target market." },
      { title: "Color Psychology", desc: "Pemilihan palet warna berdasarkan respon fisiologis yang diharapkan dari pengunjung." },
      { title: "Load Time Optimization", desc: "Kecepatan muat di bawah 1 detik untuk mencegah cognitive abandonment." }
    ]
  },
  "web-apps-growth": {
    number: 3,
    title: "Web Apps Growth",
    bannerTitle: "Bangun App yang Bikin User Kecanduan",
    bannerSubtitle: "Web App yang sukses adalah yang berhasil menjadi habit. Kami menyematkan Hook Model langsung ke dalam core arsitektur aplikasi Anda.",
    bannerImage: "/lib-audience-lab.png",
    accent: "#b461f3",
    sections: [
      {
        title: "Server & Architecture Research",
        content: "Aplikasi yang lambat membunuh konversi lebih cepat dari kompetitor. Riset server kami menjamin stabilitas 99.9% uptime, latensi sub-second, dan arsitektur backend yang scale seamlessly meskipun traffic sangat tinggi.",
        image: "/lib-warehouse-one.png",
        chip: "Infrastructure"
      },
      {
        title: "Viral Loops Implementation",
        content: "Kami mendesain fitur yang secara inheren mendorong user untuk mengajak kolega mereka. Mekanisme ini dibangun di atas pondasi gamification dan intrinsic reward, memicu akuisisi pengguna secara natural.",
        image: "/builders-hero.png",
        chip: "Virality"
      },
      {
        title: "The Hook Canvas",
        content: "Aplikasi kami dirancang berdasarkan metodologi Hook (Trigger, Action, Variable Reward, Investment) untuk menciptakan kebiasaan harian yang sulit ditinggalkan dan selalu dirindukan oleh pengguna.",
        image: "/lib-signal-board.png",
        chip: "Psychology"
      },
      {
        title: "Micro-Interaction Design",
        content: "Setiap klik, hover, dan loading state diberikan sentuhan animasi ringan yang memberikan feedback positif instan, meningkatkan kepuasan emosional dan mengurangi churn rate secara signifikan setiap harinya.",
        image: "/lib-audience-lab.png",
        chip: "Design"
      }
    ],
    research: [
      { title: "Load Stress Testing", desc: "Simulasi jutaan request terdistribusi untuk menguji daya tahan dan bottleneck server." },
      { title: "Variable Rewards", desc: "Sistem reward dinamis untuk menjaga tingkat dopamin dan user engagement tetap tinggi." },
      { title: "Downtime Mitigation", desc: "Arsitektur multi-region fallback untuk memastikan zero-downtime saat update." },
      { title: "Session Depth Analysis", desc: "Mengukur seberapa dalam user berinteraksi dengan fitur sekunder aplikasi." }
    ]
  },
  "odoo-implementation": {
    number: 4,
    title: "Odoo Implementation",
    bannerTitle: "Operasional Rapih, Bisnis Lari Kencang",
    bannerSubtitle: "Sistem ERP Odoo yang kami racik bukan sekadar software. Ini adalah pembenahan alur nadi bisnis Anda dengan presisi bedah yang tinggi.",
    bannerImage: "/lib-warehouse-one.png",
    accent: "#37d7c8",
    sections: [
      {
        title: "System-Human Harmony",
        content: "Riset membuktikan bahwa 60% implementasi ERP gagal karena penolakan pengguna. Kami mengatasi friksi ini lewat pendekatan human-centric, menyesuaikan UI Odoo se-natural mungkin dengan cara kerja mereka.",
        image: "/builders-hero.png",
        chip: "Human Factor"
      },
      {
        title: "Data Reliability & Centralization",
        content: "Sentralisasi data yang 100% bersih memungkinkan top management mengambil keputusan tanpa ragu. Setiap modul mulai dari Sales hingga HR terhubung dalam ekosistem kokoh yang tak terputus sama sekali.",
        image: "/lib-signal-board.png",
        chip: "Data"
      },
      {
        title: "Custom Module Engineering",
        content: "Kami tidak memaksa bisnis Anda menyesuaikan diri dengan Odoo standar. Kami membedah kode dan merekayasa modul spesifik yang benar-benar mewakili keunikan dan keunggulan kompetitif operasional Anda.",
        image: "/lib-audience-lab.png",
        chip: "Engineering"
      },
      {
        title: "Painless Migration Protocol",
        content: "Migrasi data dari sistem lama ke Odoo seringkali menjadi mimpi buruk. Protokol validasi bertingkat kami memastikan perpindahan data jutaan baris berlangsung aman, akurat, tanpa risiko, dan tanpa downtime panjang.",
        image: "/lib-warehouse-one.png",
        chip: "Migration"
      }
    ],
    research: [
      { title: "Workflow Analysis", desc: "Audit proses bisnis lama untuk menemukan dan memangkas inefisiensi sistematis." },
      { title: "Change Management", desc: "Strategi adopsi teknologi berbasis psikologi agar tim bertransisi tanpa rasa tertekan." },
      { title: "Data Integrity Scans", desc: "Algoritma pembersihan data otomatis sebelum dimasukkan ke sistem ERP baru." },
      { title: "Role-Based UI/UX", desc: "Menyederhanakan interface Odoo berdasarkan job-desc masing-masing karyawan." }
    ]
  }
};

const stepKeys = Object.keys(stepsData);

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline bullet-icon">
      <circle cx="8" cy="8" r="6" />
      <path d="m5.2 8.1 1.8 1.9 3.8-4" />
    </svg>
  );
}

export default function SolutionsPage() {
  const { step } = useParams();
  const navigate = useNavigate();
  
  const currentStepKey = step && stepsData[step] ? step : "growth";
  const currentData = stepsData[currentStepKey];

  useEffect(() => {
    if (!step || !stepsData[step]) {
      navigate("/solutions/growth", { replace: true });
    }
  }, [step, navigate]);

  if (!currentData) return null;

  return (
    <section className="apps-page-layout" style={{ gridTemplateColumns: "220px minmax(0, 1fr)" }}>
      {/* Left Sidebar Steps */}
      <aside className="apps-left-sidebar" aria-label="Solutions navigation">
        <h3 className="left-sidebar-title" style={{ marginBottom: '16px' }}>Solutions</h3>
        <div className="tags-list" style={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
          {stepKeys.map((key) => {
            const s = stepsData[key];
            const isActive = key === currentStepKey;
            return (
              <button
                key={key}
                className={`mini-tag-btn ${isActive ? "active" : ""}`}
                style={{ height: 'auto', padding: '12px 14px', textAlign: 'left', display: 'flex', gap: '8px' }}
                onClick={() => navigate(`/solutions/${key}`)}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{s.number}.</span>
                <span style={{ whiteSpace: 'normal', lineHeight: '1.3' }}>{s.title}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Right Content */}
      <div className="apps-main-feed" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Banner with Panel Card styling */}
        <div className="panel-card" style={{ "--panel-accent": currentData.accent }}>
          <div className="panel-copy">
            <span className="panel-eyebrow" style={{ color: currentData.accent }}>Step 0{currentData.number}</span>
            <h2>{currentData.bannerTitle}</h2>
            <p>{currentData.bannerSubtitle}</p>
            <div className="panel-chips" aria-label="Top features">
              <span className="panel-chip">Research Based</span>
              <span className="panel-chip">Psychology</span>
            </div>
          </div>
          <div className="panel-visual">
            <img
              src={currentData.bannerImage}
              alt={currentData.bannerTitle}
              className="panel-generated-image"
            />
          </div>
        </div>

        {/* Foundational Sections with COMPLETE Library Card styling */}
        <div>
          <div className="apps-list-header" style={{ marginBottom: '24px' }}>
            <span className="library-kicker">Foundation</span>
            <h2>Our Architectural Approach</h2>
          </div>
          <div className="library-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {currentData.sections.map((sec, idx) => (
              <article key={idx} className="library-card" style={{ cursor: 'default' }}>
                {/* Fixed the card by adding the library-card-hero */}
                <div className="library-card-hero" style={{ background: currentData.accent }}>
                  <div className="library-card-screenshot-wrap">
                    <img 
                      className="library-card-screenshot" 
                      src={sec.image} 
                      alt={sec.title} 
                      onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="library-card-placeholder">
                      <span className="placeholder-label">{sec.title}</span>
                    </div>
                  </div>
                </div>
                <div className="library-card-ribbon">
                  <strong>{sec.title}</strong>
                </div>
                <div className="library-card-meta">
                  <p>{sec.content}</p>
                  <div className="library-card-chip">{sec.chip}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Research Pillars as a Widget */}
        <div className="sidebar-widget" style={{ backgroundColor: "#fdfaf4", padding: "24px", borderRadius: "12px", border: "1px solid #f0e6d5" }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="sidebar-eyebrow">Core Research Pillars</span>
          </div>
          <div className="library-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {currentData.research.map((res, idx) => (
              <div key={idx}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0d1d38', marginBottom: '8px' }}>{res.title}</h4>
                <ul className="feature-list" style={{ marginTop: 0 }}>
                  <li>
                    <CheckIcon />
                    <span>{res.desc}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
