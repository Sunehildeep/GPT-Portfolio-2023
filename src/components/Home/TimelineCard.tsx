import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface Timeline {
	year: string;
	content: string;
}

interface TimelineCardProps {
	timeline: Timeline;
	index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
	timeline,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="relative pl-8 md:pl-12"
		>
			{/* Timeline Line */}
			<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 to-cyan-500" />

			{/* Timeline Dot */}
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ delay: 0.2, type: "spring" }}
				viewport={{ once: true }}
				className="absolute left-0 transform -translate-x-1/2"
			>
				<div className="w-8 h-8 rounded-full bg-black/50 border border-emerald-500 flex items-center justify-center">
					<Clock className="h-4 w-4 text-emerald-400" />
				</div>
			</motion.div>

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
				viewport={{ once: true }}
				className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20"
			>
				<div className="space-y-4">
					<div className="flex items-center space-x-3">
						<h3 className="text-2xl font-bold text-emerald-400">
							{timeline.year}
						</h3>
					</div>
					<p className="text-gray-300 leading-relaxed">{timeline.content}</p>
				</div>

				{/* Visual Element */}
				<motion.div
					className="absolute top-4 right-4 opacity-10"
					animate={{
						rotate: [0, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					<Clock className="h-12 w-12 text-emerald-400" />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};
