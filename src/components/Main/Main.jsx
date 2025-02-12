import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    // Adding animation to fade in the content
    const content = document.querySelector(".main-content");
    content.classList.add("fade-in");
  }, []);

  return (
    <div className="main-container">
      <div className="background-image">
        <div className="main-content">
          <h1 className="headline">
            Automate Drawing Analysis & Get Accurate Material Estimates{" "}
            <span className="instant">Instantly!</span>
          </h1>
          <p className="description">
            Upload drawings in PDF or image format, extract key elements, and generate material estimates in Excel/PDF with real-time cost insights.
          </p>

          <div className="button-container">
            <button className="button primary" >
              Get Started
            </button>
            <button className="button connect">Connect with Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
