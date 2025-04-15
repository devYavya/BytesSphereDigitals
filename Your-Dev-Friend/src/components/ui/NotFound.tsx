import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="cyberpunk-container">
      <div className="glitch-background" />
      <div className="glitch-content">
        <h1 className="glitch" data-text="404">
          404
        </h1>
        <h2 className="glitch" data-text="Page Not Found">
          Page Not Found
        </h2>
        <p>The system couldn’t locate this address in the grid.</p>
        <Link to="/" className="btn-glow">
          Return to Base
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
