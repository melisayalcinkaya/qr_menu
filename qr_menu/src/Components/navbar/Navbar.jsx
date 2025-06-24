import React, { useState } from "react";
import { FaHome, FaCommentDots, FaHandHoldingUsd, FaWifi, FaRegHandPaper } from "react-icons/fa";
import "./Navbar.css";

const navItems = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "chat", icon: <FaCommentDots /> },
  { id: "donate", icon: <FaHandHoldingUsd /> },
  { id: "wifi", icon: <FaWifi /> },
  { id: "help", icon: <FaRegHandPaper /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar-container">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`nav-item ${active === item.id ? "active" : ""}`}
        >
          <span className="icon">{item.icon}</span>
          {item.id === "home" && active === "home" && (
            <span className="label">Home</span>
          )}
        </button>
      ))}
    </div>
  );
}
