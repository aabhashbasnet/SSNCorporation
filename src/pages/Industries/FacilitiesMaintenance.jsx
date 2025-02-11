import React from "react";
import "./FacilitiesMaintainance.css"; // Import the CSS file for styling
import facilitiesMaintenance from "../../assets/facilities.png";

const FacilitiesMaintenance = () => {
  return (
    <>
      <section className="overview-section">
        <div className="overview-text">
          <h1>AI-Powered Facilities Maintenance</h1>
          <p>
            Facilities maintenance is crucial for prolonging the life of buildings, equipment, and infrastructure. AI is transforming maintenance operations by predicting failures, automating tasks, and optimizing resource allocation.
          </p>
          <p>
            From AI-driven predictive maintenance to automated task scheduling and energy efficiency analysis, AI is helping facilities management teams work smarter, not harder.
          </p>
        </div>
        <div className="overview-image">
          <img src={facilitiesMaintenance} alt="AI Facilities Maintenance" />
        </div>
      </section>
      <section className="features-benefits">
        <h2>Key Features & Benefits</h2>
        <div className="feature-card">
          <i className="fas fa-wrench"></i>
          <h3>Predictive Maintenance 🔧</h3>
          <p>AI predicts equipment failures before they happen, reducing downtime and repair costs.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-calendar-check"></i>
          <h3>Automated Task Scheduling 📅</h3>
          <p>AI automates maintenance schedules based on real-time data, ensuring timely interventions.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-lightbulb"></i>
          <h3>Energy Efficiency Optimization ⚡</h3>
          <p>AI analyzes energy usage patterns and suggests improvements to reduce consumption and costs.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-users-cog"></i>
          <h3>Workforce Management 🤖</h3>
          <p>Optimize workforce allocation based on AI recommendations for better task prioritization.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h3>Real-time Monitoring 📊</h3>
          <p>Continuous monitoring of equipment and building systems ensures optimal performance and quick interventions.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Transform Your Facilities <br /> Management with AI</h2>
        <p>Ready to take control of your facilities maintenance? Implement AI-driven solutions to improve efficiency, save costs, and extend the lifespan of your assets.</p>
        <a href="/consultation" className="cta-button">
          Start AI-Powered Maintenance
        </a>
      </section>
    </>
  );
};

export default FacilitiesMaintenance;
