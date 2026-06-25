import { useState } from "react";
import { useNavigate, useParams, Outlet, NavLink } from "react-router-dom";
import NewsPage from "./NewsPage";
import RetroPopover from "./RetroPopover";

// --- ODOO SPECIFIC DATA ---

const odooTabs = [
  {
    id: "sales",
    label: "Sales & CRM",
    accent: "#377cf6",
    image: "/tab-analytics.png",
    title: "Tingkatkan konversi dengan Sales & CRM terintegrasi",
    description:
      "Lacak prospek, otomatisasi follow-up, dan kelola pipeline penjualan dalam satu tampilan. Sistem CRM Odoo yang kami rancang fokus pada kecepatan closing dan visibilitas data.",
    stat: "42% faster lead-to-close rate",
    eyebrow: "Odoo Sales Module",
    primaryLinks: [
      "Pipeline management",
      "Quotation builder",
      "Lead scoring",
      "Activity tracking",
    ],
    secondaryLinks: [
      "Email integration",
      "Custom reporting",
      "Sales forecasting",
      "Commission engine",
    ],
    bulletGroups: [
      {
        heading: "Capture",
        items: [
          "Auto-lead dari website",
          "Validasi data otomatis",
          "Email to lead",
        ],
      },
      {
        heading: "Manage",
        items: [
          "Kanban view intuitive",
          "Activity reminder",
          "Quotation template",
        ],
      },
      {
        heading: "Close",
        items: ["E-signature", "Online payment", "Invoice generation"],
      },
    ],
  },
  {
    id: "inventory",
    label: "Inventory & MRP",
    accent: "#37d7c8",
    image: "/tab-onboarding.png",
    title: "Kelola stok dan produksi tanpa pusing selisih barang",
    description:
      "Sistem inventory cerdas dengan double-entry. Kami memastikan pergerakan barang dari supplier ke gudang hingga ke customer tercatat rapi tanpa loss.",
    stat: "Zero dead-stock in 3 months",
    eyebrow: "Odoo Inventory",
    primaryLinks: [
      "Barcode scanning",
      "Multi-warehouse",
      "Drop-shipping",
      "Reordering rules",
    ],
    secondaryLinks: [
      "Traceability",
      "Valuation",
      "Landed costs",
      "Scrap management",
    ],
    bulletGroups: [
      {
        heading: "Track",
        items: [
          "Real-time stock",
          "Lot/Serial numbers",
          "Multi-location tracking",
        ],
      },
      {
        heading: "Automate",
        items: ["Auto-reorder", "Route optimization", "Cross-docking"],
      },
      {
        heading: "Produce",
        items: ["BOM management", "Work center planning", "Quality control"],
      },
    ],
  },
  {
    id: "finance",
    label: "Accounting & Invoicing",
    accent: "#f3ba3f",
    image: "/tab-debug.png",
    title: "Pembukuan otomatis dengan standar akuntansi Indonesia",
    description:
      "Tidak perlu lagi entry data manual. Setiap transaksi dari sales, inventory, atau HR otomatis terjurnal ke buku besar Anda. Laporan keuangan real-time setiap saat.",
    stat: "100% automated journal entry",
    eyebrow: "Odoo Accounting",
    primaryLinks: [
      "Bank synchronization",
      "Dynamic reports",
      "Tax management",
      "Asset depreciation",
    ],
    secondaryLinks: [
      "Multi-currency",
      "Budgeting",
      "Analytic accounting",
      "Payment follow-ups",
    ],
    bulletGroups: [
      {
        heading: "Invoice",
        items: [
          "Batch invoicing",
          "Recurring bills",
          "Payment gateway integration",
        ],
      },
      {
        heading: "Reconcile",
        items: [
          "AI bank matching",
          "Payment differences",
          "Multi-invoice payment",
        ],
      },
      {
        heading: "Report",
        items: ["Profit & Loss", "Balance Sheet", "Cash flow statement"],
      },
    ],
  },
  {
    id: "hr",
    label: "HR & Payroll",
    accent: "#b461f3",
    image: "/tab-rollout.png",
    title: "Kelola tim, cuti, dan payroll dengan presisi tinggi",
    description:
      "Mulai dari rekrutmen hingga penggajian, semua terpusat. Kami mengkalibrasi modul HR Odoo agar sesuai dengan regulasi tenaga kerja dan perhitungan BPJS/PPh 21 di Indonesia.",
    stat: "3x faster payroll processing",
    eyebrow: "Odoo HR",
    primaryLinks: [
      "Employee directory",
      "Time off",
      "Appraisals",
      "Payroll batch",
    ],
    secondaryLinks: [
      "Recruitment pipeline",
      "Fleet management",
      "Expenses",
      "Onboarding plan",
    ],
    bulletGroups: [
      {
        heading: "Manage",
        items: ["Centralized data", "Contract tracking", "Shift scheduling"],
      },
      {
        heading: "Engage",
        items: ["Self-service portal", "Performance review", "Gamification"],
      },
      {
        heading: "Process",
        items: [
          "Automated payslip",
          "Tax & BPJS calculation",
          "Expense approval",
        ],
      },
    ],
  },
];

