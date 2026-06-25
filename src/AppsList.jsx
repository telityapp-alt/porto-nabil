import React from "react";
import RetroPopover from "./RetroPopover";
import { libraryCards } from "./App";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4 4" />
    </svg>
  );
}

function CaretUpIcon() {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className="icon-inline upvote-icon"
    >
      <path d="M2 6.5 5 3.5l3 3" />
    </svg>
  );
}

const categories = [
  "All",
  "Live",
  "On Development",
  "Analytics",
  "Developer Tools",
  "Productivity",
  "Marketing",
  "Design",
  "Sales",
  "Customer Support",
  "Finance",
  "HR",
  "Legal",
  "Engineering",
  "Operations",
  "Security",
  "Data Science",
  "Machine Learning",
  "AI",
  "Web3",
  "Crypto",
  "E-commerce",
  "Education",
  "Healthcare",
  "Real Estate",
  "Travel",
  "Food & Beverage",
  "Entertainment",
  "Gaming",
  "Social",
  "Music",
  "Video",
  "Photography",
  "Fitness",
  "Lifestyle",
  "News",
  "Weather",
  "Utilities",
  "Reference",
  "Books",
  "Business",
  "Navigation",
];

export default function AppsList() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedApp, setSelectedApp] = React.useState(null);

  const appsData = React.useMemo(() => {
    return libraryCards.map((card, i) => ({
      id: i + 1,
      ...card,
      tagline: card.role, // map role to tagline for the UI
      category: card.team, // map team to category
      upvotes: 150 + i * 23, // static mock upvotes
      status: card.status || "On Development", // default status
    }));
  }, []);

  const filteredApps = appsData.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || app.category === activeCategory || app.status === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="apps-page-layout">
      {/* Left Sidebar: Categories/Tags */}
      <aside className="apps-left-sidebar">
        <h3 className="left-sidebar-title">Categories</h3>
        <div className="tags-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mini-tag-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <div className="apps-main-feed">
        <div
          className="mobile-category-bar"
          role="navigation"
          aria-label="Filter by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mini-tag-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="apps-list-header">
          <span className="library-kicker">Today's feed</span>
          <h2>Top product launches</h2>
        </div>

        <div className="apps-toolbar">
          <div className="search-bar-wrap">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="apps-list">
          {filteredApps.map((app) => (
            <article
              key={app.id}
              className="app-list-item library-card-style"
              onClick={() => setSelectedApp(app)}
            >
              <div className="app-item-left">
                <div className="app-logo-wrap">
                  <img
                    src={app.image}
                    alt={`${app.name} logo`}
                    className="app-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="app-logo-placeholder" aria-hidden="true">
                    <span>{app.name.charAt(0)}</span>
                  </div>
                </div>

                <div className="app-info">
                  <h3 className="app-title">{app.name}</h3>
                  <p className="app-tagline">{app.tagline}</p>
                  <div className="app-meta">
                    <span className="app-meta-comment">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="icon-inline small-icon"
                      >
                        <path d="M5 6.5h14v9H11l-4 3v-3H5z" />
                        <path d="M9 10.5h6" />
                      </svg>
                      <span>12</span>
                    </span>
                    <span className="app-meta-tag">
                      {app.category || "Analytics"}
                    </span>
                    <span className="app-meta-tag">
                      {app.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="app-item-right">
                <button
                  className="upvote-button"
                  aria-label={`Upvote ${app.name}`}
                >
                  <CaretUpIcon />
                  <span className="upvote-count">{app.upvotes}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="apps-sidebar">
        <div className="sidebar-widget">
          <span className="sidebar-eyebrow">Featured Launch</span>
          <article className="library-card featured-card">
            <div className="library-card-hero">
              <div className="library-card-screenshot-wrap">
                <img
                  src="/lib-audience-lab.png"
                  alt="Audience lab interface"
                  className="library-card-screenshot"
                />
              </div>
            </div>
            <div className="library-card-ribbon">
              <strong>Audience lab</strong>
              <span>Experiment workspace</span>
            </div>
            <div className="library-card-meta">
              <p>Hypotheses, test cells, and lift</p>
            </div>
          </article>
        </div>

        <div className="sidebar-widget">
          <span className="sidebar-eyebrow">Trending Topics</span>
          <div className="panel-chips">
            {[
              "Developer Tools",
              "Productivity",
              "Data & Analytics",
              "Design Tools",
              "Marketing",
            ].map((chip) => (
              <span key={chip} className="panel-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="sidebar-widget">
          <span className="sidebar-eyebrow">Top Teams Today</span>
          <div className="trust-logos">
            {["Vercel", "Linear", "Ramp", "Retool"].map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </aside>
      <RetroPopover app={selectedApp} onClose={() => setSelectedApp(null)} />
    </section>
  );
}
