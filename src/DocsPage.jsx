import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const docsData = {
  "privacy-policy": {
    number: 1,
    title: "Privacy Policy",
    bannerTitle: "Kebijakan Privasi",
    bannerSubtitle: "Transparansi dan perlindungan data Anda adalah prioritas utama kami.",
    accent: "#377cf6",
    sections: [
      {
        title: "1. Pengumpulan Data Informasi",
        content: "Kami mengumpulkan informasi pribadi yang Anda berikan secara langsung saat berinteraksi dengan layanan kami, seperti nama, alamat email, nomor telepon, dan detail proyek. Selain itu, kami juga dapat mengumpulkan data non-pribadi secara otomatis seperti alamat IP, tipe browser, dan log aktivitas guna meningkatkan pengalaman pengguna."
      },
      {
        title: "2. Penggunaan Data",
        content: "Informasi yang dikumpulkan digunakan untuk:\n• Menyediakan dan mengelola layanan yang diminta.\n• Mengembangkan dan mengoptimalkan kualitas produk dan fitur.\n• Mengirimkan pemberitahuan penting terkait perubahan layanan, keamanan, atau administratif.\n• Melakukan penelitian dan analisis untuk memahami perilaku pengguna."
      },
      {
        title: "3. Pembagian dan Pengungkapan Data",
        content: "Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Data mungkin dibagikan kepada mitra penyedia layanan (misalnya hosting atau payment gateway) yang terikat oleh perjanjian kerahasiaan ketat, atau jika diwajibkan oleh hukum yang berlaku."
      },
      {
        title: "4. Keamanan Data",
        content: "Kami menggunakan standar keamanan industri termasuk enkripsi SSL, perlindungan firewall, dan prosedur kontrol akses untuk melindungi data Anda dari akses, pengungkapan, pengubahan, dan perusakan yang tidak sah."
      }
    ]
  },
  "terms-of-service": {
    number: 2,
    title: "Terms of Service",
    bannerTitle: "Syarat & Ketentuan Layanan",
    bannerSubtitle: "Aturan main yang jelas untuk menciptakan ekosistem digital yang sehat.",
    accent: "#f3ba3f",
    sections: [
      {
        title: "1. Penerimaan Syarat",
        content: "Dengan menggunakan layanan yang kami tawarkan, baik melalui website, aplikasi, maupun bentuk platform lainnya, Anda menyatakan bahwa Anda telah membaca, memahami, dan setuju untuk terikat dengan seluruh syarat dan ketentuan ini."
      },
      {
        title: "2. Hak Kekayaan Intelektual",
        content: "Seluruh konten, desain, antarmuka, algoritma, dan kode sumber yang kami buat adalah milik kami secara sah. Anda diberikan lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan untuk menggunakan layanan sesuai dengan paket langganan atau proyek yang telah disepakati."
      },
      {
        title: "3. Kewajiban Pengguna",
        content: "Pengguna dilarang keras untuk:\n• Memanfaatkan layanan kami untuk aktivitas ilegal, penipuan, atau melanggar hak pihak lain.\n• Mencoba melakukan akses tidak sah (hacking, reverse engineering) ke sistem kami.\n• Mendistribusikan malware, spam, atau materi berbahaya lainnya melalui infrastruktur kami."
      },
      {
        title: "4. Batasan Tanggung Jawab",
        content: "Layanan kami disediakan secara 'sebagaimana adanya'. Kami tidak memberikan garansi mutlak atas ketersediaan layanan tanpa gangguan. Tanggung jawab finansial kami terhadap klaim kerusakan maksimal sebatas jumlah biaya langganan yang Anda bayarkan dalam 3 bulan terakhir."
      }
    ]
  },
  "cooperation-agreement": {
    number: 3,
    title: "Cooperation Agreement",
    bannerTitle: "Perjanjian Kerjasama (SLA)",
    bannerSubtitle: "Komitmen profesional kami untuk keberhasilan bisnis Anda.",
    accent: "#10b981",
    sections: [
      {
        title: "1. Ruang Lingkup Pekerjaan",
        content: "Detail spesifik mengenai fitur, timeline, dan deliverable akan dituangkan dalam dokumen Scope of Work (SOW) yang terpisah. Segala penambahan fitur di luar SOW akan dianggap sebagai Change Request dan dikenakan penyesuaian biaya serta waktu."
      },
      {
        title: "2. Service Level Agreement (SLA)",
        content: "Kami menjamin uptime infrastruktur server (jika menggunakan layanan hosting kami) sebesar 99.9% per bulan. Tim dukungan teknis akan memberikan respon awal (First Response Time) maksimal 1x24 jam pada hari kerja untuk insiden dengan prioritas tinggi."
      },
      {
        title: "3. Revisi dan Pemeliharaan",
        content: "Paket pengembangan proyek ('By Project') mencakup masa garansi bug-fixing selama 30 hari setelah serah terima awal (UAT). Setelah masa garansi habis, pemeliharaan akan masuk ke dalam skema kontrak Maintenance terpisah atau biaya per insiden."
      },
      {
        title: "4. Pemutusan Kerjasama",
        content: "Kerjasama dapat dihentikan oleh salah satu pihak dengan pemberitahuan tertulis 30 hari sebelumnya. Hak atas hasil kerja akhir akan diserahkan setelah seluruh kewajiban pembayaran terpenuhi 100%."
      }
    ]
  },
  "refund-policy": {
    number: 4,
    title: "Refund Policy",
    bannerTitle: "Kebijakan Pengembalian Dana",
    bannerSubtitle: "Prosedur dan jaminan finansial yang adil bagi kedua belah pihak.",
    accent: "#b461f3",
    sections: [
      {
        title: "1. Uang Muka (Down Payment)",
        content: "Setiap proyek pengembangan memerlukan Down Payment (DP) minimum 50% sebelum tahap desain dan pengembangan dimulai. Uang muka ini bersifat **NON-REFUNDABLE** (tidak dapat dikembalikan) jika pembatalan proyek dilakukan sepihak oleh klien setelah proses pengerjaan berjalan."
      },
      {
        title: "2. Langganan Bulanan (Subscription)",
        content: "Pembatalan layanan berlangganan dapat dilakukan kapan saja tanpa penalti untuk bulan berikutnya. Namun, biaya langganan yang telah dibayarkan untuk siklus bulan berjalan tidak dapat dikembalikan atau di-prorata."
      },
      {
        title: "3. Klaim Pengembalian Dana Khusus",
        content: "Pengembalian dana hanya dipertimbangkan jika:\n• Kami secara sepihak membatalkan proyek sebelum dimulai.\n• Kami gagal secara fatal memberikan deliverable dasar seperti yang tertulis dalam dokumen kesepakatan akhir (SOW).\n• Pengembalian akan diproses maksimal 14 hari kerja setelah disetujui."
      }
    ]
  }
};

