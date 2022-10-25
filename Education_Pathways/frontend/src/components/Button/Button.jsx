import React from "react";
import "./Button.css";

export default function Button({ label, onClick, isSecondary, style, icon }) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`button ${isSecondary ? "secondary-button" : ""}`}
    >
      {label !== undefined ? <>{label}</> : <></>}
      {icon !== undefined ? <img src={icon} className="button-icon" /> : <></>}
    </div>
  );
}
