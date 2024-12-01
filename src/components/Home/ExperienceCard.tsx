import React from "react";
import { motion } from "framer-motion";

interface Experience {
	role: string;
	company: string;
	period: string;
	description: string[];
	skills?: string[];
}

interface ExperienceCardProps {
	experience: Experience;
	index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
	return (
		<motion.div
			key={experience.role}
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			className="group relative"
		>
			<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12 transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20">
				{" "}
				<div className="space-y-6">
					<div className="space-y-2">
						<h3 className="text-3xl font-bold">{experience.role}</h3>
						<p className="text-purple-400 text-xl">{experience.company}</p>
						<p className="text-gray-500">{experience.period}</p>
					</div>

					<div className="space-y-4">
						{experience.description.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="flex items-start gap-4"
							>
								<span className="w-2 h-2 bg-purple-500 rounded-full mt-3" />
								<p className="text-gray-400 text-lg flex-1">{item}</p>
							</motion.div>
						))}
					</div>

					{experience.skills && (
						<div className="flex flex-wrap gap-3 pt-6">
							{experience.skills.map((skill, i) => (
								<span
									key={i}
									className="px-4 py-2 bg-white/5 rounded-full text-gray-300"
								>
									{skill}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};
