import { useState } from 'react'

const newsFaq = [
  {
    title: 'What is this?',
    body: 'Builders for Startups membantu founder dan tim kecil merancang produk yang lebih matang sejak hari pertama, lengkap dengan kredit software, partner perks, dan support implementasi.',
    bullets: ['Untuk startup tahap awal', 'Fokus product-led teams', 'Benefit bisa dipakai lintas stack'],
  },
  {
    title: 'How to apply',
    body: 'Daftar akun, ceritakan produk yang sedang dibangun, lalu pilih area bantuan yang paling dibutuhkan supaya tim kami bisa menilai kecocokan program dengan cepat.',
    bullets: ['Buat akun Builders', 'Isi startup profile', 'Tunggu review via email'],
  },
  {
    title: 'Who is eligible?',
    body: 'Program ini cocok untuk startup muda yang masih dalam fase membangun fondasi produk dan butuh leverage lebih cepat untuk shipping.',
    bullets: ['Usia startup di bawah 2 tahun', 'Pendanaan di bawah $5 juta', 'Tim masih lean dan builder-heavy'],
  },
  {
    title: 'Fine print',
    body: 'Beberapa benefit punya masa aktif dan ketentuan partner masing-masing. Semua detail tetap transparan dari awal sebelum Anda claim benefit.',
    bullets: ['Kredit berlaku 12 bulan', 'Tidak bisa digabung semua promo', 'Subject to partner approval'],
  },
]

const benefitCards = [
  {
    id: 'cash',
    eyebrow: 'Funding Fuel',
    title: '$50,000 product credits',
    desc: 'Dipakai untuk event volume besar, insight board, support tooling, dan observability tanpa bikin burn rate ngaco.',
    chips: ['Credits', '12 months'],
    image: '/news-card-cash-art.png',
  },
  {
    id: 'merch',
    eyebrow: 'Founder Energy',
    title: '$1,500 team swag',
    desc: 'Starter pack buat bikin tim kecil terasa seperti movement: tees, stickers, launch packs, dan conference extras.',
    chips: ['Swag', 'Team kit'],
    image: '/news-card-merch-art.png',
  },
  {
    id: 'status',
    eyebrow: 'Reliability',
    title: '$1,500 incident support',
    desc: 'Kalau ada chaos saat launch, Anda dapat room bernapas lebih besar buat tooling incident dan ritual operasionalnya.',
    chips: ['Incident', 'Ops'],
    image: '/news-card-status-art.png',
  },
  {
    id: 'sdk',
    eyebrow: 'Build Faster',
    title: '50% off SDK workflows',
    desc: 'Percepat API docs, client generation, dan setup integration supaya engineer fokus ke problem inti, bukan plumbing.',
    chips: ['SDK', 'Automation'],
    image: '/news-card-sdk-art.png',
  },
  {
    id: 'search',
    eyebrow: 'AI Search',
    title: '$5,000 search infra credit',
    desc: 'Untuk tim yang bangun experience AI, credit ini bantu ngetes retrieval, ranking, dan query scale tanpa takut mahal di awal.',
    chips: ['Search', 'AI stack'],
    image: '/news-card-search-art.png',
  },
  {
    id: 'docker',
    eyebrow: 'Infra Boost',
    title: '$5,000 build pipeline credit',
    desc: 'Remote caching, container acceleration, dan pipeline lebih ngebut buat tim yang push berkali-kali sehari.',
    chips: ['Docker', 'CI/CD'],
    image: '/news-card-docker-art.png',
  },
]

function ChevronIcon({ open = false }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`icon-inline news-chevron${open ? ' open' : ''}`}>
      <path d="M4 6.5 8 10l4-3.5" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline news-spark-icon">
      <path d="M8 1.8 9.4 6.6l4.8 1.4-4.8 1.4L8 14.2 6.6 9.4 1.8 8l4.8-1.4z" />
    </svg>
  )
}

export default function NewsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <section className="news-page" aria-labelledby="news-page-title">
      <div className="news-header-row">
        <div>
          <span className="library-kicker">News</span>
          <h1 id="news-page-title">Builders for startups</h1>
        </div>
        <div className="news-header-actions">
          <button type="button" className="ghost-button">
            See all programs
          </button>
          <button type="button" className="cta-button">
            Apply now
          </button>
        </div>
      </div>

      <div className="news-board">
        <aside className="news-sidebar" aria-label="Program details">
          <div className="news-sidebar-card">
            <span className="news-sidebar-kicker">Program details</span>
            <div className="news-accordion-list">
              {newsFaq.map((section, index) => {
                const isOpen = openFaqIndex === index

                return (
                  <section key={section.title} className={`news-accordion-item${isOpen ? ' open' : ''}`}>
                    <button
                      type="button"
                      className="news-accordion-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    >
                      <span>{section.title}</span>
                      <ChevronIcon open={isOpen} />
                    </button>

                    {isOpen ? (
                      <div className="news-accordion-panel">
                        <p>{section.body}</p>
                        <ul className="feature-list news-accordion-points">
                          {section.bullets.map((item) => (
                            <li key={item}>
                              <SparkIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </section>
                )
              })}
            </div>
          </div>
        </aside>

        <div className="news-main">
          <section className="news-hero-panel">
            <div className="news-hero-copy">
              <span className="news-hero-eyebrow">Startups program</span>
              <h2>Partner perks dan launch support untuk tim kecil yang pengen ship seperti tim besar</h2>
              <p>
                Formatnya terinspirasi dari editorial launch board, tapi seluruh visualnya tetap pakai bahasa Builders:
                hangat, retro-clean, tegas di border, dan playful di aksen.
              </p>

              <div className="panel-chips" aria-label="Program benefits">
                <span className="panel-chip">Product credits</span>
                <span className="panel-chip">Partner offers</span>
                <span className="panel-chip">Founder support</span>
                <span className="panel-chip">Launch tooling</span>
              </div>

              <div className="trust-strip news-trust-strip" aria-label="Included perks">
                <span className="trust-label">Included:</span>
                <div className="trust-logos">
                  <span>$50k credits</span>
                  <span>$12k partner perks</span>
                  <span>$1.5k merch</span>
                </div>
              </div>
            </div>
          </section>

          <section className="news-benefit-grid" aria-label="Program perks">
            {benefitCards.map((card) => (
              <article key={card.id} className="library-card news-benefit-card">
                <div className="news-card-media">
                  <img src={card.image} alt={card.title} className="news-benefit-bg" />
                </div>

                <div className="library-card-ribbon news-card-ribbon">
                  <strong>{card.title}</strong>
                  <span>{card.eyebrow}</span>
                </div>

                <div className="library-card-meta news-card-meta">
                  <p>{card.desc}</p>
                  <div className="panel-chips">
                    {card.chips.map((chip) => (
                      <span key={chip} className="panel-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}
