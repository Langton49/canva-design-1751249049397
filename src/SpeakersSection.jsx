// Speakers section: yellow background, centered title, speaker cards
import React from "react";
import SpeakerCard from "./components/SpeakerCard";
import "./styles/SpeakersSection.css";

export default function SpeakersSection() {
  // Demo Unsplash images for speaker headshots; replace with other images as desired.
  return (
    <section className="speakers-section section">
      <div className="section-content">
        <h2 className="speakers-title">Our 2025 Keynote Speakers</h2>
        <div className="speakers-list">
          <SpeakerCard
            imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
            imgAlt="Leslie Boatwright headshot in red blazer"
            name="Leslie Boatwright"
            title="Head of Marketing"
            company="The Hobbibox"
            date="September 16"
          />
          <SpeakerCard
            imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
            imgAlt="Nicholas Newark headshot in suit"
            name="Nicholas Newark"
            title="Director of Design"
            company="Studio Ralla"
            date="September 17"
          />
          <SpeakerCard
            imgSrc="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80"
            imgAlt="Kin Gyun in green blouse, speaking"
            name="Kin Gyun"
            title="Founder and CEO"
            company="The Treasurebox Online"
            date="September 18"
          />
        </div>
      </div>
    </section>
  );
}
