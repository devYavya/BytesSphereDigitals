import React from "react";
import "../Styles/ExpertiseSection.css";

const ExpertiseSection: React.FC = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <h2 className="expertise-heading">Our Expertise</h2>
        <p className="expertise-subheading">
          Delivering exceptional digital solutions that drive real business
          results
        </p>

        <div className="expertise-cards">
          <div className="expertise-card">
            <div className="expertise-icon-container">
              <svg
                className="expertise-icon web-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4v-9h4v9z" />
              </svg>
            </div>
            <h3 className="expertise-card-title">Web Development</h3>
            <p className="expertise-card-desc">
              Custom websites built with modern technologies for optimal
              performance and user experience.
            </p>
            <ul className="expertise-list">
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                React & Next.js
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Performance Optimization
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Responsive Design
              </li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon-container">
              <svg
                className="expertise-icon design-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
                <circle cx="6.5" cy="11.5" r="1.5" />
                <circle cx="9.5" cy="7.5" r="1.5" />
                <circle cx="14.5" cy="7.5" r="1.5" />
                <circle cx="17.5" cy="11.5" r="1.5" />
              </svg>
            </div>
            <h3 className="expertise-card-title">UI/UX Design</h3>
            <p className="expertise-card-desc">
              Beautiful, intuitive designs that engage your users and drive
              conversions.
            </p>
            <ul className="expertise-list">
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                User Research
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Wireframing
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Visual Design
              </li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon-container">
              <svg
                className="expertise-icon strategy-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M13 17.12V20h5v2H6v-2h5v-2.88c-4.86-1.29-8-5.4-8-9.62C3 5.12 7.58 2 13 2s10 3.12 10 7.5c0 4.22-3.14 8.33-8 9.62zM13 4c-4.12 0-8 2.7-8 5.5 0 3.48 3.9 6.5 8 6.5s8-3.02 8-6.5C21 6.7 17.12 4 13 4z" />
              </svg>
            </div>
            <h3 className="expertise-card-title">Digital Strategy</h3>
            <p className="expertise-card-desc">
              Strategic planning and consulting to maximize your online
              presence.
            </p>
            <ul className="expertise-list">
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Market Analysis
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                Growth Strategy
              </li>
              <li className="expertise-list-item">
                <span className="check-icon"></span>
                KPI Tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
