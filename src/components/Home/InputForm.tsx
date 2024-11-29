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
			setResponse("");
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
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="group relative"
		>
			<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12 transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="flex flex-col gap-6"
				>
					<div className="flex items-center gap-3 mb-4">
						<Bot className="h-6 w-6 text-purple-400" />
						<p className="text-xl md:text-2xl text-purple-400">
							AI Assistant - Mini Me
						</p>
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (input.trim()) {
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
									placeholder="Ask me anything..."
									className="w-full p-4 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
								/>
								<motion.button
									type="submit"
									disabled={!input.trim() || isLoading}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={`p-4 rounded-lg ${
										!input.trim() || isLoading
											? "bg-purple-600/50 cursor-not-allowed"
											: "bg-purple-500 hover:bg-purple-600"
									} text-white transition-colors duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(128,0,128,0.3)]`}
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
									className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/20 shadow-[0_0_15px_rgba(128,0,128,0.1)]"
								>
									<div className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-purple-500/20">
										<Markdown>{response}</Markdown>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</form>
				</motion.div>
			</div>
		</motion.div>
	);
};
