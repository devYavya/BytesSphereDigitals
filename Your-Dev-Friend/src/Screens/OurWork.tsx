import React from "react";
import "../components/Styles/OurWork.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform with a seamless checkout experience.",
    image: "./webd.avif",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio showcasing creative works and projects.",
    image: "./webd.avif",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    description: "An intuitive food ordering system with real-time tracking.",
    image: "./webd.avif",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    description: "An intuitive food ordering system with real-time tracking.",
    image: "./webd.avif",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    description: "An intuitive food ordering system with real-time tracking.",
    image: "./webd.avif",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    description: "An intuitive food ordering system with real-time tracking.",
    image: "./webd.avif",
    link: "#",
  },
];

const OuerWork: React.FC = () => {
  return (
    <section className="project-showcase">
      <h2>Our Works</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OuerWork;
