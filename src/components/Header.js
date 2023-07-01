import React from 'react';
import '../styles/cyberpunk-header.css';
import { Link } from "react-scroll";

const Header = () => {
  return (

    <header className="cyberpunk-header">
      <div className="container">
        <h1 className="glitch-text">Sunehildeep Singh</h1>
        <nav>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-100}>
                About
              </Link>
            </li>
            <li>
              <Link to="goal" smooth={true} duration={500} offset={-100}>
                Goal
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-120}>
                Projects
              </Link>
            </li>
            <li>
              <a href="https://github.com/Sunehildeep">
                GitHub
              </a>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-100}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      
  );
};

export default Header;
