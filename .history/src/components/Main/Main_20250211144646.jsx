import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Open the GetStarted component in a new tab
    const newTab = window.open("", "_blank");
    newTab.location.href = "/get-started";
  };

  useEffect(() => {
    // Adding animation to fade in the content
    const content = document.querySelector(".main-content");
    content.classList.add("fade-in");
  }, []);

  return (
    <div className="main-content">
      <h1 className="headline">
        Automate Drawing Analysis & Get Accurate Material Estimates{" "}
        <span className="instant">Instantly!</span>
      </h1>
      <p className="description">
        Upload drawings in PDF or image format, extract key elements, and generate material estimates in Excel/PDF with real-time cost insights.
      </p>

      {/* Button container with gap between buttons */}
      <div className="button-container">
        <button className="button primary" onClick={handleGetStartedClick}>
          Get Started
        </button>
        <button className="button connect">Connect with Us</button>
      </div>
    </div>
  );
};

export default Main;
