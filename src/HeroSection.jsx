// The Hero (top section) with left side text, right side image
import React from "react";
import Button from "./components/Button";
import "./styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section section">
      <div className="hero-split section-content">
        <div className="hero-content">
          <h1 className="hero-title u-mb-32">
            Selling online is vital to business growth.
          </h1>
          <div className="hero-subtitle u-mb-24">2025 Grow Your e-Commerce Conference</div>
          <div className="hero-event-details u-mb-32">
            September 16-18, 2025<br />Paragon One Plaza and Sky Garden
          </div>
          <Button>
            BOOK NOW FOR EARLY BIRD PRICES
          </Button>
        </div>
        <div className="hero-img-wrap">
          {/*
            Photo from Unsplash, e.g. https://unsplash.com/photos/people-in-conference-room-lZ_4nPFKcV8
            Replace with your conference/photo as needed.
          */}
          <img
            src="https://images.unsplash.com/photo-1515168833906-d2a3b82f0b90?auto=format&fit=crop&w=800&q=80"
            className="hero-img"
            alt="Conference, people collaborating at table"
          />
        </div>
      </div>
    </section>
  );
}
