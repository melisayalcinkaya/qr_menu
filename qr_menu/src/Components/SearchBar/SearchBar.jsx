import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="What would you like to eat?"
        />
      </div>
    </div>
  );
}
