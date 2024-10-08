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
}) => (
	<motion.div
		initial={{ opacity: 0, x: -50 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.6, delay: index * 0.1 }}
		className="relative group border-l border-emerald-500"
	>
		<div className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full">
			<Clock size={24} className="text-white" />
		</div>

		<div className="ml-12 bg-black/80 backdrop-blur-xl rounded-lg border border-emerald-500/20">
			<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
			<div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
				<h4 className="text-lg font-semibold text-emerald-400">
					{timeline.year}
				</h4>

				<p className="text-gray-400">{timeline.content}</p>
			</div>
		</div>
	</motion.div>
);
