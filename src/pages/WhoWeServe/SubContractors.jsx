import React from 'react';
import './SubContractors.css';
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpg';

const SubContractors = () => {
  return (
    <div className="subcontractors">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
        <h1>Partner with the Best SubContractors</h1>
        <p>Leverage top-tier expertise for all your construction projects. Join hands with us for seamless collaboration and high-quality execution.</p>
        </div>
        <div className="hero-buttons">
          <button className="cta-demo">Request a Demo</button>
          <button className="cta-experience">Start Your Experience</button>
        </div>
      </section>

      {/* SubContractors Features Section */}
      <section className="features">
        <h2>Why Choose Our SubContractors?</h2>
        <p>We connect you with highly skilled subcontractors who bring their expertise, attention to detail, and dedication to your projects.</p>
      </section>

      {/* SubContractors Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Quality Workmanship</h3>
            <p>Our subcontractors maintain the highest standards of quality in every project.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Timely Delivery</h3>
            <p>We prioritize on-time completion to keep your projects on schedule.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Experienced Team</h3>
            <p>Our team brings years of experience and expertise to each project.</p>
          </div>
        </div>
      </section>

      {/* SubContractors Benefits Section */}
      <section className="benefits">
        <h2>Key Benefits of Working With Us</h2>
        <div className="benefit-container">
          <div className="benefit">
            <h3>Skilled Workforce</h3>
            <p>Access to highly skilled workers in all construction domains.</p>
          </div>
          <div className="benefit">
            <h3>Reliable Service</h3>
            <p>Our subcontractors are reliable and maintain the highest level of integrity.</p>
          </div>
          <div className="benefit">
            <h3>Cost Efficiency</h3>
            <p>We help you manage costs effectively while ensuring top-quality results.</p>
          </div>
        </div>
      </section>

      {/* SubContractors Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img src={img1} alt="Client" className="testimonial-image" />
            </div>
            <p>"The subcontractors were top-notch and helped us deliver the project on time and on budget!"</p>
            <span>- John Doe, CEO</span>
          </div>
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img src={img2} alt="Client" className="testimonial-image" />
            </div>
            <p>"Great experience working with these subcontractors. We could always rely on them for quality work."</p>
            <span>- Jane Smith, Project Manager</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-final">
        <h2>Ready to Get Started?</h2>
        <div className="cta-buttons">
          <button className="cta-demo">Request a Demo</button>
          <button className="cta-free">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default SubContractors;
