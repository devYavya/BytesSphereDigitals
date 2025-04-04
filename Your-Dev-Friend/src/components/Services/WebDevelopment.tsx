import React from "react";
import "../Styles/WebDevelopment.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WebDevelopment: React.FC = () => {
  return (
    <div className="landing-container">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Web Development</h1>
        <p>Building modern, responsive, and scalable web applications.</p>
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
            <strong>SEO Optimization:</strong> We ensure your site ranks well on
            search engines with proper meta tags, structured data, and
            fast-loading pages. We use tools like Google Lighthouse, Yoast SEO,
            and Schema Markup.
          </li>
          <li>
            <strong>Performance:</strong> Our web applications are optimized for
            speed and efficiency, utilizing caching, lazy loading, and code
            splitting. We implement CDNs like Cloudflare, image optimization
            with WebP, and minification using tools like Terser and UglifyJS.
          </li>
          <li>
            <strong>Reliability:</strong> We implement robust architectures with
            scalable databases, secure authentication, and automated testing to
            ensure reliability. Technologies like PostgreSQL, Firebase
            Authentication, and Jest help maintain stability.
          </li>
          <li>
            <strong>Accessibility:</strong> Our designs follow WCAG guidelines
            to make your site usable for everyone. We use ARIA attributes,
            keyboard navigation support, and color contrast checks.
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
          We leverage cutting-edge technologies to build high-performance
          applications.
        </p>
        <ul>
          <li>React, Next.js, TypeScript</li>
          <li>Node.js, Express.js, NestJS</li>
          <li>PostgreSQL, MongoDB, Firebase</li>
          <li>Cloud services like AWS, Vercel, Netlify</li>
        </ul>
      </motion.section>

      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>Get in Touch</h2>
        <p>Have a project in mind? Let's build something amazing together.</p>
        <Link to={"/contact"}>
          {" "}
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us
          </motion.button>{" "}
        </Link>
      </motion.section>
    </div>
  );
};

export default WebDevelopment;