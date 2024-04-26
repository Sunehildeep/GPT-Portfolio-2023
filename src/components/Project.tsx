import Image from "next/image";
import React from "react";

interface ProjectProps {
	title: string;
	description: string;
	image?: string;
	link: string;
}

const Project = ({ title, description, image, link }: ProjectProps) => {
	return (
		<div className="project">
			<a href={link}>
				<h3 className="cyberpunk-text">{title}</h3>
				<p className="cyberpunk-text">{description}</p>
				{image && (
					<Image
						width={300}
						height={300}
						src={image}
						alt={title}
						className="project-image"
					/>
				)}
			</a>
		</div>
	);
};

export default Project;
