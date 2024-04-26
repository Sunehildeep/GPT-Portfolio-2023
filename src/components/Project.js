import React from "react";

const Project = ({ title, description, image, link }) => {
	return (
		<div className="project">
			<a href={link}>
				<h3 className="cyberpunk-text">{title}</h3>
				<p className="cyberpunk-text">{description}</p>
				{image && <img src={image} alt={title} className="project-image" />}
			</a>
		</div>
	);
};

export default Project;
