import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
	title: string;
	company: string;
	period: string;
	description: string[];
	skills: string[];
}

interface ExperienceCardProps {
	experience: Experience;
	index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
	experience,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="relative group"
			whileHover={{ scale: 1.05 }}
		>
			<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

			<div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20">
				<div className="space-y-6">
					{/* Header */}
					<div className="flex flex-col space-y-2">
						<div className="flex items-center space-x-3">
							<Briefcase className="h-5 w-5 text-emerald-400" />
							<h3 className="text-xl font-bold text-emerald-400">
								{experience.title}
							</h3>
						</div>
						<div className="flex items-center space-x-3 text-gray-400">
							<div className="flex items-center space-x-1">
								<span className="text-lg">{experience.company}</span>
							</div>
							<span>•</span>
							<div className="flex items-center space-x-1">
								<Calendar className="h-4 w-4" />
								<span>{experience.period}</span>
							</div>
						</div>
					</div>

					{/* Description */}
					<ul className="space-y-3">
						{experience.description.map((desc, i) => (
							<motion.li
								key={i}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 + i * 0.1 }}
								viewport={{ once: true }}
								className="flex items-start space-x-3 text-gray-300"
							>
								<span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
								<span>{desc}</span>
							</motion.li>
						))}
					</ul>

					{/* Skills */}
					<div className="flex flex-wrap gap-2">
						{experience.skills.map((skill, i) => (
							<motion.span
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3 + i * 0.05 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full"
							>
								{skill}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