const odooTrustLogos = ["Odoo", "PostgreSQL", "Python", "AWS", "Docker"];

const odooHeroHighlights = [
  "Implementasi best practice khusus Odoo",
  "Tersinkronisasi antar modul secara seamless",
  "Fokus ke business value, bukan sekadar setup IT",
];

export const odooLibraryCards = [
  {
    name: "Retail Omni-channel",
    role: "Odoo Retail Implementation",
    place: "POS, Inventory, dan Accounting terpadu",
    team: "Retail Operations",
    image: "/lib-signal-board.png",
    overview:
      "Kami merancang ulang sistem operasional retail dengan Odoo. Menyatukan data penjualan dari berbagai cabang toko fisik dengan e-commerce, sehingga stok selalu akurat dan laporan keuangan real-time.",
    stats: [
      { label: "Durasi proyek", value: "6 minggu" },
      { label: "Cabang toko", value: "12 lokasi" },
      { label: "Sinkronisasi", value: "< 5 detik" },
    ],
    highlights: [
      "Stok tersinkronisasi otomatis dengan toko online",
      "Kasir POS yang tetap jalan saat offline",
      "Rekonsiliasi bank otomatis setiap pagi",
    ],
    strategy: [
      {
        phase: "Business Process Audit",
        desc: "Memetakan alur penjualan dan pergerakan stok saat ini.",
        image: null,
      },
      {
        phase: "System Setup",
        desc: "Konfigurasi Odoo POS dan Multi-company/Warehouse.",
        image: null,
      },
      {
        phase: "Data Migration",
        desc: "Migrasi ribuan SKU dan master data pelanggan.",
        image: null,
      },
      {
        phase: "Go-live & Training",
        desc: "Pelatihan staff toko dan tim finance.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi",
        tag: "Minggu 1",
        desc: "Analisis gap dan kebutuhan sistem.",
        callout: "Output: Blueprint implementasi",
      },
      {
        step: "Konfigurasi",
        tag: "Minggu 2-3",
        desc: "Setup environment dan modul Odoo.",
        callout: "Output: Staging environment",
      },
      {
        step: "Testing",
        tag: "Minggu 4",
        desc: "UAT (User Acceptance Test) dengan data dummy.",
        callout: "Output: UAT Sign-off",
      },
      {
        step: "Deployment",
        tag: "Minggu 5",
        desc: "Go-live di salah satu cabang pilot.",
        callout: "Output: Pilot Live",
      },
      {
        step: "Rollout",
        tag: "Minggu 6",
        desc: "Ekspansi ke seluruh cabang.",
        callout: "Output: Full Operation",
      },
    ],
    richContent: {
      title: "Catatan dari Tim Implementasi",
      blocks: [
        {
          type: "text",
          content:
            "Implementasi ERP bukan sekadar ganti software, tapi merapikan proses bisnis. Jika proses bisnis berantakan, ERP hanya akan mengotomatisasi kekacauan tersebut.",
        },
        {
          type: "callout",
          content:
            "User adoption adalah kunci. Kami selalu memprioritaskan UI/UX Odoo yang disederhanakan untuk end-user.",
        },
        {
          type: "list",
          items: [
            "Pendekatan bertahap (phased rollout)",
            "Migrasi data yang bersih",
            "Dokumentasi standar operasional",
          ],
        },
      ],
    },
    gallery: ["/lib-signal-board.png", null, null],
  },
  {
    name: "Manufacturing Precision",
    role: "Odoo MRP Implementation",
    place: "BOM, Work Center, dan Supply Chain",
    team: "Factory Operations",
    image: "/lib-warehouse-one.png",
    overview:
      "Otomatisasi pabrik manufaktur menggunakan Odoo MRP. Dari penghitungan HPP (Harga Pokok Penjualan) yang akurat hingga penjadwalan mesin yang efisien.",
    stats: [
      { label: "Durasi proyek", value: "8 minggu" },
      { label: "Peningkatan efisiensi", value: "+30%" },
      { label: "Akurasi HPP", value: "99.9%" },
    ],
    highlights: [
      "Penjadwalan produksi otomatis berdasarkan sales order",
      "Lacak pergerakan bahan baku secara presisi",
      "Kalkulasi overhead dan labour cost real-time",
    ],
    strategy: [
      {
        phase: "BOM Analysis",
        desc: "Menyusun Bill of Materials multi-level.",
        image: null,
      },
      {
        phase: "Routing Setup",
        desc: "Mendefinisikan Work Centers dan waktu proses.",
        image: null,
      },
      {
        phase: "Integration",
        desc: "Menghubungkan MRP dengan modul Inventory dan Accounting.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi",
        tag: "Minggu 1",
        desc: "Analisis proses produksi.",
        callout: "Output: Blueprint MRP",
      },
      {
        step: "Konfigurasi BOM",
        tag: "Minggu 2-3",
        desc: "Input data material dan routing.",
        callout: "Output: Struktur BOM",
      },
      {
        step: "Simulasi",
        tag: "Minggu 4-5",
        desc: "Menjalankan cycle produksi.",
        callout: "Output: Laporan Simulasi",
      },
      {
        step: "Go-Live",
        tag: "Minggu 6",
        desc: "Transisi ke Odoo.",
        callout: "Output: Live Production",
      },
    ],
    richContent: {
      title: "Catatan dari Tim Manufaktur",
      blocks: [
        {
          type: "text",
          content:
            "Kunci manufaktur adalah visibilitas. Dengan Odoo, manajer pabrik bisa melihat bottleneck secara langsung.",
        },
        {
          type: "callout",
          content:
            "Menyatukan lantai produksi dengan tim finance adalah pencapaian terbesar di proyek ini.",
        },
        {
          type: "list",
          items: [
            "Penurunan downtime mesin",
            "Penghematan inventory",
            "Pengiriman lebih cepat",
          ],
        },
      ],
    },
    gallery: ["/lib-warehouse-one.png", null, null],
  },
  {
    name: "Service & Maintenance",
    role: "Odoo Field Service",
    place: "Helpdesk, Timesheet, dan Invoicing",
    team: "Service Operations",
    image: "/lib-flow-pilot.png",
    overview:
      "Mengelola operasional tim lapangan jadi lebih mudah. Odoo Field Service memungkinkan teknisi untuk melacak waktu kerja, melaporkan penggunaan material, hingga penagihan ke klien secara langsung di tempat.",
    stats: [
      { label: "Durasi proyek", value: "4 minggu" },
      { label: "SLA Response", value: "-45% waktu" },
      { label: "Lost Revenue", value: "0%" },
    ],
    highlights: [
      "Teknisi bisa update tiket dari mobile app",
      "Penagihan otomatis dari jam kerja dan material yang dipakai",
      "Penjadwalan teknisi otomatis berdasarkan lokasi dan skill",
    ],
    strategy: [
      {
        phase: "Helpdesk Setup",
        desc: "Konfigurasi tiket SLA dan channel komunikasi pelanggan.",
        image: null,
      },
      {
        phase: "Field Service Mapping",
        desc: "Pemetaan rute, skill teknisi, dan alokasi waktu.",
        image: null,
      },
      {
        phase: "Billing Integration",
        desc: "Penghubungan dengan modul timesheet dan invoicing.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Audit Support",
        tag: "Minggu 1",
        desc: "Memahami flow penanganan keluhan pelanggan saat ini.",
        callout: "Output: SLA Blueprint",
      },
      {
        step: "Konfigurasi SLA",
        tag: "Minggu 2",
        desc: "Menyetel aturan SLA dan routing tiket.",
        callout: "Output: Helpdesk Flow",
      },
      {
        step: "Field Testing",
        tag: "Minggu 3",
        desc: "Uji coba mobile app oleh teknisi lapangan.",
        callout: "Output: UAT Sign-off",
      },
      {
        step: "Go-Live",
        tag: "Minggu 4",
        desc: "Rilis penuh untuk seluruh agen dan teknisi.",
        callout: "Output: Full Rollout",
      },
    ],
    richContent: {
      title: "Catatan Tim Layanan",
      blocks: [
        {
          type: "text",
          content:
            "Seringkali perusahaan kehilangan pendapatan karena teknisi lupa mencatat material yang dipakai di lapangan. Dengan aplikasi Odoo Field Service, hal itu tidak akan terjadi lagi.",
        },
        {
          type: "callout",
          content:
            "Pelanggan lebih senang karena mereka mendapatkan update real-time soal kedatangan teknisi.",
        },
        {
          type: "list",
          items: [
            "Customer satisfaction naik",
            "Billing 100% akurat",
            "Produktivitas teknisi terlacak",
          ],
        },
      ],
    },
    gallery: ["/lib-flow-pilot.png", null, null],
  },
];

