import React from 'react';
import './Working.css';


const Working = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload your drawing (PDF/Image)',
      description: 'Start by uploading your architectural drawing in either PDF or image format.'
    },
    {
      number: '2',
      title: 'Get a breakdown of all elements',
      description: 'Our system will analyze and provide a detailed component breakdown.'
    },
    {
      number: '3',
      title: 'Fetch cost estimates from DOT',
      description: 'Automatically retrieve latest cost estimates from Department of Transportation databases.'
    },
    {
      number: '4',
      title: 'Download your report in Excel/PDF',
      description: 'Export your comprehensive report in preferred format for easy sharing.'
    }
  ];

  return (
    <div className="how-it-works-container">
      <h2 className="section-title">A Brief Overview</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;