import React from "react";
import "./Landscaping.css"; // Import the CSS file for styling
import landscaping from "../../assets/landscaping.jpg";

const Landscaping = () => {
  return (
    <>
      <section className="overview-section">
        <div className="overview-text">
          <h1>Transform Your Landscaping with AI</h1>
          <p>
            Landscaping in construction goes beyond just planting and hardscaping. It's about creating sustainable, cost-effective, and visually appealing outdoor spaces. AI can revolutionize the landscaping process by improving design precision, enhancing resource management, and optimizing cost estimates.
          </p>
          <p>
            From AI-powered terrain analysis to automated material estimation and smart irrigation planning, AI is making landscaping smarter, more efficient, and more sustainable.
          </p>
        </div>
        <div className="overview-image">
          <img src={landscaping} alt="Landscaping AI" />
        </div>
      </section>
      <section className="features-benefits">
        <h2>Key Features & Benefits</h2>
        <div className="feature-card">
          <i className="fas fa-cogs"></i>
          <h3>AI-powered Site Analysis 🏗️</h3>
          <p>Utilizes machine learning to analyze terrain, ensuring optimal landscape design tailored to your space.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-bar"></i>
          <h3>Automated Material Estimates 📊</h3>
          <p>AI accurately calculates quantities of soil, plants, pavement, and more for precise material needs.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-tint"></i>
          <h3>Smart Irrigation Planning 💧</h3>
          <p>AI-driven solutions for efficient water management, ensuring optimal irrigation for your plants and lawn.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-image"></i>
          <h3>3D Visualization 🎨</h3>
          <p>Generate realistic landscape previews using AI models to visualize your design before implementation.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-wallet"></i>
          <h3>Cost Optimization 💰</h3>
          <p>Receive accurate cost breakdowns for materials and labor, allowing for better budget management.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start AI-powered Landscaping</h2>
        <p>Ready to take your landscaping project to the next level? Get started with AI-powered tools for smarter design, cost optimization, and resource management.</p>
        <a href="/consultation" className="cta-button">
          Start AI-powered Landscaping
        </a>
      </section>
    </>
  );
};

export default Landscaping;
