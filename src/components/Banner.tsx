import React from "react";
import "../styles/cyberpunk.css";
import { Link } from "react-scroll";
import ReactMarkdown from "react-markdown";

const CyberpunkBanner = ({ text }: { text: string }) => {
	return (
		<div className="cyberpunk-banner">
			<video className="bg-video" autoPlay loop muted>
				<source src={"images/bg2.mp4"} type="video/mp4" />
			</video>
			<div className="glitch-container">
				<div className="glitch-overlay"></div>
				<h1 className="glitch-text">Welcome to my Portfolio</h1>
				<span className="glitch-subtitle">
					<ReactMarkdown>{text}</ReactMarkdown>
				</span>

				<Link
					className="glitch-button"
					to="askme"
					smooth={true}
					duration={500}
					offset={-200}
				>
					Learn More
				</Link>
			</div>
		</div>
	);
};

export default CyberpunkBanner;
