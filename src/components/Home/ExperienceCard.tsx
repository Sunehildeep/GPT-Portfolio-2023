import { motion } from "framer-motion";

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
}) => (
	<motion.div
		initial={{ opacity: 0, x: -50 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.6, delay: index * 0.1 }}
		className="relative group"
	>
		<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
		<div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
			<h3 className="text-xl font-semibold text-emerald-400">
				{experience.title}
			</h3>
			<p className="text-emerald-300 mb-2">{experience.company}</p>
			<p className="text-gray-500 mb-4">{experience.period}</p>
			<ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
				{experience.description.map((desc, i) => (
					<li key={i}>{desc}</li>
				))}
			</ul>
			<div className="flex flex-wrap gap-2">
				{experience.skills.map((skill) => (
					<span
						key={skill}
						className="px-2 py-1 bg-emerald-900/30 rounded-full text-sm text-emerald-300"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	</motion.div>
);
