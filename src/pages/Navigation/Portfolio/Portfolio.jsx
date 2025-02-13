import React from 'react';
import './Portfolio.css'; // Styles for portfolio page

// Import random placeholder images for testing
import placeholderImage1 from '../../../assets/project1.png';
import placeholderImage2 from '../../../assets/project1.png';
import placeholderImage3 from '../../../assets/project1.png';
import placeholderImage4 from '../../../assets/project1.png';

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "Description of project one, showcasing the tech stack and features.",
    bgImage: placeholderImage1,
    link: "#"
  },
  {
    id: 2,
    name: "Project Two",
    description: "Description of project two, showcasing the tech stack and features.",
    bgImage: placeholderImage2,
    link: "#"
  },
  {
    id: 3,
    name: "Project Three",
    description: "Description of project three, showcasing the tech stack and features.",
    bgImage: placeholderImage3,
    link: "#"
  },
  {
    id: 4,
    name: "Project Four",
    description: "Description of project four, showcasing the tech stack and features.",
    bgImage: placeholderImage4,
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore the projects I've worked on to solve real-world problems.</p>
      </header>

      <section className="portfolio-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item"
            style={{ backgroundImage: `url(${project.bgImage})` }} // Dynamically set the background image
          >
            <div className="portfolio-overlay">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="view-project-btn">View Project</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
