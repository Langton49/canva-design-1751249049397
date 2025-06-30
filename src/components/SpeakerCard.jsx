// Card for each speaker: image, name, title/company, date
import React from "react";
import "../styles/SpeakerCard.css";

export default function SpeakerCard({ imgSrc, imgAlt, name, title, company, date }) {
  return (
    <div className="speaker-card">
      {/* Use a representative image from Unsplash for demo; replace src as needed */}
      <img className="speaker-img" src={imgSrc} alt={imgAlt} />
      <h3 className="speaker-name">{name}</h3>
      <p className="speaker-title">{title}</p>
      <p className="speaker-company">{company}</p>
      <span className="speaker-date">{date}</span>
    </div>
  );
}
