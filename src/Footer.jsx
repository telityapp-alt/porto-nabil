import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ padding: "0 20px 24px 20px", maxWidth: "1240px", margin: "auto auto 0 auto", width: "100%", boxSizing: "border-box" }}>
      <div 
        style={{
          border: "1px solid #c48a28",
          background: "linear-gradient(180deg, #fffefb 0%, #f7f5f0 100%)",
          boxShadow: "inset 0 -2px 0 rgba(196, 138, 40, 0.24), 0 4px 12px rgba(0,0,0,0.05)",
          borderRadius: "12px",
          padding: "12px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          fontSize: "13px",
          color: "#374352",
          fontWeight: 700
        }}
      >
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "#374352", textDecoration: "none" }}>Platform</Link>
          <Link to="/apps" style={{ color: "#374352", textDecoration: "none" }}>Apps</Link>
          <Link to="/solutions" style={{ color: "#374352", textDecoration: "none" }}>Solutions</Link>
          <Link to="/pricing" style={{ color: "#374352", textDecoration: "none" }}>Pricing</Link>
          <Link to="/docs" style={{ color: "#374352", textDecoration: "none" }}>Docs</Link>
          <a href="mailto:hello@porto.com" style={{ color: "#374352", textDecoration: "none" }}>Contact</a>
        </div>
        <div style={{ opacity: 0.7, fontSize: "12px", fontWeight: 600 }}>
          &copy; {new Date().getFullYear()} growww. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
