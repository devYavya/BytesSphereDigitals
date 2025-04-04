import { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <nav className="navbar">
        <Link to="/">
          <div className="logo">
            <img src="./logomain.jpg" alt="Your-Dev-Friend" />
            {/* ByteSphere Digital */}
          </div>
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)}>
            Solutions
          </Link>
          {/* <Link to="/case-studies" onClick={() => setIsOpen(false)}>
          Case Studies
        </Link> */}
          <Link to="/testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          {/* <Link to="/portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
        <Link to="/process" onClick={() => setIsOpen(false)}>
          Process
        </Link> */}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Connect With us
          </Link>
        </div>
      </nav>
      <div className="nav-divider"></div>
    </>
  );
};

export default Navbar;
