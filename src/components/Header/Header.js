import React from "react";
import { Link } from "react-router-dom";
import "../App/App.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <h1>
        <Link to="/">Table Proj</Link>
      </h1>
      <nav className="nav">
        <Link to="/visualize" className="nav-button">
          Visualize
        </Link>
        <span className="divider">|</span>
        {
          // TODO: Add an API call to a reference to allow adding more companies
        }
        <Link to="/add" className="nav-button">
          Request
        </Link>
      </nav>
    </header>
  );
}
