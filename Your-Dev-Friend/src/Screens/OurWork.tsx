import React from "react";
import { motion } from "framer-motion";
import "../components/Styles/OurWork.css";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "VÉRITÉ ROYALE is a luxury perfume brand that embodies the essence of bespoke beauty. With a focus on creating enchanting scents that captivate and charm, this brand is dedicated to providing high-quality, unique fragrances that are both alluring and sophisticated. From the carefully selected ingredients to the exquisite packaging, every detail is meticulously crafted to provide an unparalleled sensory experience.",
    image: "./Verite.png",
    link: "https://verite-royale.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "VÉRITÉ ROYALE is a luxury perfume brand that embodies the essence of bespoke beauty. With a focus on creating enchanting scents that captivate and charm, this brand is dedicated to providing high-quality, unique fragrances that are both alluring and sophisticated. From the carefully selected ingredients to the exquisite packaging, every detail is meticulously crafted to provide an unparalleled sensory experience.",
    image: "./Verite.png",
    link: "https://verite-royale.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "VÉRITÉ ROYALE is a luxury perfume brand that embodies the essence of bespoke beauty. With a focus on creating enchanting scents that captivate and charm, this brand is dedicated to providing high-quality, unique fragrances that are both alluring and sophisticated. From the carefully selected ingredients to the exquisite packaging, every detail is meticulously crafted to provide an unparalleled sensory experience.",
    image: "./Verite.png",
    link: "https://verite-royale.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "VÉRITÉ ROYALE is a luxury perfume brand that embodies the essence of bespoke beauty. With a focus on creating enchanting scents that captivate and charm, this brand is dedicated to providing high-quality, unique fragrances that are both alluring and sophisticated. From the carefully selected ingredients to the exquisite packaging, every detail is meticulously crafted to provide an unparalleled sensory experience.",
    image: "./Verite.png",
    link: "https://verite-royale.netlify.app/",
  },
];

const OurWork: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h1 className="title">Our Work</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project ${index % 2 === 0 ? "even" : "odd"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="btn">
                View Project
              </a>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
