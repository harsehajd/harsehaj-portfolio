import { useState, useRef } from 'react';
import '../styles/ProjectCarousel.css';

const ProjectCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "wave care",
      description: "trained a 2d cnn after processing raw eeg data to eeg image data to achieve a 89.5% accuracy for MDD (major depressive disorder) diagnosis.",
      link: "https://docs.google.com/presentation/d/1AMskOPB-fs8p7p-UhpdDgVGnnbaKLkGnq6mWZSJByCM/edit?usp=sharing",
      tags: ["ai/ml", "bci"]
    },
    {
      id: 2,
      title: "breast cancer classifier",
      description: "applied k-nn, svm, and logistic regression algorithms to compare accuracy of breast cancer classification using a digitized FNA dataset.",
      link: "https://docs.google.com/document/d/1nRxnQT9BQVJ1uMcsYkj2Ed6O1YrVKm7owC57AB3iKzU/edit?usp=sharing",
      tags: ["python", "tensorFlow"]
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 