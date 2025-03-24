import React from "react";
import "../components/Styles/Home.css";
import WhoWeAre from "./Whoweare";
import { Link } from "react-router-dom";
// import { radialGradient } from "motion/react-client";
// import Services from "../components/Services/Services";

const Home: React.FC = () => {
  return (
    <div>
      <div className="home">
        <div className="hero">
          <div className="hero-content">
            <h1>Craft Your Digital Success</h1>
            <p>
              We transform ideas into exceptional digital experiences, combining
              cutting-edge technology with stunning design.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link to="/our-work" className="btn btn-secondary">
                Our Work
              </Link>
            </div>
          </div>

          <div className="image-container">
            <img
              src="./webd.avif"
              alt="Developer workspace with laptop showing code"
            />
          </div>
        </div>
        {/* <div className="success-icon">
          <svg
            className="check-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
      </div>
      <div>
        <WhoWeAre />
      </div>
      {/* <Services/> */}
    </div>
  );
};

export default Home;
