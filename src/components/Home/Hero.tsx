import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "./constants";
import { ChevronDown } from "lucide-react";

function Hero() {
	const { scrollYProgress } = useScroll();

	// Transform values for parallax effects
	const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
	const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

	return (
		<motion.section
			id="home"
			className="min-h-screen flex items-center justify-center relative px-8 lg:px-24"
			style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
		>
			<div className="max-w-7xl w-full mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="space-y-8"
				>
					<motion.div
						className="relative w-48 h-48 mx-auto mb-12 group"
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.7 }}
					>
						{/* Gradient ring animation */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
						{/* Base glow layer with increased blur */}
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.4, 0.6, 0.4],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 blur-3xl"
						/>

						{/* Second layer with different timing */}
						<motion.div
							animate={{
								scale: [1.1, 1, 1.1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-blue-500/25 blur-2xl"
						/>

						{/* Third layer with brighter colors */}
						<motion.div
							animate={{
								scale: [1.2, 1.1, 1.2],
								opacity: [0.2, 0.4, 0.2],
							}}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 blur-xl"
						/>

						{/* Inner bright core */}
						<motion.div
							animate={{
								scale: [0.8, 1, 0.8],
								opacity: [0.6, 0.8, 0.6],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300/40 via-blue-300/40 to-purple-300/40 blur-lg"
						/>
						{/* Image container */}
						<motion.div
							className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-sm"
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							{/* Border gradient */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 p-[4px]">
								<div className="absolute inset-0 rounded-full bg-black" />
							</div>

							{/* Image */}
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="relative w-full h-full rounded-full overflow-hidden"
							>
								<Image
									src="/images/me_full.jpg"
									alt="Sunehildeep Singh"
									className="w-full h-full object-cover"
									width={300}
									height={300}
								/>
							</motion.div>
						</motion.div>
					</motion.div>

					<h1 className="text-5xl md:text-9xl font-bold text-center">
						<motion.span
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
						>
							Sunehildeep
						</motion.span>
						<motion.span
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="pb-4 block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
						>
							Singh
						</motion.span>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-2xl text-purple-300 text-center max-w-3xl mx-auto"
					>
						AI specialist and software engineer with a passion sparked by an
						early start in programming at 14. Leveraging neural networks to
						drive innovation and efficiency.
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="flex justify-center gap-8"
					>
						{socialLinks.map((link, index) => (
							<motion.a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{
									scale: 1.2,
									y: -5,
									color: "#A855F7",
								}}
								className="text-white/60 hover:text-white p-2"
							>
								<link.icon size={28} />
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className="absolute bottom-12 left-1/2 -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ChevronDown className="text-white/60 w-8 h-8" />
				</motion.div>
			</div>
		</motion.section>
	);
}

export default Hero;
