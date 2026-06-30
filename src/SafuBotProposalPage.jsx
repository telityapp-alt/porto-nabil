import { Link } from "react-router-dom";
import "./SafuBotProposal.css";

function SafuBotProposalPage() {
  return (
    <div className="safubot-page">
      {/* Hero */}
      <section className="safubot-hero">
        <div className="safubot-hero-content">
          <div className="hero-badge">Proposal Website Redesign</div>
          <h1>SafuBot Website Redesign</h1>
          <p className="hero-subtitle">Customer Experience yang Menang</p>

          <div className="hero-mockup-section">
            <div className="mockup-wrapper">
              <img
                src="/safubot-home.png"
                alt="SafuBot Website Mockup"
                className="hero-mockup-image"
              />
            </div>
          </div>

          <div className="proposal-meta">
            <div className="meta-item">
              <span className="meta-label">Prepared for</span>
              <span className="meta-value">SafuBot Team</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Date</span>
              <span className="meta-value">June 26, 2026</span>
            </div>
          </div>
          <div className="consultant-card">
            <div className="consultant-title">Freelance Web Consultant</div>
            <div className="consultant-name">M Nabil Azra</div>
            <div className="consultant-contacts">
              <a href="mailto:nabilazra1234@gmail.com">
                nabilazra1234@gmail.com
              </a>
              <a href="https://wa.me/6283866983323">083866983323 (WhatsApp)</a>
              <a
                href="https://buildwithazra.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                buildwithazra.pages.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="safubot-section section-gap">
        <div className="section-card">
          <div className="section-header">
            <h2>Customer Experience Gap</h2>
            <p className="section-tagline">
              SafuBot: Bisnis Berkualitas, Digital Tidak Seberapa
            </p>
          </div>

          <div className="reality-box">
            <h3>Realitas Sekarang</h3>
            <div className="reality-grid">
              <div className="reality-item good">
                <span className="reality-icon">✓</span>
                <p>
                  SafuBot punya positioning unik: fun, animation-first,
                  psychology-driven
                </p>
              </div>
              <div className="reality-item good">
                <span className="reality-icon">✓</span>
                <p>
                  Quality service: dokter berpengalaman, metode modern, care
                  excellence
                </p>
              </div>
              <div className="reality-item bad">
                <span className="reality-icon">✗</span>
                <p>Tapi website: hanya link tree (social media buttons)</p>
              </div>
            </div>
          </div>

          <div className="problem-list">
            <h4>Digital presence lemah:</h4>
            <div className="problem-items">
              <div className="problem-item">
                <span className="x-mark">❌</span>
                <span>No hype generation (bland, forgettable)</span>
              </div>
              <div className="problem-item">
                <span className="x-mark">❌</span>
                <span>No trust signals (credentials tersembunyi)</span>
              </div>
              <div className="problem-item">
                <span className="x-mark">❌</span>
                <span>No engagement tools (anxious parents bounce)</span>
              </div>
              <div className="problem-item">
                <span className="x-mark">❌</span>
                <span>No differentiation visible (compete on price only)</span>
              </div>
            </div>
          </div>

          <div className="insight-callout">
            <strong>Gap:</strong> Kualitas bisnis &gt;&gt; Web presence = Hype
            tidak dapat, leads lost daily
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="safubot-section">
        <div className="section-card">
          <div className="section-header">
            <h2>Kompetitor Juga Lemah = Opportunity</h2>
            <p className="section-tagline">
              Audit 5 kompetitor circumcision Jakarta:
            </p>
          </div>

          <div className="competitor-table-wrapper">
            <table className="competitor-table">
              <thead>
                <tr>
                  <th>Klinik</th>
                  <th>Website Quality</th>
                  <th>CX Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rumah Sunatan</td>
                  <td>Medical focus, generic template</td>
                  <td className="score-cell">2/10</td>
                </tr>
                <tr>
                  <td>Klinik Modern</td>
                  <td>No kid-friendly design</td>
                  <td className="score-cell">3/10</td>
                </tr>
                <tr>
                  <td>Sunatan Laser</td>
                  <td>No educational content</td>
                  <td className="score-cell">2/10</td>
                </tr>
                <tr>
                  <td>Klinik Khitan</td>
                  <td>Poor mobile experience</td>
                  <td className="score-cell">2/10</td>
                </tr>
                <tr className="highlight-row">
                  <td>
                    <strong>SafuBot (now)</strong>
                  </td>
                  <td>Link tree only</td>
                  <td className="score-cell score-bad">1/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="insight-callout callout-success">
            <strong>Insight:</strong> SEMUA kompetitor lemah. SafuBot bisa WIN
            dengan standout customer experience.
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="safubot-section section-solution">
        <div className="section-card">
          <div className="section-header">
            <h2>Customer Experience Solution</h2>
            <p className="section-tagline">
              Focus: Parent Psychology (Trust + Fear Management)
            </p>
          </div>

          <div className="fear-box">
            <h3>Target: Orang tua dengan 3 fears utama</h3>
            <div className="fear-grid">
              <div className="fear-card">
                <div className="fear-number">1</div>
                <div className="fear-content">
                  <strong>Rasa sakit</strong>
                  <p>"Apakah anak kesakitan?"</p>
                </div>
              </div>
              <div className="fear-card">
                <div className="fear-number">2</div>
                <div className="fear-content">
                  <strong>Trauma psikologis</strong>
                  <p>"Bagaimana jika trauma?"</p>
                </div>
              </div>
              <div className="fear-card">
                <div className="fear-number">3</div>
                <div className="fear-content">
                  <strong>Komplikasi</strong>
                  <p>"Apakah prosedur aman?"</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="pillars-title">4 Customer Experience Pillars</h3>

          <div className="pillars-grid">
            <div className="pillar-card pillar-1">
              <div className="pillar-header">
                <div className="pillar-number">1</div>
                <h4>Trust Signals (Credibility First)</h4>
              </div>
              <ul className="pillar-list">
                <li>
                  Doctor profiles PROMINENT (foto, credentials, experience)
                </li>
                <li>Certifications visible (IDI, PABI badges)</li>
                <li>Video testimonials from real parents</li>
                <li>5-star reviews aggregate (social proof)</li>
              </ul>
            </div>

            <div className="pillar-card pillar-2">
              <div className="pillar-header">
                <div className="pillar-number">2</div>
                <h4>Fear Management (Psychology-Driven)</h4>
              </div>
              <ul className="pillar-list">
                <li>Pain Management Visual Guide (animated, step-by-step)</li>
                <li>Virtual Facility Tour (reduce fear of unknown)</li>
                <li>Recovery Timeline (day-by-day expectations)</li>
                <li>FAQ comprehensive (answer concerns proactively)</li>
              </ul>
            </div>

            <div className="pillar-card pillar-3">
              <div className="pillar-header">
                <div className="pillar-number">3</div>
                <h4>Interactive Tools (Give Control)</h4>
              </div>
              <ul className="pillar-list">
                <li>Readiness Assessment → email capture</li>
                <li>Cost Calculator → transparent pricing</li>
                <li>Online Booking → capture after-hours leads</li>
              </ul>
              <div className="tool-preview">
                <div className="preview-label">
                  Readiness Assessment Tool Interface
                </div>
                <div className="tool-mockup">
                  <img
                    src="/safubot-readiness.png"
                    alt="Readiness Assessment Tool"
                    className="mockup-image"
                  />
                </div>
              </div>
            </div>

            <div className="pillar-card pillar-4">
              <div className="pillar-header">
                <div className="pillar-number">4</div>
                <h4>Fun Brand Personality (Differentiation)</h4>
              </div>
              <ul className="pillar-list">
                <li>SafuBot character prominent (friendly, playful mascot)</li>
                <li>Animation elements (NOT stock medical photos)</li>
                <li>Color psychology: soft blue (trust), green (health)</li>
                <li>Copy tone: warm, supportive (not clinical/instructive)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="safubot-section">
        <div className="section-card">
          <div className="section-header">
            <h2>SafuBot vs Competitors</h2>
            <p className="section-tagline">Customer Experience Comparison</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Kompetitor (Current)</th>
                  <th>SafuBot (After Redesign)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> No doctor profiles
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Prominent doctor
                    profiles + video intro
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> Generic medical template
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Fun, animation-first
                    brand
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> No interactive tools
                  </td>
                  <td>
                    <span className="check-mark">✅</span> 3 interactive tools
                    (assess, calc, book)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> No fear management
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Pain guide, virtual
                    tour, timeline
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> Hidden testimonials
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Video testimonials
                    front-center
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> Price ambiguity
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Transparent pricing
                    calculator
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> Phone-only booking
                  </td>
                  <td>
                    <span className="check-mark">✅</span> 24/7 online booking
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="x-mark">❌</span> No post-care
                  </td>
                  <td>
                    <span className="check-mark">✅</span> Recovery tracker
                    (retention)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="insight-callout callout-success">
            <strong>Result:</strong> SafuBot creates hype through superior
            customer experience
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="safubot-section section-deliverables">
        <div className="section-card">
          <div className="section-header">
            <h2>What You Get</h2>
            <p className="section-tagline">
              Focus: Customer experience foundation yang build trust & generate
              hype
            </p>
          </div>

          <div className="deliverables-box">
            <h3>Core Deliverables</h3>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <div className="deliverable-icon">🌐</div>
                <div className="deliverable-content">
                  <strong>Mobile-First Website</strong>
                  <p>10-15 pages optimized untuk parent journey</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">🏆</div>
                <div className="deliverable-content">
                  <strong>Trust Elements</strong>
                  <p>
                    Doctor profiles, credentials, certifications, testimonials
                  </p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">🛡️</div>
                <div className="deliverable-content">
                  <strong>Fear Management</strong>
                  <p>Pain guide, virtual tour, recovery timeline, FAQ</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">🎮</div>
                <div className="deliverable-content">
                  <strong>Interactive Tools</strong>
                  <p>Readiness Assessment, Cost Calculator, Online Booking</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">🎨</div>
                <div className="deliverable-content">
                  <strong>Fun Brand Design</strong>
                  <p>SafuBot character integration, color psychology</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">📝</div>
                <div className="deliverable-content">
                  <strong>Content Strategy</strong>
                  <p>5+ blog posts (parent concerns, tips, guides)</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">📧</div>
                <div className="deliverable-content">
                  <strong>Email Automation</strong>
                  <p>Pre/post procedure sequences (5-7 emails)</p>
                </div>
              </div>
              <div className="deliverable-item">
                <div className="deliverable-icon">⚡</div>
                <div className="deliverable-content">
                  <strong>Technical Foundation</strong>
                  <p>Fast loading, mobile-optimized, SEO basics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="no-promise-box">
            <h3>What Foundational We Built From The First</h3>
            <p className="foundation-intro">
              Kami build <strong>fondasi yang kokoh</strong> untuk mencapai
              goals ini — bukan promise absolut, tapi{" "}
              <strong>building blocks</strong> yang membuka jalan untuk
              pertumbuhan:
            </p>
            <div className="no-promise-list">
              <div className="no-promise-item">
                <span className="check-mark">✓</span>
                <div>
                  <strong>SEO Foundation:</strong> Technical setup, content
                  structure, keyword targeting —{" "}
                  <em>but top 3 rankings take 6-12 months + ongoing content</em>
                </div>
              </div>
              <div className="no-promise-item">
                <span className="check-mark">✓</span>
                <div>
                  <strong>GEO Readiness:</strong> Schema markup, local signals,
                  answer formats —{" "}
                  <em>but AI recommendations are emerging, unpredictable</em>
                </div>
              </div>
              <div className="no-promise-item">
                <span className="check-mark">✓</span>
                <div>
                  <strong>Conversion Tools:</strong> Assessment, calculator,
                  booking flow —{" "}
                  <em>
                    but lead numbers depend on traffic + internal follow-up
                  </em>
                </div>
              </div>
              <div className="no-promise-item">
                <span className="check-mark">✓</span>
                <div>
                  <strong>Growth Infrastructure:</strong> Content system, email
                  automation, analytics —{" "}
                  <em>
                    but viral growth requires consistent content creation from
                    your team
                  </em>
                </div>
              </div>
            </div>
            <p className="no-promise-note">
              Yang kami deliver: <strong>Foundation yang ENABLES growth</strong>
              . Execution berkelanjutan (content, ads, engagement) adalah
              penggerak utama — kami build platform, Anda drive the engine.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="safubot-section section-pricing">
        <div className="section-card">
          <div className="section-header">
            <h2>Investment Packages</h2>
            <p className="section-tagline">
              Custom pricing discussion. Guaranteed 200% lebih murah dari
              agency.
            </p>
          </div>

          <div className="pricing-highlight-box">
            <div className="highlight-icon">💰</div>
            <h3>Freelance = Hemat Drastis</h3>
            <p>
              Freelance pricing saya{" "}
              <strong>dijamin 200% lebih murah dari agency</strong> dengan
              kualitas yang sama atau lebih baik. Let's discuss your budget.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card pricing-single">
              <div className="pricing-header">
                <h3>Custom Package</h3>
                <div className="pricing-amount">Let's Discuss</div>
              </div>
              <p className="pricing-tagline">
                Tailored to your needs and budget
              </p>
              <ul className="pricing-features">
                <li>
                  <strong>Essential tier:</strong> Responsive website (8-10
                  pages), trust elements, readiness assessment, online booking,
                  basic SEO, hosting + 6mo maintenance
                </li>
                <li>
                  <strong>Complete tier:</strong> Essential + Admin dashboard,
                  pain management guide (animated), virtual tour, cost
                  calculator, email automation, 10+ blog posts, Google Business
                  optimization
                </li>
                <li>
                  <strong>Premium tier:</strong> Complete + Recovery tracker
                  dashboard (web app), activity planner, advanced content (20+
                  pages), referral automation, SMS reminders, 3mo content
                  marketing, analytics deep-dive
                </li>
              </ul>
              <div className="pricing-best-for">
                <strong>Approach:</strong> We'll discuss your goals, budget, and
                priorities to craft the right mix of features. Start lean and
                scale, or go all-in from day one — your call.
              </div>
            </div>
          </div>

          <div className="pricing-details">
            <div className="detail-row">
              <strong>Recurring Costs:</strong>
              <span>Rp 0/month (Cloudflare + Supabase free tier)</span>
            </div>
            <div className="detail-row">
              <strong>Maintenance 6 months:</strong>
              <span>Included</span>
            </div>
            <div className="detail-row">
              <strong>After 6 months:</strong>
              <span>
                Self-manage (training provided) atau extend (optional)
              </span>
            </div>
            <div className="detail-row">
              <strong>Timeline:</strong>
              <span>8-12 weeks (depends on package)</span>
            </div>
            <div className="detail-row">
              <strong>Milestone payments:</strong>
              <span>40% upfront | 30% design approval | 30% launch</span>
            </div>
          </div>

          <div className="negotiable-box">
            <h4>Why Discuss Pricing Directly?</h4>
            <ul>
              <li>
                Freelance pricing = fleksibel, disesuaikan dengan budget Anda
              </li>
              <li>Custom package (mix-and-match features sesuai kebutuhan)</li>
              <li>Payment terms negotiable (installment options available)</li>
              <li>
                <strong>Guaranteed: 200% lebih murah dari agency quote</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="safubot-section section-cta">
        <div className="section-card cta-card">
          <h2>Ready to Build Winning Customer Experience?</h2>
          <div className="cta-contacts">
            <a href="https://wa.me/6283866983323" className="cta-contact-card">
              <div className="contact-icon">📞</div>
              <div className="contact-content">
                <strong>WhatsApp: 083866983323</strong>
                <p>Fast response, casual discussion, no obligation</p>
              </div>
            </a>
            <a
              href="mailto:nabilazra1234@gmail.com"
              className="cta-contact-card"
            >
              <div className="contact-icon">📧</div>
              <div className="contact-content">
                <strong>Email: nabilazra1234@gmail.com</strong>
                <p>Send brief, get custom proposal</p>
              </div>
            </a>
            <a
              href="https://buildwithazra.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-contact-card"
            >
              <div className="contact-icon">🌐</div>
              <div className="contact-content">
                <strong>Portfolio: buildwithazra.pages.dev</strong>
                <p>See past work & case studies</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="safubot-section section-faq">
        <div className="section-card">
          <h2>Common Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">Q: Apakah ada guarantee ranking?</div>
              <div className="faq-a">
                A: Tidak. SEO butuh waktu + banyak faktor. Saya build
                foundation, bukan guarantee hasil instan.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Q: Berapa lama dapat leads?</div>
              <div className="faq-a">
                A: Website live = immediate (booking aktif). Organic growth
                (SEO/referrals) butuh 3-6 bulan.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Q: Apakah source code milik saya?</div>
              <div className="faq-a">
                A: Ya, 100%. Full ownership. Anda bebas manage sendiri atau hire
                developer lain.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Q: Bisakah nego harga?</div>
              <div className="faq-a">
                A: Absolutely. Freelance pricing = fleksibel. Kita diskusi
                budget Anda, adjust scope sesuai kemampuan.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="safubot-section section-closing">
        <div className="section-card closing-card">
          <div className="closing-content">
            <p>
              SafuBot punya positioning unik. Website sekarang tidak
              mencerminkan itu. Kompetitor lemah di customer experience. Window
              untuk WIN dengan standout presence.
            </p>
            <p>
              <strong>Deliverable:</strong> Foundation yang build trust &
              generate hype. Execution berkelanjutan, tapi fundasi kuat = growth
              lebih mudah.
            </p>
          </div>
          <div className="closing-signature">
            <div className="signature-name">
              M Nabil Azra — Freelance Web Consultant
            </div>
            <div className="signature-contacts">
              WhatsApp: 083866983323 | Email: nabilazra1234@gmail.com
              <br />
              Portfolio: buildwithazra.pages.dev | June 26, 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SafuBotProposalPage;
