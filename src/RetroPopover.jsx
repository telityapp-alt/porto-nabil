import React, { useEffect } from 'react';

function CaretDownIcon() {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" className="icon-inline small-caret">
      <path d="M2 3.5 5 6.5l3-3" />
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="icon-inline window-icon">
      <path d="M2 10h8" />
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="icon-inline window-icon">
      <rect x="2" y="2" width="8" height="8" rx="1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="icon-inline window-icon">
      <path d="M3 3l6 6M9 3L3 9" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline window-icon">
      <path d="M4 2v12h8V6l-4-4H4z" fill="none" />
      <path d="M8 2v4h4" fill="none" />
      <path d="M6 10h4M6 12h3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-inline tool-icon">
      <path d="M6.2 10.2 4.5 12A2.5 2.5 0 0 1 1 8.5l1.8-1.8" />
      <path d="m9.8 5.8 1.7-1.8A2.5 2.5 0 1 1 15 7.5l-1.8 1.8" />
      <path d="m5.5 10.5 5-5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline tool-icon">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4 4" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline tool-icon">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-inline tool-icon">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function RetroPopover({ app, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!app) return null;

  return (
    <div className="retro-backdrop" onClick={onClose}>
      <div className="retro-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Title Bar */}
        <div className="retro-titlebar">
          <div className="retro-titlebar-left">
            <button className="retro-icon-btn">
              <DocIcon />
              <CaretDownIcon />
            </button>
          </div>
          
          <div className="retro-titlebar-center">
            <span>Product OS — {app.name}</span>
            <CaretDownIcon />
          </div>
          
          <div className="retro-titlebar-right">
            <button className="retro-icon-btn"><MinimizeIcon /></button>
            <button className="retro-icon-btn"><MaximizeIcon /></button>
            <button className="retro-icon-btn close-btn" onClick={onClose}><CloseIcon /></button>
          </div>
        </div>

        {/* Tool Bar */}
        <div className="retro-toolbar">
          <div className="retro-tool-group">
            <button className="retro-tool-btn rotate-left">↺</button>
            <button className="retro-tool-btn">↻</button>
          </div>
          
          <div className="retro-tool-group">
            <button className="retro-dropdown-btn">
              Zoom <CaretDownIcon />
            </button>
          </div>
          
          <div className="retro-tool-group">
            <button className="retro-tool-btn font-b">B</button>
            <button className="retro-tool-btn font-i">I</button>
            <button className="retro-tool-btn font-u">U</button>
          </div>
          
          <div className="retro-tool-group">
            <button className="retro-dropdown-btn">
              Font <CaretDownIcon />
            </button>
          </div>
          
          <div className="retro-tool-group flex-group">
            <button className="retro-tool-btn align-left">≡</button>
            <button className="retro-tool-btn align-center">≡</button>
            <button className="retro-tool-btn align-right">≡</button>
          </div>
          
          <div className="retro-tool-group disabled-group">
            <button className="retro-tool-btn"><LinkIcon /></button>
            <button className="retro-tool-btn"><CommentIcon /></button>
          </div>
          
          <div className="retro-toolbar-spacer"></div>
          
          <div className="retro-tool-group no-border">
            <button className="retro-tool-btn"><SearchIcon /></button>
            <button className="retro-tool-btn"><SettingsIcon /></button>
            <button className="retro-share-btn">Share</button>
          </div>
        </div>

        {/* Content Area */}
        <div className="retro-content">
          <div className="popover-content-layout">
            <div className="popover-main-area">
              <div className="popover-main-text">
                <h1>{app.name}</h1>
                <p>{app.tagline}. Everything you need to collect and analyze product usage data — and build and ship new features — lives in one place.</p>
              </div>
              
              <img src={app.image} alt={app.name} className="popover-image" />
            </div>

            <div className="popover-sidebar">
              <div className="community-card">
                <h3>Community Feedback</h3>
                
                <div className="community-stat">
                  <span className="stat-label">Upvotes</span>
                  <span className="stat-value">▲ {app.upvotes || 156}</span>
                </div>
                
                <div className="community-stat">
                  <span className="stat-label">Status</span>
                  <span className="stat-value" style={{color: '#1d6e61'}}>Live</span>
                </div>
                
                <div className="community-stat">
                  <span className="stat-label">Category</span>
                  <span className="stat-value">{app.category || 'Productivity'}</span>
                </div>

                <button className="ghost-button feedback-btn">Leave a comment</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