// --- ICONS & HELPERS ---
function LinkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline small-icon">
      <path d="M6.2 10.2 4.5 12A2.5 2.5 0 0 1 1 8.5l1.8-1.8" />
      <path d="m9.8 5.8 1.7-1.8A2.5 2.5 0 1 1 15 7.5l-1.8 1.8" />
      <path d="m5.5 10.5 5-5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline small-icon">
      <path d="m5 3 7 5-7 5z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline small-icon">
      <path d="M3 8a5 5 0 0 1 10 0" />
      <rect x="2" y="8" width="2.5" height="4" rx="1" />
      <rect x="11.5" y="8" width="2.5" height="4" rx="1" />
      <path d="M12 13c0 1.1-.9 2-2 2H8" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="icon-inline">
      <path d="M6 4.5h2.4v9H6zm3.6 0H12v9H9.6z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline bullet-icon">
      <circle cx="8" cy="8" r="6" />
      <path d="m5.2 8.1 1.8 1.9 3.8-4" />
    </svg>
  );
}

function Wordmark() {
  return (
    <div className="wordmark" aria-label="Builders wordmark">
      <span className="wordmark-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="wordmark-text">Builders Odoo</span>
    </div>
  );
}

export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// --- MAIN COMPONENT ---
export default function OdooPage() {
  const [activeTab, setActiveTab] = useState("sales");
  const navigate = useNavigate();
  const currentTab = odooTabs.find((tab) => tab.id === activeTab) ?? odooTabs[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Wordmark />
          <h1>Sentralisasi Operasional Bisnis Anda dengan Odoo ERP SaaS</h1>
          <p>
            Berawal sebagai spesialis implementasi ERP, kami menghadirkan Odoo
            dengan pendekatan yang paling pas untuk skala bisnis Anda. Mulai
            dari modul operasional harian hingga pelaporan manajemen level atas.
          </p>
          <p>
            Kita tidak sekadar melakukan instalasi. Semua diatur agar flow kerja
            karyawan menjadi lebih natural, otomasi berjalan maksimal, dan
            pengambilan keputusan bisnis lebih cepat dengan data real-time yang
            terpercaya.
          </p>

          <ul className="hero-highlights" aria-label="Key benefits">
            {odooHeroHighlights.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <button type="button" className="cta-button">
              Consult with Expert
            </button>
            <button type="button" className="ghost-button">
              Request Demo
            </button>
          </div>

          <div className="hero-links">
            <a href="/" onClick={(event) => event.preventDefault()}>
              <LinkIcon />
              Modules
            </a>
            <span className="hero-dot" />
            <a href="/" onClick={(event) => event.preventDefault()}>
              <PlayIcon />
              Watch Odoo Tour
            </a>
            <span className="hero-dot" />
            <a href="/" onClick={(event) => event.preventDefault()}>
              <HeadsetIcon />
              Talk to Specialist
            </a>
          </div>

          <div
            className="trust-strip"
            aria-label="Supported technologies"
          >
            <span className="trust-label">Powered by:</span>
            <div className="trust-logos">
              {odooTrustLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-shell">
            {/* Menggunakan image hero default atau bisa diubah kalau ada image lain */}
            <img
              src="/builders-hero.png"
              alt="Odoo Implementation expert working"
              className="hero-generated-image"
            />
          </div>
        </div>
      </section>

      <section
        className="product-panel"
        style={{ "--panel-accent": currentTab.accent }}
      >
        <div className="tabs" role="tablist" aria-label="Odoo Modules">
          {odooTabs.map((tab) => {
            const isActive = tab.id === currentTab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`tab-button${isActive ? " active" : ""}`}
                style={isActive ? { "--tab-accent": tab.accent } : undefined}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="panel-card">
          <button
            type="button"
            className="panel-pause"
            aria-label="Pause carousel"
          >
            <PauseIcon />
          </button>

          <div className="panel-copy">
            <span className="panel-eyebrow">{currentTab.eyebrow}</span>
            <h2>{currentTab.title}</h2>
            <p>{currentTab.description}</p>

            <div className="panel-chips" aria-label="Top features">
              {currentTab.primaryLinks.map((link) => (
                <span key={link} className="panel-chip">
                  {link}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-visual">
            <img
              src={currentTab.image}
              alt={`${currentTab.label} visual`}
              className="panel-generated-image"
            />
          </div>

          <div className="panel-columns">
            {currentTab.bulletGroups.map((group) => (
              <section key={group.heading} className="link-column">
                <h3>{group.heading}</h3>
                <ul className="feature-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div
            className="panel-footer-links"
            aria-label="Additional capabilities"
          >
            {currentTab.secondaryLinks.map((link) => (
              <a
                href="/"
                key={link}
                onClick={(event) => event.preventDefault()}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="library-section" aria-labelledby="library-title">
        <div className="library-copy">
          <div>
            <span className="library-kicker">Success Stories</span>
            <h2 id="library-title">Implementasi Odoo di Berbagai Industri</h2>
          </div>
          <p>
            Berbagai hasil mahakarya implementasi ERP Odoo dari tim kami. Kami
            telah membantu retail, manufaktur, dan perusahaan jasa
            mentransformasi operasional mereka.
          </p>
        </div>

        <div className="library-grid">
          {odooLibraryCards.map((card) => (
            <article
              key={card.name}
              className="library-card"
              onClick={() => navigate("/odoo/portfolio/" + toSlug(card.name))}
              style={{ cursor: "pointer" }}
            >
              <div className="library-card-hero">
                <div className="library-card-screenshot-wrap">
                  <img
                    src={card.image}
                    alt={`${card.name} interface screenshot`}
                    className="library-card-screenshot"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="library-card-placeholder" aria-hidden="true">
                    <span className="placeholder-label">{card.name}</span>
                  </div>
                </div>
              </div>

              <div className="library-card-ribbon">
                <strong>{card.name}</strong>
                <span>{card.role}</span>
              </div>

              <div className="library-card-meta">
                <p>{card.place}</p>
                <div className="library-card-chip">{card.team}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Embedding NewsPage directly below as requested */}
      <div className="odoo-news-wrapper" style={{ marginTop: "80px" }}>
        <NewsPage />
      </div>

      <Outlet />
    </>
  );
}

export function OdooPageWithPopover() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const card = odooLibraryCards.find((c) => toSlug(c.name) === slug) ?? null;

  return (
    <>
      <OdooPage />
      <RetroPopover app={card} onClose={() => navigate("/odoo")} />
    </>
  );
}
