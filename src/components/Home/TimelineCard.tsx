import React from "react";
import { motion } from "framer-motion";

interface TimelineProps {
	event: TimelineEvent;
	index: number;
}

interface TimelineEvent {
	year: string;
	title: string;
	description: string;
}

export const TimelineCard = ({ event, index }: TimelineProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className={`relative flex ${index % 2 === 0 ? "justify-end" : ""}`}
		>
			<div className={`w-full md:w-1/2 ${index % 2 === 0 ? "pr-16" : "pl-16"}`}>
				<div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2">
					<div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75" />
				</div>

				<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20 hover:translate-x-2">
					{" "}
					<span className="text-purple-400 font-medium">{event.year}</span>
					<h3 className="text-2xl font-bold mt-2 mb-4">{event.title}</h3>
					<p className="text-gray-400 leading-relaxed">{event.description}</p>
				</div>
			</div>
		</motion.div>
	);
};
