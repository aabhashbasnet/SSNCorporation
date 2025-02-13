// src/pages/Navigation/Services/Services.jsx

import React from 'react';
import './Services.css'; // Styles for services page

// Import your images at the top
import consultationImage from '../../../assets/consultation.jpg';
import designImage from '../../../assets/design.jpg';
import projectManagementImage from '../../../assets/project.jpg';
import qualityAssuranceImage from '../../../assets/qa.jpg';

const services = [
  {
    id: 1,
    name: "Consultation",
    description: "Professional advice on construction and project planning.",
    bgImage: consultationImage
  },
  {
    id: 2,
    name: "Design",
    description: "Innovative and practical designs tailored to your needs.",
    bgImage: designImage
  },
  {
    id: 3,
    name: "Project Management",
    description: "Efficient management of construction timelines and resources.",
    bgImage: projectManagementImage
  },
  {
    id: 4,
    name: "Quality Assurance",
    description: "Ensuring the highest quality standards for all construction work.",
    bgImage: qualityAssuranceImage
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the top-notch services we provide for your construction projects.</p>
      </header>

      <section className="services-list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-item"
            style={{ backgroundImage: `url(${service.bgImage})` }} // Dynamically set the background image
          >
            <div className="service-overlay">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href="#" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
