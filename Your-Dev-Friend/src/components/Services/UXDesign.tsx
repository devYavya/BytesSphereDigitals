import React from "react";
import "../Styles/WebDevelopment.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UXDesign: React.FC = () => {
  return (
    <div className="landing-container">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>UX Design</h1>
        <p>Crafting intuitive and engaging user experiences.</p>
      </motion.header>

      <motion.section
        className="how-we-do-it"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>How We Do It</h2>
        <ul>
          <li>
            <strong>User Research:</strong> Conducting surveys, interviews, and
            usability testing to understand user needs.
          </li>
          <li>
            <strong>Wireframing & Prototyping:</strong> Designing interactive
            wireframes and high-fidelity prototypes using tools like Figma and
            Adobe XD.
          </li>
          <li>
            <strong>Accessibility & Usability:</strong> Ensuring compliance with
            WCAG standards and best UX practices.
          </li>
          <li>
            <strong>Iterative Design:</strong> Continuous feedback and testing
            to improve the user experience.
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="technologies"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Technologies We Use</h2>
        <p>Leveraging modern tools to create seamless experiences.</p>
        <ul>
          <li>Figma, Adobe XD, Sketch</li>
          <li>UserTesting, Hotjar, Google Analytics</li>
          <li>Material UI, Tailwind CSS, Bootstrap</li>
          <li>A/B Testing with Google Optimize, Optimizely</li>
        </ul>
      </motion.section>

      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>Get in Touch</h2>
        <p>Let’s create intuitive and user-friendly experiences together.</p>
        <Link to={"/contact"}>
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default UXDesign;
