// Entry root for React/Vite
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import HeroSection from "./HeroSection";
import SpeakersSection from "./SpeakersSection";
import ContactSection from "./ContactSection";

// Main single page app
function App() {
  return (
    <>
      <HeroSection />
      <SpeakersSection />
      <ContactSection />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
