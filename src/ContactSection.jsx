// Bottom contact/CTA section, split with image as in HeroSection
import React from "react";
import Button from "./components/Button";
import "./styles/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section section">
      <div className="contact-split section-content">
        <div className="contact-content">
          <h2 className="contact-title u-mb-32">Reach Out</h2>
          <div className="contact-details u-mb-16">
            Conference Secretariat<br />163 Woodlands Place<br />Algies Bay, Rodney 0920
          </div>
          <div className="contact-details u-mb-24">
            123-456-7890<br />hello@reallygreatsite.com<br />@reallygreatsite
          </div>
          <Button>RESERVE YOUR SEAT</Button>
        </div>
        <div className="contact-img-wrap">
          {/*
            Contact/conference room image. Replace this Unsplash src as you wish.
          */}
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
            className="contact-img"
            alt="Modern conference room, group discussion"
          />
        </div>
      </div>
    </section>
  );
}