const docKeys = Object.keys(docsData);

export default function DocsPage() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  const currentDocKey = docId && docsData[docId] ? docId : "privacy-policy";
  const currentData = docsData[currentDocKey];

  useEffect(() => {
    if (!docId || !docsData[docId]) {
      navigate("/docs/privacy-policy", { replace: true });
    }
  }, [docId, navigate]);

  if (!currentData) return null;

  return (
    <section className="apps-page-layout" style={{ gridTemplateColumns: "220px minmax(0, 1fr)" }}>
      {/* Left Sidebar Menu */}
      <aside className="apps-left-sidebar" aria-label="Docs navigation">
        <h3 className="left-sidebar-title" style={{ marginBottom: '16px' }}>Documentation</h3>
        <div className="tags-list" style={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
          {docKeys.map((key) => {
            const doc = docsData[key];
            const isActive = key === currentDocKey;
            return (
              <button
                key={key}
                className={`mini-tag-btn ${isActive ? "active" : ""}`}
                style={{ height: 'auto', padding: '12px 14px', textAlign: 'left', display: 'flex', gap: '8px' }}
                onClick={() => navigate(`/docs/${key}`)}
                aria-current={isActive ? "page" : undefined}
              >
                <span style={{ color: isActive ? doc.accent : undefined }}>{doc.number}.</span>
                <span style={{ whiteSpace: 'normal', lineHeight: '1.3' }}>{doc.title}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Right Content */}
      <div className="apps-main-feed" ref={contentRef} style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Banner Section */}
        <div className="panel-card" style={{ "--panel-accent": currentData.accent, display: 'block', gridTemplateColumns: 'none' }}>
          <div className="panel-copy" style={{ paddingBottom: '32px' }}>
            <span className="panel-eyebrow" style={{ color: currentData.accent }}>Legal & Policy</span>
            <h2 style={{ fontSize: '42px', letterSpacing: '-0.03em', marginTop: '8px', marginBottom: '16px' }}>{currentData.bannerTitle}</h2>
            <p style={{ fontSize: '18px', maxWidth: '100%', lineHeight: 1.5 }}>{currentData.bannerSubtitle}</p>
          </div>
        </div>

        {/* Text Heavy Content */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "40px", border: "1px solid #d9d1c2", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {currentData.sections.map((sec, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#11222b", marginBottom: "16px", borderBottom: "2px solid #f1f3f5", paddingBottom: "12px" }}>
                  {sec.title}
                </h3>
                <div style={{ fontSize: "16px", lineHeight: 1.7, color: "#32425b", whiteSpace: "pre-wrap" }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
