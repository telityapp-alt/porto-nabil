import { useState } from "react";
import "./PreppyPage.css";

const PreppyPage = () => {
  const [activeSection, setActiveSection] = useState("gamification");

  const screenshots = [
    { id: 1, src: "/preppy/screen-1.webp", alt: "Preppy Learning Interface" },
    { id: 2, src: "/preppy/screen-2.webp", alt: "Preppy Progress Tracking" },
    { id: 3, src: "/preppy/screen-3.webp", alt: "Preppy Mock Interview" },
    { id: 4, src: "/preppy/screen-4.webp", alt: "Preppy AI Prediction" },
    { id: 5, src: "/preppy/screen-5.webp", alt: "Preppy Scholarship Database" },
  ];

  const gamificationPrinciples = [
    {
      title: "Loss Aversion & Streaks",
      desc: "Inspired by Duolingo's streak system. Users fear breaking their learning streak, creating daily engagement habit loops.",
      psychology: "Kahneman & Tversky's Prospect Theory",
    },
    {
      title: "Variable Rewards",
      desc: "Unpredictable XP bonuses and achievement unlocks trigger dopamine release, similar to slot machine mechanics.",
      psychology: "B.F. Skinner's Operant Conditioning",
    },
    {
      title: "Social Proof & Competition",
      desc: "Leaderboards and peer progress visibility leverage FOMO and competitive drive to maintain engagement.",
      psychology: "Cialdini's Influence Principles",
    },
    {
      title: "Immediate Feedback Loop",
      desc: "Instant correctness indicators and micro-celebrations after each answer satisfy need for progress validation.",
      psychology: "Flow State Theory (Csikszentmihalyi)",
    },
    {
      title: "Progressive Mastery",
      desc: "Scaffolded difficulty curve ensures users stay in optimal challenge zone — not too hard, not too easy.",
      psychology: "Zone of Proximal Development (Vygotsky)",
    },
    {
      title: "Endowed Progress Effect",
      desc: "Pre-seeded progress bars and starter achievements make users feel invested before they've truly begun.",
      psychology: "Nunes & Drèze Research (2006)",
    },
  ];

  const marketingFunnel = [
    {
      stage: "Awareness",
      tactic: "5000+ Free Scholarship Database",
      psychology: "Free value builds trust and reciprocity. Users bookmark the platform as a credible resource.",
      conversion: "70% of visitors explore database",
    },
    {
      stage: "Consideration",
      tactic: "AI College Prediction Tool (Free Tier)",
      psychology: "Give users a taste of personalized AI power. They experience product value before paying.",
      conversion: "42% try prediction after database",
    },
    {
      stage: "Conversion",
      tactic: "Unlock Full AI Strategy + Mock Interview",
      psychology: "Users already invested time. Premium unlocks solve their specific pain point (competitive edge).",
      conversion: "18% convert to paid within 7 days",
    },
    {
      stage: "Retention",
      tactic: "Daily Streaks + Push Notifications",
      psychology: "Habit formation through variable rewards and loss aversion. Users don't want to break progress.",
      conversion: "D30 retention: 61%",
    },
  ];

  const features = [
    {
      icon: "🎯",
      title: "AI College Prediction",
      desc: "Machine learning models analyze profile and predict admission chances across target universities.",
    },
    {
      icon: "🎤",
      title: "Mock Interview System",
      desc: "Voice-based interview simulation with AI feedback on content, delivery, and body language cues.",
    },
    {
      icon: "📚",
      title: "5000+ Scholarship Database",
      desc: "Curated, searchable database of scholarships with eligibility filters and deadline tracking.",
    },
    {
      icon: "🎮",
      title: "Duolingo-Style Learning",
      desc: "Bite-sized lessons, XP system, streaks, leaderboards — making IELTS & CPNS prep actually fun.",
    },
    {
      icon: "📊",
      title: "Adaptive Testing Engine",
      desc: "Questions adjust difficulty based on performance, keeping users in optimal challenge zone.",
    },
    {
      icon: "🏆",
      title: "Achievement System",
      desc: "Unlockable badges, milestones, and progress celebrations drive motivation and completion rates.",
    },
  ];

  const techStack = [
    { name: "React + Vite", purpose: "Lightning-fast development and HMR" },
    { name: "Capacitor", purpose: "Cross-platform: Web + Native iOS/Android from single codebase" },
    { name: "PWA", purpose: "Installable, offline-capable web experience" },
    { name: "Tailwind CSS", purpose: "Rapid UI development with consistency" },
    { name: "Framer Motion", purpose: "Smooth animations matching Duolingo polish" },
  ];

  return (
    <div className="preppy-page">
      {/* Hero Section */}
      <section className="preppy-hero">
        <div className="preppy-hero-content">
          <div className="preppy-hero-text">
            <span className="preppy-tag">Case Study</span>
            <h1>
              Target Kampus Impian.
              <br />
              <span className="gradient-text">Lalu Taklukkan.</span>
            </h1>
            <p className="preppy-tagline">
              Duolingo-inspired learning platform that makes scholarship prep, IELTS, and CPNS study
              actually <strong>enjoyable</strong>. Gamification meets AI-powered strategy.
            </p>
            <div className="preppy-hero-stats">
              <div className="stat-item">
                <span className="stat-value">5000+</span>
                <span className="stat-label">Scholarships</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">61%</span>
                <span className="stat-label">D30 Retention</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">18%</span>
                <span className="stat-label">Free→Paid CVR</span>
              </div>
            </div>
          </div>
          <div className="preppy-hero-visual">
            <img src="/preppy/hero-web.png" alt="Preppy Web Interface" className="hero-web-ui" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="preppy-section preppy-problem">
        <div className="section-content">
          <h2>The Problem</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>📉 High-Stakes Tests Are Boring</h3>
              <p>
                IELTS, CPNS, scholarship essays — these are stressful, high-stakes challenges that
                determine life trajectories. Traditional prep materials are dry, demotivating, and
                expensive.
              </p>
            </div>
            <div className="problem-card">
              <h3>💸 Prep Courses Cost Millions</h3>
              <p>
                Quality test prep in Indonesia costs Rp 2-5 million. Most students can't afford it,
                creating unfair advantages for wealthy families.
              </p>
            </div>
            <div className="problem-card">
              <h3>😴 No One Finishes Self-Study</h3>
              <p>
                Completion rates for self-paced learning hover around 3-5%. Without structure,
                accountability, and motivation, students give up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="preppy-section preppy-solution">
        <div className="section-content">
          <h2>The Solution</h2>
          <p className="section-intro">
            We built a <strong>Duolingo for high-stakes testing</strong> — combining gamification
            psychology, AI-powered personalization, and guerrilla marketing to make test prep
            accessible, engaging, and effective.
          </p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Tabs */}
      <section className="preppy-section preppy-deepdive">
        <div className="section-content">
          <h2>Deep Dive</h2>
          <div className="deepdive-tabs">
            <button
              className={`tab-btn ${activeSection === "gamification" ? "active" : ""}`}
              onClick={() => setActiveSection("gamification")}
            >
              🎮 Gamification System
            </button>
            <button
              className={`tab-btn ${activeSection === "marketing" ? "active" : ""}`}
              onClick={() => setActiveSection("marketing")}
            >
              📈 Guerrilla Marketing Funnel
            </button>
          </div>

          {activeSection === "gamification" && (
            <div className="deepdive-content">
              <h3>Behavioral Design Framework</h3>
              <p className="deepdive-intro">
                We didn't just copy Duolingo — we studied the psychology behind why it works and
                adapted it for high-stakes contexts where motivation is critical.
              </p>

              <div className="principles-grid">
                {gamificationPrinciples.map((principle, idx) => (
                  <div key={idx} className="principle-card">
                    <h4>{principle.title}</h4>
                    <p className="principle-desc">{principle.desc}</p>
                    <span className="principle-tag">{principle.psychology}</span>
                  </div>
                ))}
              </div>

              <div className="methodology-box">
                <h4>Research Foundation</h4>
                <p>
                  Our gamification approach synthesizes research from:
                </p>
                <ul>
                  <li><strong>BJ Fogg's Behavior Model</strong> — Motivation × Ability × Trigger</li>
                  <li><strong>Hooked Model (Nir Eyal)</strong> — Trigger → Action → Variable Reward → Investment</li>
                  <li><strong>Flow State Theory</strong> — Optimal challenge-skill balance</li>
                  <li><strong>Self-Determination Theory</strong> — Autonomy, competence, relatedness</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === "marketing" && (
            <div className="deepdive-content">
              <h3>Freemium Growth Loop</h3>
              <p className="deepdive-intro">
                We hook users with genuinely valuable free content (scholarship database), then
                convert them through graduated value reveals that match their learning journey.
              </p>

              <div className="funnel-flow">
                {marketingFunnel.map((stage, idx) => (
                  <div key={idx} className="funnel-stage">
                    <div className="funnel-stage-header">
                      <span className="funnel-number">{idx + 1}</span>
                      <h4>{stage.stage}</h4>
                    </div>
                    <div className="funnel-stage-body">
                      <h5>{stage.tactic}</h5>
                      <p className="funnel-psychology">{stage.psychology}</p>
                      <span className="funnel-metric">{stage.conversion}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="methodology-box">
                <h4>Why This Works</h4>
                <p>
                  Traditional SaaS funnels gate value immediately. We inverted the model:
                </p>
                <ul>
                  <li><strong>Lead with utility</strong> — scholarship database solves real pain, builds trust</li>
                  <li><strong>Demonstrate AI value</strong> — free prediction shows personalization capability</li>
                  <li><strong>Convert at decision point</strong> — users already invested, premium removes friction</li>
                  <li><strong>Retain through habit</strong> — streaks and social proof drive daily returns</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="preppy-section preppy-gallery">
        <div className="section-content">
          <h2>Product Showcase</h2>
          <div className="screenshots-grid">
            {screenshots.map((screen) => (
              <div key={screen.id} className="screenshot-wrapper">
                <div className="mobile-frame">
                  <img src={screen.src} alt={screen.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="preppy-section preppy-tech">
        <div className="section-content">
          <h2>Technical Architecture</h2>
          <p className="section-intro">
            Cross-platform from day one. Single codebase deploys to web (PWA) and native mobile
            (iOS/Android) using Capacitor.
          </p>
          <div className="tech-stack-list">
            {techStack.map((tech, idx) => (
              <div key={idx} className="tech-item">
                <h4>{tech.name}</h4>
                <p>{tech.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="preppy-section preppy-impact">
        <div className="section-content">
          <h2>Impact & Outcomes</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <span className="impact-value">61%</span>
              <span className="impact-label">30-Day Retention</span>
              <p>Far exceeds industry average of 20-25% for EdTech apps</p>
            </div>
            <div className="impact-card">
              <span className="impact-value">18%</span>
              <span className="impact-label">Free-to-Paid Conversion</span>
              <p>3x higher than typical freemium model (5-7%)</p>
            </div>
            <div className="impact-card">
              <span className="impact-value">5000+</span>
              <span className="impact-label">Scholarship Entries</span>
              <p>Most comprehensive Indonesian scholarship database</p>
            </div>
            <div className="impact-card">
              <span className="impact-value">Live</span>
              <span className="impact-label">Google Play Store</span>
              <p>Production app serving real users daily</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreppyPage;
