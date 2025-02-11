import React from "react";
import "./GeneralConstruction.css"; // Import the CSS file for styling
import generalConstruction from "../../assets/construction.jpg";

const GeneralConstruction = () => {
  return (
    <>
      <section className="overview-section">
        <div className="overview-text">
          <h1>AI for General Construction</h1>
          <p>
            AI is revolutionizing general construction by enhancing project management, cost control, and efficiency. From AI-driven project scheduling to safety management, AI is optimizing the entire construction lifecycle.
          </p>
          <p>
            With the help of AI, construction teams can automate planning, monitor progress, predict risks, and ensure timely project completion while staying within budget.
          </p>
        </div>
        <div className="overview-image">
          <img src={generalConstruction} alt="AI in General Construction" />
        </div>
      </section>
      <section className="features-benefits">
        <h2>Key Features & Benefits</h2>
        <div className="feature-card">
          <i className="fas fa-calendar-alt"></i>
          <h3>AI-Driven Project Scheduling 📅</h3>
          <p>Automated scheduling and task allocation to optimize time management and resource use.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-tools"></i>
          <h3>Smart Construction Planning 🛠️</h3>
          <p>AI-assisted planning improves task prioritization and reduces project delays.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Safety Monitoring ⚠️</h3>
          <p>AI helps monitor safety in real-time, preventing accidents and ensuring regulatory compliance.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h3>Risk Prediction & Mitigation ⚖️</h3>
          <p>AI algorithms analyze historical data to predict potential risks and suggest mitigations.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-money-bill-wave"></i>
          <h3>Cost Control & Optimization 💵</h3>
          <p>AI helps track project costs, optimize expenses, and forecast future financial needs.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Revolutionize Your Construction <br />Projects with AI</h2>
        <p>Ready to take your construction project to the next level? Embrace AI-powered solutions for smarter planning, risk management, and cost control.</p>
        <a href="/consultation" className="cta-button">
          Start AI-Driven Construction
        </a>
      </section>
    </>
  );
};

export default GeneralConstruction;
