import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <main className="landing-page-main">
      <section id="start">
        <h1>Table Proj</h1>
        <div className="button-box">
          <p> Simple visualization app</p>
          <Link
            to="/visualize/msft"
            type="button"
            className="get-started-button"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
