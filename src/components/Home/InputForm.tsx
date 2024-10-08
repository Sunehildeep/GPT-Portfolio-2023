"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAnswer } from "@/services/gpt";
import { saveDetails } from "@/services/tracker";
import Markdown from "react-markdown";

export const InputForm = () => {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");

	const askGpt = async () => {
		for await (const chunk of getAnswer(input)) {
			setResponse((prev) => prev + chunk);
		}
		saveDetails("Asked: " + input + " | Answered: " + response);
	};

	useEffect(() => {
		if (response) {
			setResponse("");
		}
	}, [input]);

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			className="relative group border-l border-emerald-500"
		>
			{/* Glowing Gradient Background */}
			<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

			{/* Input Form */}
			<div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
				<form
					className="flex flex-col items-center gap-4"
					onSubmit={(e) => {
						e.preventDefault();
						askGpt();
					}}
				>
					<div className="text-emerald-400 text-lg font-semibold mb-4">
						The AI Chatbot is a mini-me and can answer your questions related to
						me :) Try asking about my experience, projects, or anything else!
					</div>
					<div className="flex">
						<input
							type="text"
							className="w-full p-2 rounded-lg bg-transparent text-white placeholder-gray-400 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
							placeholder="Type your message"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={askGpt}
							type="submit"
							className="bg-emerald-400 text-white px-4 py-2 rounded-lg ml-2 transition-colors duration-300 hover:bg-emerald-500"
						>
							Ask
						</motion.button>
					</div>
					{/* Response */}
					{response && (
						<div className="w-full p-2 rounded-lg bg-transparent text-white placeholder-gray-400 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300">
							<Markdown>{response}</Markdown>
						</div>
					)}
				</form>
			</div>
		</motion.div>
	);
};
