import React from "react";
import "../Styles/WebDevelopment.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SEOTesting: React.FC = () => {
  return (
    <div className="landing-container">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>SEO & Testing Services</h1>
        <p>
          Optimizing websites and applications for performance and visibility.
        </p>
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
            <strong>SEO Optimization:</strong> Implementing on-page and off-page
            SEO techniques to improve search rankings using tools like Yoast
            SEO, Google Lighthouse, and Ahrefs.
          </li>
          <li>
            <strong>Performance Testing:</strong> Ensuring fast load times with
            performance audits, caching strategies, and asset optimization.
          </li>
          <li>
            <strong>Automated Testing:</strong> Using Jest, Selenium, and
            Cypress for unit, integration, and end-to-end testing.
          </li>
          <li>
            <strong>Security Audits:</strong> Identifying vulnerabilities with
            penetration testing and security assessments.
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
        <p>We use industry-leading tools for SEO and testing.</p>
        <ul>
          <li>Google Analytics, Google Search Console</li>
          <li>PageSpeed Insights, GTmetrix, Lighthouse</li>
          <li>Selenium, Jest, Cypress</li>
          <li>Penetration Testing with OWASP ZAP, Burp Suite</li>
        </ul>
      </motion.section>

      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>Get in Touch</h2>
        <p>
          Improve your website’s performance and security with our expertise.
        </p>
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

export default SEOTesting;
