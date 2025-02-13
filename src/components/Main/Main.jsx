import React, { useState, useEffect, useRef } from "react";
import "./Main.css";

const slides = [
  {
    headline: "Automate Drawing Analysis",
    description:
      "Upload drawings in PDF or image format, extract key elements, and generate material estimates with real-time cost insights.",
    primaryButton: "Get Started",
    secondaryButton: "Connect with Us",
  },
  {
    headline: "Streamline Workflows",
    description:
      "Simplify your workflows with our intuitive design and integrated features.",
    primaryButton: "Learn More",
    secondaryButton: "Contact Us",
  },
  {
    headline: "Real-Time Cost Insights",
    description:
      "Get accurate estimates instantly with our real-time cost insights.",
    primaryButton: "Discover",
    secondaryButton: "Join Now",
  },
];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const pauseAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoSlide(); // Reset interval on manual change
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="slide-content">
              <h1 className="headline">{slide.headline}</h1>
              <p className="description">{slide.description}</p>
              <div className="button-container">
                <button className="button primary">
                  {slide.primaryButton}
                </button>
                <button className="button secondary">
                  {slide.secondaryButton}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation arrows */}
      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button>
      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => {
              setCurrentSlide(index);
              startAutoSlide();
            }}
          ></span>
        ))}
      </div>
      {/* Progress bar (key changes on slide change to reset animation) */}
      <div className="progress-container" key={currentSlide}>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Main;
