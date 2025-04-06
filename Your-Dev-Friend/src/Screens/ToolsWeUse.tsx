import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDatabase,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiGooglemarketingplatform,
} from "react-icons/si";

import "../components/Styles/ToolsWeUse.css";

const ToolsWeUse: React.FC = () => {
  const rows = [
    [
      {
        title: "Frontend",
        tools: [
          { icon: FaReact, name: "React" },
          { icon: FaHtml5, name: "HTML5" },
          { icon: FaCss3Alt, name: "CSS3" },
        ],
      },
      {
        title: "Backend",
        tools: [
          { icon: FaNodeJs, name: "NodeJS" },
          { icon: FaPython, name: "Python" },
          { icon: FaPhp, name: "PHP" },
        ],
      },
      {
        title: "Database",
        tools: [
          { icon: SiMongodb, name: "MongoDB" },
          { icon: SiMysql, name: "MySQL" },
          { icon: FaDatabase, name: "SQL" },
        ],
      },
    ],
    [
      {
        title: "Mobile App",
        tools: [
          { icon: SiFlutter, name: "Flutter" },
          { icon: SiDart, name: "Dart" },
          { icon: FaMobileAlt, name: "Mobile Dev" },
        ],
      },
      {
        title: "SEO / Marketing",
        tools: [
          { icon: FaSearch, name: "SEO" },
          { icon: SiGooglemarketingplatform, name: "Google Marketing" },
        ],
      },
    ],
  ];

  return (
    <div className="tools-we-use">
      <motion.h2 className="animated-title"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}>
          Tools We Use
      </motion.h2>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="tool-section glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{section.title}</h3>
              <div
                className={`icons ${
                  section.tools.length === 2 ? "two-cols" : "three-cols"
                }`}
              >
                {section.tools.map(({ icon: Icon, name }, i) => (
                  <div className="icon tooltip" key={i}>
                    <Icon />
                    <span className="tooltiptext">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ToolsWeUse;
