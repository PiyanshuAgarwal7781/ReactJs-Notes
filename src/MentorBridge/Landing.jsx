import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Make sure this CSS file exists

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Welcome to Mentor Bridge IT</h1>
        <p>Connecting passionate learners with expert mentors to shape future innovators.</p>
        <Link to="/About">
          <button className="cta-button">Learn More</button>
        </Link>
      </div>

      <div className="features-section">
        <div className="feature-box">
          <h3>💡 Mentorship</h3>
          <p>Get guidance from experienced mentors in tech and innovation.</p>
        </div>
        <div className="feature-box">
          <h3>📅 Events</h3>
          <p>Join workshops, hackathons, and tech talks curated for your growth.</p>
        </div>
        <div className="feature-box">
          <h3>📰 Updates</h3>
          <p>Stay informed with the latest news and announcements from Mentor Bridge.</p>
        </div>
      </div>
    </div>
  );
}
