import React from "react";
import "../Styles/NotFound.css";

const NotFound:React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="ufo-container">
        <div className="ufo">
          <div className="top"></div>
          <div className="middle"></div>
          <div className="lights">
            <span></span><span></span><span></span>
          </div>
          <div className="beam"></div>
        </div>
      </div>
      <h1 className="floating-text">404</h1>
      <p className="fade-in">Oops! This page was abducted.</p>
      <a href="/" className="home-button fade-in">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;