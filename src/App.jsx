import { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";
import "./App.css";
import AppsList from "./AppsList";
import NewsPage from "./NewsPage";
import NewsArticlePage from "./NewsArticlePage";
import PerksPage from "./PerksPage";
import RetroPopover from "./RetroPopover";
import OdooPage, { OdooPageWithPopover } from "./OdooPage";
import SolutionsPage from "./SolutionsPage";
import PromoPopup from "./PromoPopup";

const tabs = [
  {
    id: "usage",
    label: "Psikologi Web App",
    accent: "#377cf6",
    image: "/tab-analytics.png",
    title: "Website cerdas yang dirancang khusus memahami pola pengguna",
    description:
      "Dari visual ceria buat audiens anak hingga fitur lead magnet elegan untuk korporat. Setiap inci website dirancang pakai trik psikologi supaya pengunjung nyaman dan tergerak melakukan aksi.",
    stat: "42% faster onboarding insight",
    eyebrow: "Web Apps & Sites",
    primaryLinks: ["Session replay", "Funnels", "Retention", "Heatmaps"],
    secondaryLinks: [
      "Audience cohorts",
      "Path analysis",
      "Journey alerts",
      "Insight boards",
    ],
    bulletGroups: [
      {
        heading: "Capture",
        items: [
          "Autocapture events",
          "Replay synced to issues",
          "Privacy-safe masking",
        ],
      },
      {
        heading: "Explain",
        items: [
          "Conversion drop reasons",
          "Power-user patterns",
          "Activation scoring",
        ],
      },
      {
        heading: "Act",
        items: [
          "Target segments",
          "Launch experiments",
          "Share one-click dashboards",
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Konsultasi & ERP",
    accent: "#37d7c8",
    image: "/tab-onboarding.png",
    title: "Integrasikan seluruh operasional ke dalam satu sistem ERP",
    description:
      "Basic kita itu konsultan ERP. Kita paham ribetnya data terpisah. Makanya kita setup sistem Odoo yang menyatukan operasional, sales, dan HR dengan flow yang intuitif dan mudah dipahami tim Anda.",
    stat: "18 sources connected in under an hour",
    eyebrow: "Odoo ERP Setup",
    primaryLinks: ["Postgres", "Snowflake", "Stripe", "Salesforce"],
    secondaryLinks: [
      "Data modeling",
      "SQL editor",
      "Managed warehouse",
      "Reverse ETL",
    ],
    bulletGroups: [
      {
        heading: "Import",
        items: [
          "Warehouse syncs",
          "Schema-aware connectors",
          "Backfill without downtime",
        ],
      },
      {
        heading: "Model",
        items: [
          "Product-ready SQL",
          "Reusable semantic layers",
          "AI-assisted exploration",
        ],
      },
      {
        heading: "Ship",
        items: [
          "Audience exports",
          "Webhook destinations",
          "Analytics for every team",
        ],
      },
    ],
  },
  {
    id: "issues",
    label: "Habit Mobile Apps",
    accent: "#f3ba3f",
    image: "/tab-debug.png",
    title: "Aplikasi mobile dengan habit design untuk retensi maksimal",
    description:
      "Rahasia app bertahan lama ada di habit design. Kita bangun mobile apps pakai pendekatan psikologi user, menciptakan flow natural yang bikin mereka otomatis terus balik pakai aplikasi Anda.",
    stat: "63% less time spent triaging regressions",
    eyebrow: "Mobile Apps Dev",
    primaryLinks: ["Error groups", "Tracing", "Deploy markers", "Alerting"],
    secondaryLinks: [
      "Ownership rules",
      "Replay correlation",
      "Source maps",
      "Fix verification",
    ],
    bulletGroups: [
      {
        heading: "Detect",
        items: [
          "Frontend and backend coverage",
          "Noise-reduced grouping",
          "Threshold alerts",
        ],
      },
      {
        heading: "Investigate",
        items: [
          "Click-to-trace drilldown",
          "Logs with user context",
          "Replay attached automatically",
        ],
      },
      {
        heading: "Resolve",
        items: [
          "Assign ownership",
          "Track rollout impact",
          "Confirm issue disappearance",
        ],
      },
    ],
  },
  {
    id: "rollout",
    label: "Strategi Growth",
    accent: "#b461f3",
    image: "/tab-rollout.png",
    title: "Strategi growth berbasis data untuk eskalasi bisnis Anda",
    description:
      "Sebagai konsultan growth, kerja kita berlanjut setelah rilis. Kita baca data, lakukan A/B test, dan optimasi fiturnya pakai trik psikologi supaya konversi bisnis Anda meledak pesat.",
    stat: "2x more confident launches per quarter",
    eyebrow: "Growth Consulting",
    primaryLinks: [
      "Feature flags",
      "A/B tests",
      "Progressive rollouts",
      "Goal metrics",
    ],
    secondaryLinks: [
      "Holdouts",
      "Kill switches",
      "Experiment templates",
      "Impact reports",
    ],
    bulletGroups: [
      {
        heading: "Launch",
        items: [
          "Ship behind flags",
          "Target users precisely",
          "Start with safe cohorts",
        ],
      },
      {
        heading: "Measure",
        items: [
          "Attach product metrics",
          "Read lift instantly",
          "See qualitative feedback",
        ],
      },
      {
        heading: "Scale",
        items: [
          "Ramp gradually",
          "Document learnings",
          "Reuse winning experiments",
        ],
      },
    ],
  },
];

const trustLogos = ["Ramp", "Retool", "Linear", "Vercel", "Cursor"];

const heroHighlights = [
  "Paham psikologi user luar dalam",
  "DNA konsultan growth & pakar ERP",
  "Nggak sekadar cantik, tapi narik cuan",
];

const libraryCards = [
  {
    name: "Signal board",
    role: "Product analytics cockpit",
    place: "Realtime funnels and cohort health",
    team: "Growth systems",
    image: "/lib-signal-board.png",
    overview:
      "Signal board adalah sistem analitik produk yang dirancang bersama tim growth bisnis Anda. Kami tidak sekadar pasang dashboard — kami rancang metrik yang relevan berdasarkan journey user nyata, lalu tampilkan dalam antarmuka yang bisa dibaca tim tanpa perlu jadi data analyst.",
    stats: [
      { label: "Durasi proyek", value: "5 minggu" },
      { label: "Integrasi data", value: "12 sumber" },
      { label: "User aktif", value: "3.400+" },
    ],
    highlights: [
      "Dirancang dari riset growth loop bisnis Anda",
      "Metrik yang relevan, bukan sekadar angka",
      "Dashboard yang dibaca tim, bukan hanya CTO",
    ],
    strategy: [
      {
        phase: "Discovery & Riset",
        desc: "Kami mulai dengan wawancara tim growth untuk memahami keputusan apa yang paling sering terhambat karena kurangnya data yang tepat.",
        image: null,
      },
      {
        phase: "Arsitektur Data",
        desc: "Kami rancang schema dan pipeline event tracking yang sesuai bisnis — bukan template generic yang akhirnya tidak terpakai.",
        image: null,
      },
      {
        phase: "Desain Antarmuka",
        desc: "Setiap chart dan widget dipilih berdasarkan psikologi kognitif agar informasi bisa dicerna dalam hitungan detik, bukan menit.",
        image: null,
      },
      {
        phase: "Implementasi & Handover",
        desc: "Kode ditulis bersih dan terdokumentasi. Tim Anda bisa langsung pakai dan kembangkan tanpa ketergantungan pada kami.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-signal-board.png", null, null],
  },
  {
    name: "Flow pilot",
    role: "Onboarding command center",
    place: "Activation checkpoints and drop-offs",
    team: "Journey team",
    image: "/lib-flow-pilot.png",
    overview:
      "Flow pilot menyelesaikan masalah klasik onboarding: user daftar, tapi tidak pernah sampai ke aha moment. Kami memetakan setiap titik drop-off, merancang ulang flow dengan pendekatan psikologi, dan memberi tim Anda visibilitas penuh atas perjalanan aktivasi pengguna.",
    stats: [
      { label: "Durasi proyek", value: "6 minggu" },
      { label: "Peningkatan aktivasi", value: "+38%" },
      { label: "Titik checkpoint", value: "14 step" },
    ],
    highlights: [
      "Peta aktivasi berdasarkan perilaku nyata user",
      "Identifikasi drop-off yang selama ini tidak terlihat",
      "Flow onboarding yang terasa natural, bukan tutorial",
    ],
    strategy: [
      {
        phase: "User Journey Mapping",
        desc: "Kami rekonstruksi perjalanan user dari pertama daftar hingga transaksi pertama menggunakan session data dan wawancara langsung.",
        image: null,
      },
      {
        phase: "Identifikasi Friction",
        desc: "Setiap titik hambatan dianalisis — baik dari sisi UI yang membingungkan, konten yang tidak relevan, maupun ekspektasi yang tidak terpenuhi.",
        image: null,
      },
      {
        phase: "Redesain Flow",
        desc: "Kami rancang ulang urutan langkah onboarding menggunakan prinsip habit formation dan progressive disclosure.",
        image: null,
      },
      {
        phase: "Pengukuran & Iterasi",
        desc: "Setelah live, kami pantau metrik aktivasi secara berkala dan lakukan iterasi berdasarkan data nyata, bukan asumsi.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-flow-pilot.png", null, null],
  },
  {
    name: "Warehouse one",
    role: "Data workspace",
    place: "Models, syncs, dan warehouse QA",
    team: "Data tools",
    image: "/lib-warehouse-one.png",
    overview:
      "Warehouse one adalah ruang kerja data terpadu untuk tim yang sudah terlalu sering bekerja di antara banyak tools sekaligus. Kami konsolidasikan pipeline, buat model yang reusable, dan hadirkan satu antarmuka bersih untuk seluruh operasi data Anda.",
    stats: [
      { label: "Durasi proyek", value: "8 minggu" },
      { label: "Koneksi sumber", value: "18 db" },
      { label: "Query time", value: "-62%" },
    ],
    highlights: [
      "Satu workspace untuk semua operasi data",
      "Model semantik yang bisa dipakai ulang lintas tim",
      "Antarmuka yang bisa dipakai non-engineer sekalipun",
    ],
    strategy: [
      {
        phase: "Audit Infrastruktur",
        desc: "Kami mulai dengan memetakan seluruh sumber data yang ada — siapa yang mengaksesnya, seberapa sering, dan apa yang sering salah.",
        image: null,
      },
      {
        phase: "Desain Schema",
        desc: "Berdasarkan audit, kami rancang schema yang bersih, konsisten, dan mudah di-query oleh semua peran dalam tim.",
        image: null,
      },
      {
        phase: "Pipeline & Sync",
        desc: "Kami setup pipeline ETL yang robust dengan monitoring built-in dan rollback otomatis jika ada perubahan schema yang tidak terduga.",
        image: null,
      },
      {
        phase: "UI & Dokumentasi",
        desc: "Antarmuka query builder dan eksplorasi data dirancang agar tim non-teknis pun bisa mandiri mengambil insight tanpa minta bantuan engineer.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-warehouse-one.png", null, null],
  },
  {
    name: "Issue radar",
    role: "Debug investigation hub",
    place: "Alerts, traces, dan replay context",
    team: "Reliability",
    image: "/lib-issue-radar.png",
    overview:
      "Issue radar memangkas waktu yang dihabiskan tim engineering untuk triaging bug dari jam menjadi menit. Kami rancang sistem yang menghubungkan error, log, session replay, dan deploy marker dalam satu timeline yang bisa langsung ditindaklanjuti.",
    stats: [
      { label: "Durasi proyek", value: "4 minggu" },
      { label: "Waktu triaging", value: "-71%" },
      { label: "Integrasi tools", value: "8 sumber" },
    ],
    highlights: [
      "Error langsung terhubung ke session user yang terdampak",
      "Timeline insiden yang bisa dibaca product dan engineer",
      "Alert cerdas yang tidak bikin fatigue tim on-call",
    ],
    strategy: [
      {
        phase: "Pemetaan Incident Flow",
        desc: "Kami pelajari bagaimana tim merespons insiden saat ini — di mana waktu paling banyak terbuang dan informasi apa yang paling sering dicari.",
        image: null,
      },
      {
        phase: "Integrasi Sinyal",
        desc: "Kami hubungkan semua sumber sinyal ke dalam satu sistem terpusat dengan korelasi otomatis antara error, log, dan session.",
        image: null,
      },
      {
        phase: "Desain Alert System",
        desc: "Alert dirancang bertingkat — noise yang tidak penting disaring, yang kritikal langsung eskalasi ke channel yang tepat dengan konteks lengkap.",
        image: null,
      },
      {
        phase: "Dashboard Investigasi",
        desc: "Antarmuka investigasi dirancang agar engineer bisa bergerak dari ada error ke ini penyebabnya dengan klik seminimal mungkin.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-issue-radar.png", null, null],
  },
  {
    name: "Launch deck",
    role: "Feature rollout control",
    place: "Flags, segments, dan impact reads",
    team: "Release team",
    image: "/lib-launch-deck.png",
    overview:
      "Launch deck memberi tim Anda kendali penuh atas setiap rilis fitur — dari rollout bertahap ke segmen tertentu, hingga kill switch yang bisa diaktifkan dalam hitungan detik jika ada yang tidak berjalan sesuai rencana.",
    stats: [
      { label: "Durasi proyek", value: "5 minggu" },
      { label: "Fitur flags", value: "200+ aktif" },
      { label: "Rollback time", value: "< 30 dtk" },
    ],
    highlights: [
      "Rilis fitur tanpa ketakutan dengan rollout bertahap",
      "Kill switch yang bisa diaktifkan siapapun, bukan hanya engineer",
      "Impact langsung terukur sejak menit pertama rilis",
    ],
    strategy: [
      {
        phase: "Audit Release Process",
        desc: "Kami petakan bagaimana tim saat ini merilis fitur — risiko apa yang selama ini muncul dan bagaimana tim meresponsnya.",
        image: null,
      },
      {
        phase: "Desain Flag System",
        desc: "Sistem flag dirancang fleksibel: bisa target per user, per segmen, per persentase, atau kombinasi ketiganya tanpa deploy ulang.",
        image: null,
      },
      {
        phase: "Metrik & Observability",
        desc: "Setiap flag terhubung ke metrik bisnis yang relevan, sehingga dampak fitur baru bisa langsung dibaca tanpa harus buka tools lain.",
        image: null,
      },
      {
        phase: "UI untuk Non-Engineer",
        desc: "Antarmuka dirancang agar PM dan tim produk bisa mandiri mengontrol rollout tanpa ketergantungan ke engineering setiap saat.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-launch-deck.png", null, null],
  },
  {
    name: "Audience lab",
    role: "Experiment workspace",
    place: "Hypotheses, test cells, dan lift",
    team: "Experimentation",
    image: "/lib-audience-lab.png",
    overview:
      "Audience lab adalah tempat di mana hipotesis bisnis diuji dengan ketelitian ilmiah. Kami bangun workspace eksperimentasi yang membuat A/B testing terasa mudah untuk semua tim — bukan hanya data scientist.",
    stats: [
      { label: "Durasi proyek", value: "7 minggu" },
      { label: "Eksperimen aktif", value: "40+" },
      { label: "Win rate", value: "34%" },
    ],
    highlights: [
      "Hipotesis terstruktur sebelum eksperimen dimulai",
      "Kalkulasi sample size otomatis dan tepat",
      "Hasil yang bisa dibaca PM tanpa mengerti statistik",
    ],
    strategy: [
      {
        phase: "Experimentation Framework",
        desc: "Kami bangun kerangka kerja eksperimentasi yang memastikan setiap test dirancang dengan benar sejak awal — hipotesis, metrik sukses, dan durasi yang valid.",
        image: null,
      },
      {
        phase: "Audience Segmentation",
        desc: "Sistem segmentasi yang granular memungkinkan test pada subset pengguna yang sangat spesifik dengan jaminan statistical validity.",
        image: null,
      },
      {
        phase: "Analisis & Reporting",
        desc: "Dashboard hasil eksperimen dirancang agar kesimpulan bisa diambil dengan percaya diri — interval kepercayaan dijelaskan dalam bahasa manusia.",
        image: null,
      },
      {
        phase: "Knowledge Base",
        desc: "Setiap eksperimen yang selesai tersimpan dalam knowledge base terstruktur agar learnings bisa diakses tim generasi berikutnya.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-audience-lab.png", null, null],
  },
  {
    name: "Support graph",
    role: "Customer operations panel",
    place: "Tickets linked to product behavior",
    team: "Ops intelligence",
    image: "/lib-support-graph.png",
    overview:
      "Support graph menghubungkan dunia support dengan dunia produk — dua tim yang seharusnya berbagi informasi tapi hampir selalu bekerja di silo berbeda. Hasilnya: masalah berulang terdeteksi lebih cepat sebelum eskalasi.",
    stats: [
      { label: "Durasi proyek", value: "5 minggu" },
      { label: "Tiket per hari", value: "1.200+" },
      { label: "Waktu resolusi", value: "-44%" },
    ],
    highlights: [
      "Tiket support terhubung ke perilaku produk user",
      "Deteksi pola masalah sebelum jadi keluhan massal",
      "Context lengkap untuk agen support tanpa buka 5 tabs",
    ],
    strategy: [
      {
        phase: "Pemetaan Support Journey",
        desc: "Kami ikuti perjalanan satu tiket dari awal dibuat hingga ditutup — di mana waktu paling banyak terbuang dan informasi apa yang paling sering dicari agen.",
        image: null,
      },
      {
        phase: "Integrasi Product Context",
        desc: "Setiap tiket diperkaya otomatis dengan riwayat aksi user di produk — agen bisa langsung paham konteks masalah tanpa perlu bertanya ulang.",
        image: null,
      },
      {
        phase: "Pattern Detection",
        desc: "Sistem mendeteksi kluster tiket yang mirip secara otomatis dan memberi sinyal ke product team sebelum masalah menjadi viral.",
        image: null,
      },
      {
        phase: "Dashboard Ops",
        desc: "Kepala support mendapat visibility real-time atas volume, SLA, dan topik paling sering — disajikan dalam satu halaman yang bisa dibaca dalam 30 detik.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-support-graph.png", null, null],
  },
  {
    name: "Focus room",
    role: "Weekly review dashboard",
    place: "Goals, blockers, dan owner updates",
    team: "Exec rhythm",
    image: "/lib-focus-room.png",
    overview:
      "Focus room menggantikan meeting review mingguan yang panjang dengan satu halaman yang bisa dibaca dalam dua menit. Status setiap goal, blocker yang perlu perhatian, dan update dari setiap owner — semua terstruktur dan terkini.",
    stats: [
      { label: "Durasi proyek", value: "4 minggu" },
      { label: "Waktu meeting", value: "-55%" },
      { label: "Goal visibility", value: "100% tim" },
    ],
    highlights: [
      "Review mingguan yang bisa dibaca, bukan disitting-through",
      "Blocker terdeteksi lebih awal sebelum menjadi krisis",
      "Accountability yang muncul dari sistem, bukan dari tekanan",
    ],
    strategy: [
      {
        phase: "Audit Ritual Review",
        desc: "Kami amati satu siklus review mingguan secara langsung — informasi apa yang benar-benar dibutuhkan dan mana yang hanya ritual tanpa nilai.",
        image: null,
      },
      {
        phase: "Desain Information Architecture",
        desc: "Hierarki informasi dirancang agar yang paling penting langsung terlihat — tanpa harus scroll, tanpa expand kolaps yang berlapis.",
        image: null,
      },
      {
        phase: "Update Workflow",
        desc: "Proses pengisian update oleh owner dirancang semudah mungkin — estimasi 3 menit per orang, bisa dari mobile, tanpa format yang kaku.",
        image: null,
      },
      {
        phase: "Notifikasi & Eskalasi",
        desc: "Sistem secara proaktif mengingatkan owner yang belum update dan mengeskalasi blocker yang sudah terlalu lama tanpa resolusi.",
        image: null,
      },
    ],
    userJourney: [
      {
        step: "Konsultasi & Discovery",
        tag: "Minggu 1",
        desc: "Sesi mendalam untuk memahami konteks bisnis, pengguna, dan masalah yang ingin diselesaikan. Tidak ada asumsi, semua berdasarkan data dan wawancara langsung.",
        callout:
          "Output: Brief proyek, persona, dan prioritas fitur yang disepakati bersama",
      },
      {
        step: "Proposal & Scope",
        tag: "Minggu 1–2",
        desc: "Kami susun dokumen scope teknis dan desain yang detail — termasuk estimasi waktu, stack teknologi, dan milestone yang realistis.",
        callout:
          "Output: Proposal teknis + timeline yang bisa langsung dieksekusi",
      },
      {
        step: "Design & Prototyping",
        tag: "Minggu 2–3",
        desc: "Wireframe dan prototype interaktif dibuat berdasarkan hasil discovery. Setiap keputusan desain punya dasar psikologi pengguna yang jelas.",
        callout:
          "Output: Prototype high-fidelity yang siap diuji dengan user nyata",
      },
      {
        step: "Development",
        tag: "Minggu 3–N",
        desc: "Kode ditulis dengan standar produksi — bersih, terdokumentasi, dan mudah dirawat. Update progress setiap sprint, bukan hanya di akhir proyek.",
        callout:
          "Output: Produk berjalan di staging environment dengan test coverage",
      },
      {
        step: "Launch & Handover",
        tag: "Minggu terakhir",
        desc: "Deploy ke production, serahkan akses penuh, dan sesi walkthrough teknis untuk tim Anda. Garansi perbaikan bug 30 hari setelah launch.",
        callout:
          "Output: Produk live + dokumentasi + akses penuh ke semua aset",
      },
    ],
    richContent: {
      title: "Catatan dari tim Builders",
      blocks: [
        {
          type: "text",
          content:
            "Setiap proyek yang kami kerjakan dimulai dari satu pertanyaan sederhana: apa yang benar-benar dibutuhkan pengguna? Jawabannya tidak selalu sama dengan apa yang diminta klien — dan perbedaan itulah yang membuat proyek gagal atau berhasil.",
        },
        {
          type: "callout",
          content:
            "Kami percaya bahwa software yang baik adalah software yang tidak perlu manual. Jika pengguna butuh tutorial panjang, desainnya yang salah.",
        },
        {
          type: "list",
          items: [
            "Semua desain divalidasi dengan pengguna nyata sebelum dibangun",
            "Kode open untuk diaudit — tidak ada yang kami sembunyikan",
            "Harga transparan, scope jelas, tidak ada biaya kejutan",
            "Anda punya full ownership atas semua kode dan aset",
          ],
        },
        {
          type: "kv",
          rows: [
            { label: "Stack default", value: "React, Node.js, PostgreSQL" },
            { label: "Desain tool", value: "Figma + sistem komponen sendiri" },
            {
              label: "Komunikasi",
              value: "Notion + Slack, daily async update",
            },
            {
              label: "Pembayaran",
              value: "Milestone-based, tidak dimuka penuh",
            },
          ],
        },
      ],
    },
    gallery: ["/lib-focus-room.png", null, null],
  },
];

function CaretIcon() {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className="icon-inline caret-icon"
    >
      <path d="M2 3.5 5 6.5l3-3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4 4" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline">
      <path d="M5 6.5h14v9H11l-4 3v-3H5z" />
      <path d="M9 10.5h6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5.5 19c1.4-3 4-4.5 6.5-4.5S17.1 16 18.5 19" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="icon-inline small-icon"
    >
      <path d="m5 3 7 5-7 5z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="icon-inline small-icon"
    >
      <path d="M6.2 10.2 4.5 12A2.5 2.5 0 0 1 1 8.5l1.8-1.8" />
      <path d="m9.8 5.8 1.7-1.8A2.5 2.5 0 1 1 15 7.5l-1.8 1.8" />
      <path d="m5.5 10.5 5-5" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="icon-inline small-icon"
    >
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
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="icon-inline bullet-icon"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="m5.2 8.1 1.8 1.9 3.8-4" />
    </svg>
  );
}

function HeaderLogo() {
  return (
    <div className="header-logo" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <b />
    </div>
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
      <span className="wordmark-text">Builders</span>
    </div>
  );
}

function CardGlyphs() {
  return (
    <div className="library-glyphs" aria-hidden="true">
      <span>✦</span>
      <span>◎</span>
      <span>◌</span>
    </div>
  );
}

function MiniAppWindow({ variant }) {
  return (
    <div className={`mini-app-window ${variant}`}>
      <div className="mini-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="mini-canvas">
        {variant === "analytics" && (
          <>
            <div className="mini-chart-bars">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="mini-chart-line" />
            <div className="mini-kpi-row">
              <b />
              <b />
              <b />
            </div>
          </>
        )}
        {variant === "checklist" && (
          <>
            <div className="mini-sidebar" />
            <div className="mini-checklist">
              <i />
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {variant === "warehouse" && (
          <>
            <div className="mini-code-block">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-table-grid" />
          </>
        )}
        {variant === "incidents" && (
          <>
            <div className="mini-alert-pill" />
            <div className="mini-timeline">
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {variant === "flags" && (
          <>
            <div className="mini-toggle-row">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-segment-card" />
          </>
        )}
        {variant === "experiments" && (
          <>
            <div className="mini-split-panels">
              <i />
              <i />
            </div>
            <div className="mini-metric-strip" />
          </>
        )}
        {variant === "support" && (
          <>
            <div className="mini-ticket-stack">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-avatar-dot" />
          </>
        )}
        {variant === "review" && (
          <>
            <div className="mini-review-grid">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="mini-footer-chart" />
          </>
        )}
      </div>
    </div>
  );
}

// Converts a card name to a URL-safe slug
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Home page — renders hero + product panel + library
function HomePage() {
  const [activeTab, setActiveTab] = useState("data");
  const navigate = useNavigate();
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[1];

  return (
    <>
      <PromoPopup />
      <section className="hero">
        <div className="hero-copy">
          <Wordmark />
          <h1>Bangun apps & web pakai strategi growth dan psikologi user</h1>
          <p>
            Berawal sebagai konsultan growth & ERP, kami racik web dan aplikasi
            lewat lensa psikologi user. Dari visual asik untuk anak sampai lead
            magnet solid untuk korporat, semua dipikirin matang.
          </p>
          <p>
            Kita nggak asal ngoding. Semua dirancang pakai ilmu psikologi biar
            ngena di user, plus fondasi sistem growth & ERP yang pastinya bikin
            performa bisnis melesat tajam.
          </p>

          <ul className="hero-highlights" aria-label="Key benefits">
            {heroHighlights.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <button type="button" className="cta-button">
              Get started - free
            </button>
            <button type="button" className="ghost-button">
              Book a live walkthrough
            </button>
          </div>

          <div className="hero-links">
            <a href="/" onClick={(event) => event.preventDefault()}>
              <LinkIcon />
              MCP
            </a>
            <span className="hero-dot" />
            <a href="/" onClick={(event) => event.preventDefault()}>
              <PlayIcon />
              Watch a demo
            </a>
            <span className="hero-dot" />
            <a href="/" onClick={(event) => event.preventDefault()}>
              <HeadsetIcon />
              Talk to a human
            </a>
          </div>

          <div
            className="trust-strip"
            aria-label="Trusted by teams shipping weekly"
          >
            <span className="trust-label">Teams shipping weekly:</span>
            <div className="trust-logos">
              {trustLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-marquee-container">
            <div className="hero-marquee-track">
              {[
                { img: "/showcase-milktea.jpg", brand: "Milk Tea Series" },
                { img: "/showcase-zhengda.jpg", brand: "Zhengda" },
                { img: "/lib-signal-board.png", brand: "Signal Board" },
                { img: "/lib-flow-pilot.png", brand: "Flow Pilot" },
                { img: "/lib-warehouse-one.png", brand: "Warehouse One" },
                { img: "/lib-issue-radar.png", brand: "Issue Radar" },
                { img: "/lib-launch-deck.png", brand: "Launch Deck" },
                { img: "/news-hero-art.png", brand: "Builders" },
                { img: "/showcase-milktea.jpg", brand: "Milk Tea Series" },
                { img: "/showcase-zhengda.jpg", brand: "Zhengda" },
                { img: "/lib-signal-board.png", brand: "Signal Board" },
                { img: "/lib-flow-pilot.png", brand: "Flow Pilot" },
                { img: "/lib-warehouse-one.png", brand: "Warehouse One" },
                { img: "/lib-issue-radar.png", brand: "Issue Radar" },
                { img: "/lib-launch-deck.png", brand: "Launch Deck" },
                { img: "/news-hero-art.png", brand: "Builders" },
              ].map((item, idx) => (
                <div key={idx} className="hero-marquee-card">
                  <img
                    src={item.img}
                    alt={`Showcase ${item.brand}`}
                    className="hero-marquee-image"
                  />
                  <button type="button" className="cta-button hero-marquee-btn">
                    <img 
                      src={item.img} 
                      alt="" 
                      style={{ width: "24px", height: "24px", borderRadius: "6px", marginRight: "10px", objectFit: "cover", border: "1px solid rgba(0,0,0,0.1)" }} 
                    />
                    <span style={{ fontWeight: 500, marginRight: "6px" }}>Propose to</span> {item.brand}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="product-panel"
        style={{ "--panel-accent": currentTab.accent }}
      >
        <div className="tabs" role="tablist" aria-label="Product areas">
          {tabs.map((tab) => {
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

            <div className="panel-chips" aria-label="Top modules">
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
            <span className="library-kicker">Library</span>
            <h2 id="library-title">Galeri mahakarya portofolio agensi kami</h2>
          </div>
          <p>
            Berbagai hasil mahakarya dari tim Builders. Dari desain ERP
            interaktif sampai sistem operasi bisnis kompleks yang dirancang
            mengutamakan kemudahan navigasi dan psikologi pengguna.
          </p>
        </div>

        <div className="library-grid">
          {libraryCards.map((card) => (
            <article
              key={card.name}
              className="library-card"
              onClick={() => navigate("/portfolio/" + toSlug(card.name))}
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

      <section className="wide-marquee-section" aria-label="Large showcase gallery">
        <div className="wide-marquee-container">
          <div className="wide-marquee-track">
            {[
              { img: "/showcase-milktea.jpg", brand: "Milk Tea Series" },
              { img: "/showcase-zhengda.jpg", brand: "Zhengda" },
              { img: "/lib-signal-board.png", brand: "Signal Board" },
              { img: "/lib-flow-pilot.png", brand: "Flow Pilot" },
              { img: "/lib-warehouse-one.png", brand: "Warehouse One" },
              { img: "/lib-issue-radar.png", brand: "Issue Radar" },
              { img: "/lib-launch-deck.png", brand: "Launch Deck" },
              { img: "/news-hero-art.png", brand: "Builders" },
              { img: "/showcase-milktea.jpg", brand: "Milk Tea Series" },
              { img: "/showcase-zhengda.jpg", brand: "Zhengda" },
              { img: "/lib-signal-board.png", brand: "Signal Board" },
              { img: "/lib-flow-pilot.png", brand: "Flow Pilot" },
              { img: "/lib-warehouse-one.png", brand: "Warehouse One" },
              { img: "/lib-issue-radar.png", brand: "Issue Radar" },
              { img: "/lib-launch-deck.png", brand: "Launch Deck" },
              { img: "/news-hero-art.png", brand: "Builders" },
            ].map((item, idx) => (
              <div key={idx} className="wide-marquee-card">
                <img
                  src={item.img}
                  alt={`Showcase ${item.brand}`}
                  className="wide-marquee-image"
                />
                <button type="button" className="cta-button hero-marquee-btn">
                  <img 
                    src={item.img} 
                    alt="" 
                    style={{ width: "24px", height: "24px", borderRadius: "6px", marginRight: "10px", objectFit: "cover", border: "1px solid rgba(0,0,0,0.1)" }} 
                  />
                  <span style={{ fontWeight: 500, marginRight: "6px" }}>Propose to</span> <strong style={{ fontWeight: 800 }}>{item.brand}</strong>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popover rendered on /portfolio/:slug route, overlaid on home */}
      <Outlet />
    </>
  );
}

// Popover route — reads slug, finds card, renders RetroPopover
function PortfolioPopover() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const card = libraryCards.find((c) => toSlug(c.name) === slug) ?? null;

  return <RetroPopover app={card} onClose={() => navigate("/")} />;
}

// Apps page — wraps AppsList, passes navigate for popover slug routing
function AppsPage() {
  return <AppsList />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-shell">
      <div className="texture-rail" aria-hidden="true" />
      <div className="site-frame">
        <header className="topbar">
          <div className="topbar-left">
            <HeaderLogo />
            <nav className="topnav" aria-label="Primary">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
              >
                Platform
              </NavLink>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
              >
                Apps
              </NavLink>
              <NavLink
                to="/perks"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
              >
                Perks
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
              >
                News
              </NavLink>
              <NavLink
                to="/odoo"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
              >
                Odoo
              </NavLink>
              <div className="nav-dropdown-container">
                <a href="/" onClick={(event) => event.preventDefault()}>
                  Solutions <CaretIcon />
                </a>
                <div className="dropdown-menu">
                  <NavLink to="/solutions/growth" className={({ isActive }) => isActive ? "active-dropdown" : undefined}>Growth</NavLink>
                  <NavLink to="/solutions/research-website" className={({ isActive }) => isActive ? "active-dropdown" : undefined}>Research-based Website</NavLink>
                  <NavLink to="/solutions/web-apps-growth" className={({ isActive }) => isActive ? "active-dropdown" : undefined}>Web Apps Growth</NavLink>
                  <NavLink to="/solutions/odoo-implementation" className={({ isActive }) => isActive ? "active-dropdown" : undefined}>Odoo Implementation</NavLink>
                </div>
              </div>
              <a
                href="/"
                onClick={(event) => event.preventDefault()}
              >
                Docs
                <CaretIcon />
              </a>
            </nav>
          </div>
          <div className="topbar-right">
            <button type="button" className="cta-button topbar-cta">
              Start free
            </button>
            <button type="button" className="icon-button" aria-label="Search">
              <SearchIcon />
            </button>
            <button type="button" className="icon-button" aria-label="Messages">
              <MessageIcon />
            </button>
            <button
              type="button"
              className="icon-button avatar-button"
              aria-label="Account"
            >
              <UserIcon />
            </button>
            <button
              type="button"
              className="hamburger-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((m) => !m)}
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="icon-inline"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="icon-inline"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {menuOpen && (
          <div
            className="mobile-nav-overlay"
            onClick={() => setMenuOpen(false)}
          >
            <nav
              className="mobile-nav"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Platform
              </NavLink>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Apps
              </NavLink>
              <NavLink
                to="/perks"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Perks
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                News
              </NavLink>
              <NavLink
                to="/odoo"
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Odoo
              </NavLink>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                }}
              >
                Docs
              </a>
              <div className="mobile-nav-cta">
                <button
                  type="button"
                  className="cta-button"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start free
                </button>
              </div>
            </nav>
          </div>
        )}

        <Routes>
          {/* Home — with nested popover route so layout stays intact */}
          <Route path="/" element={<MainShell wide={false} />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio/:slug" element={<HomePageWithPopover />} />
          </Route>

          {/* Solutions */}
          <Route path="/solutions" element={<MainShell wide={true} />}>
            <Route index element={<SolutionsPage />} />
            <Route path=":step" element={<SolutionsPage />} />
          </Route>

          {/* Odoo */}
          <Route path="/odoo" element={<MainShell wide={false} />}>
            <Route index element={<OdooPage />} />
            <Route path="portfolio/:slug" element={<OdooPageWithPopover />} />
          </Route>

          {/* Apps */}
          <Route path="/apps" element={<MainShell wide={true} />}>
            <Route index element={<AppsPage />} />
            <Route path=":slug" element={<AppsPageWithPopover />} />
          </Route>

          {/* Perks */}
          <Route
            path="/perks"
            element={
              <main className="content content-wide">
                <PerksPage />
              </main>
            }
          />

          {/* News */}
          <Route
            path="/news"
            element={
              <main className="content content-wide">
                <NewsPage />
              </main>
            }
          />
          <Route
            path="/news/:slug"
            element={<NewsArticlePage />}
          />
        </Routes>
      </div>
    </div>
  );
}

// Shared layout shell that sets content class based on 'wide' prop
function MainShell({ wide }) {
  return (
    <main className={`content${wide ? " content-wide" : ""}`}>
      <Outlet />
    </main>
  );
}

// Home with popover — renders home content plus popover overlay
function HomePageWithPopover() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const card = libraryCards.find((c) => toSlug(c.name) === slug) ?? null;

  return (
    <>
      <HomePage />
      <RetroPopover app={card} onClose={() => navigate("/")} />
    </>
  );
}

// Apps page with popover overlay
function AppsPageWithPopover() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // mockApps are in AppsList — we look up by slug from name
  const mockApps = [
    {
      id: 1,
      name: "Signal board",
      tagline: "Realtime funnels and cohort health analytics cockpit",
      image: "/lib-signal-board.png",
      upvotes: 428,
      category: "Analytics",
    },
    {
      id: 2,
      name: "Flow pilot",
      tagline: "Onboarding command center for activation checkpoints",
      image: "/lib-flow-pilot.png",
      upvotes: 315,
      category: "Analytics",
    },
    {
      id: 3,
      name: "Warehouse one",
      tagline: "Data workspace for models, syncs, and QA",
      image: "/lib-warehouse-one.png",
      upvotes: 289,
      category: "Productivity",
    },
    {
      id: 4,
      name: "Issue radar",
      tagline: "Debug investigation hub for alerts and traces",
      image: "/lib-issue-radar.png",
      upvotes: 194,
      category: "Developer Tools",
    },
    {
      id: 5,
      name: "Launch deck",
      tagline: "Feature rollout control and segment impact reads",
      image: "/lib-launch-deck.png",
      upvotes: 156,
      category: "Developer Tools",
    },
  ];
  const app = mockApps.find((a) => toSlug(a.name) === slug) ?? null;

  return (
    <>
      <AppsPage />
      <RetroPopover app={app} onClose={() => navigate("/apps")} />
    </>
  );
}

export default App;
