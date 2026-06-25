import React, { useState, useEffect } from "react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const loopedItems = [
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
  ];

  return (
    <div className="retro-popover-overlay" style={{ zIndex: 9999 }}>
      <div className="pop-window" style={{ maxWidth: "860px", margin: "auto" }}>
        <header className="retro-titlebar">
          <div className="pop-tb-left">
            <span className="pop-tb-dot" />
            <span className="pop-tb-dot" />
            <span className="pop-tb-dot" />
          </div>
          <div className="pop-tb-center">
            <span className="pop-tb-title">Special Offer</span>
          </div>
          <div className="pop-tb-right">
            <button
              className="pop-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
            >
              &times;
            </button>
          </div>
        </header>

        <div className="pop-scroll" style={{ overflowX: "hidden", overflowY: "hidden" }}>
          <div className="pop-content" style={{ padding: "24px 0", textAlign: "center" }}>
            <div style={{ padding: "0 40px" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.03em" }}>
                Bikin Website Seseru Ini Cuma 4 Jutaan!
                </h2>
                <p style={{ color: "#55606d", marginBottom: "16px", fontSize: "16px", lineHeight: 1.5 }}>
                Dapetin website dengan desain kelas enterprise dan growth system bawaan. Nggak perlu budget ratusan juta buat tampil sekeren ini.
                </p>
            </div>

            <div className="promo-marquee-wrap" style={{ padding: "16px 0", margin: "0" }}>
              <div className="hero-marquee-track" style={{ gap: "20px", animationDuration: "35s" }}>
                {loopedItems.map((item, idx) => (
                  <div key={idx} className="hero-marquee-card" style={{ width: "360px" }}>
                    <img
                      src={item.img}
                      alt={`Showcase ${item.brand}`}
                      className="hero-marquee-image"
                      style={{ height: "220px" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "24px", padding: "0 32px", display: "flex", justifyContent: "center" }}>
              <button 
                className="cta-button" 
                style={{ fontSize: "16px", height: "50px", padding: "0 32px", width: "100%", maxWidth: "400px" }}
                onClick={() => setIsOpen(false)}
              >
                Pelajari Lebih Lengkap &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
