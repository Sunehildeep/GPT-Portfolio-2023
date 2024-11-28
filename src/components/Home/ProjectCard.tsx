import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

interface Project {
	title: string;
	description: string;
	tech: string[];
	link: string;
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
			className="relative group h-full"
		>
			<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

			<div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 h-full transition-colors">
				{/* Header */}
				<div className="flex items-start justify-between mb-6">
					<div className="flex items-center space-x-3">
						<Code className="h-5 w-5 text-emerald-400" />
						<h3 className="text-xl font-bold text-emerald-400">
							{project.title}
						</h3>
					</div>
					<motion.a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.1, rotate: 5 }}
						className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-colors"
					>
						<Github className="h-5 w-5" />
					</motion.a>
				</div>

				{/* Description */}
				<p className="text-gray-300 mb-6">{project.description}</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mt-auto">
					{project.tech.map((tech, i) => (
						<motion.span
							key={tech}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 + i * 0.05 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05 }}
							className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full"
						>
							{tech}
						</motion.span>
					))}
				</div>

				{/* Hover Effect */}
				<motion.a
					target="_blank"
					href={project.link ?? ""}
					initial={false}
					animate={{ opacity: project.link ? 1 : 0 }}
					className="absolute inset-x-0 -bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<span className="bg-emerald-400 text-black text-sm px-3 py-1 rounded-full flex items-center space-x-1 cursor-pointer">
						<span>View Project</span>
						<ExternalLink className="h-3 w-3" />
					</span>
				</motion.a>
			</div>
		</motion.div>
	);
};
