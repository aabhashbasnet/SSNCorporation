import React from 'react';
import './WhoWeServe.css';
import { FaTools, FaTruckMoving, FaHardHat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhoWeServe = () => {
  return (
    <section className="who-we-serve">
      <div className="serve-container">
        <h2 className="serve-title">Who We Serve</h2>
        <p className="serve-subtitle">Empowering the backbone of engineering projects with AI-driven solutions</p>
        
        <div className="serve-cards">
          <div className="serve-card">
            <FaHardHat className="card-icon" />
            <h3>Contractors</h3>
            <p>Streamline project management, optimize resource allocation, and enhance decision-making with predictive analytics.</p>
            <Link to="/who-we-serve/contractors" className="card-link">Learn more →</Link>

          </div>

          <div className="serve-card">
            <FaTruckMoving className="card-icon" />
            <h3>Suppliers</h3>
            <p>AI-powered inventory management, demand forecasting, and automated logistics solutions for seamless operations.</p>
            <Link to="/who-we-serve/suppliers" className="card-link">Learn more →</Link>
          </div>

          <div className="serve-card">
            <FaTools className="card-icon" />
            <h3>Sub-Contractors</h3>
            <p>Real-time collaboration tools, progress tracking, and quality control systems powered by computer vision.</p>
            <Link to="/who-we-serve/subcontractors" className="card-link">Learn more →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;