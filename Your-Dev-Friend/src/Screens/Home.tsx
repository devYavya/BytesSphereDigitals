import React from "react";
import { motion } from "framer-motion";
import "../components/Styles/Home.css";
import WhoWeAre from "./Whoweare";
import { Link } from "react-router-dom";
import MeetUs from "./MeetUs";
import ToolsWeUse from "./ToolsWeUse";

const Home: React.FC = () => {
  return (
    <>
      {/*       <div>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-fbafde17-b30f-48b4-bc27-f66876e4ce72"
          data-elfsight-app-lazy
        ></div>
      </div> */}
      <div>
        <motion.div
          className="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Craft Your Digital Success</h1>
              <p>
                We transform ideas into exceptional digital experiences,
                combining cutting-edge technology with stunning design.
              </p>
              {/* <h1>We Don’t Just Build Websites. We Build Confidence.</h1>
              <p>
                From elegant designs to rock-solid code — we craft digital
                experiences that convert. Partner with us and elevate your
                vision.
              </p> */}

              <div className="cta-buttons">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link to="/contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link to="/our-work" className="btn btn-secondary">
                    Our Work
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="image-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="./webd.avif"
                alt="Developer workspace with laptop showing code"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <ToolsWeUse />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <WhoWeAre />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <MeetUs />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
