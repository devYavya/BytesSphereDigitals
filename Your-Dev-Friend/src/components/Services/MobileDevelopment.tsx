import React from "react";
import "../Styles/WebDevelopment.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileDevelopment: React.FC = () => {
  return (
    <div className="landing-container">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Mobile App Development</h1>
        <p>Creating high-quality, efficient, and user-friendly mobile apps.</p>
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
            <strong>Cross-Platform Development:</strong> We build apps that work
            seamlessly on both iOS and Android using frameworks like React
            Native and Flutter.
          </li>
          <li>
            <strong>Performance Optimization:</strong> We use efficient coding
            practices, animations, and caching techniques to ensure smooth
            performance.
          </li>
          <li>
            <strong>Security & Reliability:</strong> We integrate secure APIs,
            data encryption, and authentication methods like Firebase Auth and
            OAuth.
          </li>
          <li>
            <strong>Intuitive UI/UX:</strong> We follow modern design principles
            and user research to create a seamless experience for users.
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
        <p>
          We utilize the latest tools and frameworks to build top-notch apps.
        </p>
        <ul>
          <li>React Native, Flutter, Swift, Kotlin</li>
          <li>Firebase, AWS Amplify, GraphQL</li>
          <li>Redux, Zustand, MobX for state management</li>
          <li>Testing with Jest, Detox, and Appium</li>
        </ul>
      </motion.section>

      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>Get in Touch</h2>
        <p>Have an app idea? Let's create something incredible together.</p>
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

export default MobileDevelopment;
