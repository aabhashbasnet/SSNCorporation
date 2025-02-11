import React from "react";
import "./Paving.css"; // Import the CSS file for styling
import pavingImage from "../../assets/paving.jpg";

const Paving = () => {
  return (
    <>
      <section className="overview-section">
        <div className="overview-text">
          <h1>Revolutionizing Paving with AI</h1>
          <p>
            Paving is a critical part of any construction project, ensuring the durability and aesthetic appeal of outdoor spaces. AI can enhance paving designs, improve material estimates, and optimize installation processes.
          </p>
          <p>
            AI-driven tools can help in creating accurate pavement layouts, estimating material quantities, and even predicting long-term performance, ensuring that your paving projects are cost-effective, sustainable, and visually appealing.
          </p>
        </div>
        <div className="overview-image">
          <img src={pavingImage} alt="Paving AI" />
        </div>
      </section>
      <section className="features-benefits">
        <h2>Key Features & Benefits</h2>
        <div className="feature-card">
          <i className="fas fa-cogs"></i>
          <h3>AI-powered Pavement Design 🛠️</h3>
          <p>Utilizes AI algorithms to generate optimal pavement layouts that suit both aesthetic and functional needs.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-bar"></i>
          <h3>Precise Material Estimates 📊</h3>
          <p>AI computes accurate material requirements for different paving types, ensuring no overuse or waste of resources.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-tint"></i>
          <h3>Durability Prediction 🔧</h3>
          <p>Leverage AI to predict the long-term durability of pavement under various environmental conditions and traffic loads.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-image"></i>
          <h3>3D Pavement Visualization 🎨</h3>
          <p>Visualize paving designs in 3D using AI, allowing clients to preview the outcome before construction begins.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-wallet"></i>
          <h3>Cost Optimization 💰</h3>
          <p>AI helps optimize costs by suggesting efficient material usage and minimizing wastage during installation.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start AI-powered Paving</h2>
        <p>Upgrade your paving projects with AI-powered tools for accurate design, material estimation, and performance prediction.</p>
        <a href="/consultation" className="cta-button">
          Start AI-powered Paving
        </a>
      </section>
    </>
  );
};

export default Paving;
