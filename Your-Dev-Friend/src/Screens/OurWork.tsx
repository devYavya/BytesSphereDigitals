import React from "react";
import { motion } from "framer-motion";
import "../components/Styles/OurWork.css";
import { FaArrowRight } from "react-icons/fa";


const projects = [
  {
    title: "E-Commerce Website",
    description:
      "VÉRITÉ ROYALE is a luxury perfume brand that embodies the essence of bespoke beauty. With a focus on creating enchanting scents that captivate and charm, this brand is dedicated to providing high-quality, unique fragrances that are both alluring and sophisticated. From the carefully selected ingredients to the exquisite packaging, every detail is meticulously crafted to provide an unparalleled sensory experience.",
    image: "./Verite.png",
    link: "https://verite-royale.netlify.app/",
  },
  {
    title: "Night & Day",
    description:
      "Night and Day Cafe & Mart is your go-to neighborhood spot that never sleeps. Whether you’re craving a cozy cup of coffee, a late-night snack, or everyday essentials, we’ve got you covered—day or night. With a chill cafe vibe and a fully stocked mart, it’s the perfect blend of comfort, convenience, and community.",
    image: "./nightday.png",
    link: "https://night-day-cafe-face.onrender.com/",
  },
  {
    title: "Deshore",
    description:
      "A top tech company specializing in the dynamic realm of short-format informational content. Our innovative platform leverages advanced technology to provide concise, engaging news stories and hyperlocal updates, tailored to meet the needs of today’s busy users in their preferred format.",
    image: "./deshore.png",
    link: "https://deshore.in",
  },
];

const OurWork: React.FC = () => {
  return (
    <>
      <div className="floating-background">
        <div className="blob blob1" />
        <div className="blob blob2" />
      </div>
      <div className="portfolio-container">
        <h1 className="title">Our Work</h1>
        <div className="projects">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project ${index % 2 === 0 ? "even" : "odd"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FaArrowRight className="arrow-icon" />
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
    </>
  );
};

export default OurWork;
