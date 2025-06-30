// A highly reusable Button component per design guidance
import React from "react";
import "../styles/Button.css";

export default function Button({ children, onClick, style, className = "", ...rest }) {
  return (
    <button
      className={`c-btn ${className}`}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
