import { useState } from "react";
import "./ContactPopover.css";

function ContactPopover({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open("https://wa.me/6283866983323", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:nabilazra1234@gmail.com";
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/nabilv1.0.0", "_blank");
  };

  return (
    <>
      <div className="contact-overlay" onClick={onClose} />
      <div className="contact-popover">
        <div className="contact-header">
          <h3>Mari Terhubung</h3>
          <button className="contact-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="contact-body">
          <p className="contact-intro">
            Hubungi lewat channel yang paling nyaman buat Anda. Insyaallah bakal direspon secepat mungkin.
          </p>

          <div className="contact-buttons">
            <button className="contact-btn whatsapp" onClick={handleWhatsApp}>
              <div className="contact-btn-content">
                <strong>WhatsApp</strong>
                <span>Fast response, obrolan santai</span>
              </div>
            </button>

            <button className="contact-btn email" onClick={handleEmail}>
              <div className="contact-btn-content">
                <strong>Email</strong>
                <span>nabilazra1234@gmail.com</span>
              </div>
            </button>

            <button className="contact-btn instagram" onClick={handleInstagram}>
              <div className="contact-btn-content">
                <strong>Instagram</strong>
                <span>@nabilv1.0.0</span>
              </div>
            </button>
          </div>

          <div className="contact-footer">
            <p>Terbuka untuk project, konsultasi, atau ngobrol santai soal growth & web development.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPopover;
