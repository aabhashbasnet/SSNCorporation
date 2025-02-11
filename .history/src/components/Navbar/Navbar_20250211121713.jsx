import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faTruck,
  faTools,
  faTree,
  faRoad,
  faBuilding,
  faHardHat,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav');
      const icon = document.querySelector('.mobile-menu-icon');
      if (isMobileMenuOpen && nav && icon &&
        !nav.contains(event.target) && !icon.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setWhoWeServeOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setWhoWeServeOpen(true) : undefined}
            onMouseLeave={!isMobile ? () => setWhoWeServeOpen(false) : undefined}
            onClick={isMobile ? () => setWhoWeServeOpen(!whoWeServeOpen) : undefined}
          >
            <Link 
              to="/who-we-serve" 
              className="nav-link"
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              Who We Servess
            </Link>
            {whoWeServeOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/who-we-serve/contractors"><FontAwesomeIcon icon={faUserTie} className="icon" /> Contractors</Link></li>
                <li><Link to="/who-we-serve/suppliers"><FontAwesomeIcon icon={faTruck} className="icon" /> Suppliers/Distributors</Link></li>
                <li><Link to="/who-we-serve/sub-contractors"><FontAwesomeIcon icon={faTools} className="icon" /> Sub-Contractors</Link></li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setIndustriesOpen(true) : undefined}
            onMouseLeave={!isMobile ? () => setIndustriesOpen(false) : undefined}
            onClick={isMobile ? () => setIndustriesOpen(!industriesOpen) : undefined}
          >
            <Link 
              to="/industries" 
              className="nav-link"
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              Industries
            </Link>
            {industriesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/industries/landscaping"><FontAwesomeIcon icon={faTree} className="icon" /> Landscaping</Link></li>
                <li><Link to="/industries/paving"><FontAwesomeIcon icon={faRoad} className="icon" /> Paving</Link></li>
                <li><Link to="/industries/facilities-maintenance"><FontAwesomeIcon icon={faBuilding} className="icon" /> Facilities Maintenance</Link></li>
                <li><Link to="/industries/general-construction"><FontAwesomeIcon icon={faHardHat} className="icon" /> General Construction</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/our-mission" className="nav-link" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
              Our Mission
            </Link>
          </li>
          <li>
            <Link to="/loginSignUp" className="nav-link" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
              Login/SignUp
            </Link>
          </li>

          <li><a href="#try-for-free" className="cta-btn"><span>Try for Free</span></a></li>
        </ul>
      </nav>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>
    </header>
  );
};

export default Navbar;