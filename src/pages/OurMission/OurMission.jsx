import React from "react";
import "./OurMission.css";
// Removed missionImage import since we're not using it now.
import { FiTarget, FiLayout, FiDatabase, FiFileText } from "react-icons/fi";

const OurMission = () => {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <section className="mission-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Redefining</span> Construction Innovation
          </h1>
          <p className="hero-subtitle">
            Smart Solutions for Modern Construction Challenges
          </p>
        </div>
        <div className="hero-graphic">
          <div className="graphic-element"></div>
        </div>
        <div className="hero-graphic">
          <div className="graphic-element"></div>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="core-mission">
        <div className="mission-grid">
          <div className="mission-card">
            <h2>Our Vision</h2>
            <p className="highlight">
              Transform construction management through AI-driven insights and real-time data integration
            </p>
            {/* The image has been removed from here */}
          </div>

          <div className="value-proposition">
            <div className="value-card">
              <FiTarget className="value-icon" />
              <h3>Precision Analysis</h3>
              <p>Advanced algorithms for accurate architectural element breakdown</p>
            </div>
            <div className="value-card">
              <FiLayout className="value-icon" />
              <h3>Smart Integration</h3>
              <p>Seamless collaboration with existing project management systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FiDatabase className="feature-icon" />
            <h3>Real-Time Data Sync</h3>
            <p>Instant integration with DOT for live material estimates</p>
          </div>
          <div className="feature-card">
            <FiFileText className="feature-icon" />
            <h3>Dynamic Reporting</h3>
            <p>Automated generation of detailed project reports</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta">
        <div className="cta-content">
          <h2>Ready to Revolutionize Your Workflow?</h2>
          <button className="cta-button">
            <span>Start Free Trial</span>
            <div className="hover-effect"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
