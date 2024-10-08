import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
	title: string;
	link: string;
	description: string;
	tech: string[];
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6, delay: index * 0.1 }}
		className="relative group"
	>
		<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
		<motion.div
			whileHover={{ scale: 1.02 }}
			className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20 transform-gpu transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20"
		>
			<div className="flex justify-between items-start mb-4">
				<h3 className="text-xl font-semibold text-emerald-400">
					{project.title}
				</h3>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-emerald-400 hover:text-emerald-300"
				>
					<ExternalLink size={20} />
				</a>
			</div>
			<p className="text-gray-400 mb-4">{project.description}</p>
			<div className="flex flex-wrap gap-2">
				{project.tech.map((t) => (
					<span
						key={t}
						className="px-2 py-1 bg-emerald-900/30 rounded-full text-sm text-emerald-300 hover:bg-emerald-800/40 transition-colors"
					>
						{t}
					</span>
				))}
			</div>
		</motion.div>
	</motion.div>
);
