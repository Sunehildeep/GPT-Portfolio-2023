import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
	title: string;
	description: string;
	category: string;
	tech: string[];
	link: string;
}

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.article
			key={project.title}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			className="group relative"
		>
			<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12 transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="flex flex-col gap-6"
				>
					<div className="space-y-2">
						<h3 className="text-4xl font-bold">{project.title}</h3>
						<p className="text-purple-400 text-xl">{project.category}</p>
					</div>

					<p className="text-gray-400 text-xl leading-relaxed max-w-4xl">
						{project.description}
					</p>

					<div className="flex flex-wrap gap-3">
						{project.tech.map((item, i) => (
							<span
								key={i}
								className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300"
							>
								{item}
							</span>
						))}
					</div>

					<motion.a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-white/60 hover:text-white w-fit"
						whileHover={{ x: 10 }}
					>
						View Project <ExternalLink size={20} />
					</motion.a>
				</motion.div>
			</div>
		</motion.article>
	);
};
