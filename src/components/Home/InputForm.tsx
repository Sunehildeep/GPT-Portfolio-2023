import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Markdown from "react-markdown";
import { Send, Bot, Sparkles } from "lucide-react";
import { getAnswer } from "@/services/gpt";
import { saveDetails } from "@/services/tracker";

export const InputForm = () => {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const askGpt = async () => {
		try {
			setIsLoading(true);
			let res = "";
			for await (const chunk of getAnswer(input)) {
				res += chunk;
				setResponse((prev) => prev + chunk);
			}
			saveDetails("Asked: " + input + " | Answered: " + res);
		} catch (error) {
			console.error("Error:", error);
			setResponse("Sorry, there was an error processing your request.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (input === "") {
			setResponse("");
		}
	}, [input]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="relative group"
		>
			<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

			<div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 border border-emerald-500/20">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="flex items-center gap-3 mb-6"
				>
					<Bot className="h-6 w-6 text-emerald-400" />
					<p className="text-lg text-emerald-400">AI Assistant - Mini Me</p>
				</motion.div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (input.trim()) {
							setResponse("");
							askGpt();
						}
					}}
					className="space-y-6"
				>
					<div className="relative">
						<motion.div
							className="flex items-center gap-4"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Ask me anything about myself..."
								className="w-full p-4 rounded-lg bg-black/50 text-white placeholder-gray-400 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
							/>
							<motion.button
								type="submit"
								disabled={!input.trim() || isLoading}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`p-4 rounded-lg ${
									!input.trim() || isLoading
										? "bg-emerald-600/50 cursor-not-allowed"
										: "bg-emerald-500 hover:bg-emerald-600"
								} text-white transition-colors duration-300 flex items-center gap-2`}
							>
								{isLoading ? (
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "linear",
										}}
									>
										<Sparkles className="h-5 w-5" />
									</motion.div>
								) : (
									<Send className="h-5 w-5" />
								)}
							</motion.button>
						</motion.div>
					</div>

					<AnimatePresence>
						{response && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="p-6 rounded-lg bg-emerald-900/20 border border-emerald-500/20"
							>
								<div className="prose prose-invert max-w-none">
									<Markdown>{response}</Markdown>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</form>
			</div>
		</motion.div>
	);
};
