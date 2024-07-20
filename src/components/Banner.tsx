import React from "react";
import "../styles/cyberpunk.css";
import { Link } from "react-scroll";
import ReactMarkdown from "react-markdown";

const CyberpunkBanner = ({ text }: { text: string }) => {
	return (
		<section className="cyberpunk-banner">
			<div className="glitch-container">
				<div className="glitch-overlay"></div>
				<h1 className="glitch-text">This won&apos;t be like other websites</h1>
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
					You won&apos;t regret it
				</Link>
			</div>
		</section>
	);
};

export default CyberpunkBanner;
