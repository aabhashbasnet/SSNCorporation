import React from "react";
import { Link } from "react-router-dom";
import "./Industries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faRoad, faBuilding, faHardHat } from "@fortawesome/free-solid-svg-icons";

const industriesData = [
  { title: "Landscaping", description: "Enhance outdoor spaces with professional landscaping services.", icon: faTree, link: "/industries/landscaping", color: "#2ecc71" },
  { title: "Paving", description: "Reliable paving solutions for roads, driveways, and sidewalks.", icon: faRoad, link: "/industries/paving", color: "#f39c12" },
  { title: "Facilities Maintenance", description: "Keep facilities in top shape with expert maintenance services.", icon: faBuilding, link: "/industries/facilities-maintenance", color: "#3498db" },
  { title: "General Construction", description: "High-quality construction services tailored to your needs.", icon: faHardHat, link: "/industries/general-construction", color: "#e74c3c" }
];

const Industries = () => {
  return (
    <div className="industries-container">
      <h2 className="industries-title">Industries We Serve</h2>
      <p className="industries-subtitle">
        Discover our expertise across various industries to help you build, maintain, and innovate.
      </p>
      
      <div className="industries-grid">
        {industriesData.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="icon-container" style={{ backgroundColor: industry.color }}>
              <FontAwesomeIcon icon={industry.icon} className="industry-icon" />
            </div>
            <h3 className="industry-title">{industry.title}</h3>
            <p className="industry-description">{industry.description}</p>
            <Link to={industry.link} className="learn-more-btn">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
