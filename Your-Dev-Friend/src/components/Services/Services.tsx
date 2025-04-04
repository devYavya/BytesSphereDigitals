import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import "../Styles/Services.css";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and scalable web applications.",
    icon: <FaCode className="service-icon" />,
    navigate: "/WebDevelopment",
  },
  {
    title: "UX Design",
    description:
      "Creating intuitive and user-friendly designs for better experiences.",
    icon: <FaPaintBrush className="service-icon" />,
    navigate: "/UXDesign",
  },
  {
    title: "Mobile App Development",
    description: "Developing high-quality mobile apps for iOS and Android.",
    icon: <FaMobileAlt className="service-icon" />,
    navigate: "/MobileDevelopment",
  },
  {
    title: "SEO & Testing Services",
    description:
      "Optimizing websites for search engines and providing testing services to make it more user-friendly.",
    icon: <FaChartLine className="service-icon" />,
    navigate: "/SEOTesting",
  },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Why Us Section */}
      <motion.div
        className="why-us-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="why-us-title">Why Choose Us? </h1>
        <p className="why-us-subtitle">
          We don’t just build websites and apps; we create digital experiences
          that drive success.
        </p>
        <div className="why-us-reasons">
          {[
            {
              title: "✅ Expertise & Innovation",
              text: "Our team stays ahead of industry trends, using the latest technologies to deliver cutting-edge solutions.",
            },
            {
              title: "✅ Customer-Centric Approach",
              text: "We prioritize our clients' needs, ensuring seamless communication and tailored solutions that align with their business goals.",
            },
            {
              title: "✅ Reliable & Scalable Solutions",
              text: "We design systems that grow with your business, ensuring long-term success.",
            },
            {
              title: "✅ Quality & Performance",
              text: "We rigorously test all our products to guarantee fast, secure, and bug-free experiences for users.",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              className="reason"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="services-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          We provide top-notch solutions to help your business grow.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <button
                className="service-btn"
                onClick={() => navigate(service.navigate)}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;
