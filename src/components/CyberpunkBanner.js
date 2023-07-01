import React from 'react';
import "../styles/cyberpunk.css";
import { Link } from "react-scroll";

const CyberpunkBanner = () => {
  return (
    <div className="cyberpunk-banner">
      <video className="bg-video" autoPlay loop muted>
        <source src={'images/bg2.mp4'} type="video/mp4" />
      </video>
      <div className="glitch-container">
        <div className="glitch-overlay"></div>
        <h1 className="glitch-text">Welcome to my Portfolio</h1>
        <p className="glitch-subtitle">
          An enthusiastic learner with a wealth of experience, <br/>I invite you to delve into my portfolio and witness the evolution of my knowledge and expertise. ;)
        </p>
        <Link className="glitch-button" to="about" smooth={true} duration={500} offset={-100}>
                Learn More
          </Link>
      </div>
    </div>
  );
};


export default CyberpunkBanner;
