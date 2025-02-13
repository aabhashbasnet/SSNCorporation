import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content"> {/* Container for better layout control */}
        <div className="footer-section">
          <img src={logo} alt="Company Logo" className="logo" />
          <div className="social-links">
            <a href="mailto:info@ssnbuilders.com" aria-label="Email">
              <i className="fas fa-envelope social-icon"></i>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in social-icon"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
  <h4>Navigation</h4>
  <nav>
    <ul className="footer-nav">
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</div>

        <div className="footer-section">
          <h4>Stay Updated</h4>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              aria-label="Email for newsletter"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div> {/* Close footer-content */}
    </footer>
  );
}

export default Footer;