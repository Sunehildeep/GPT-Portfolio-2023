"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences, projects, socialLinks, timelineData } from "./constants";
import { ExperienceCard } from "./ExperienceCard";
import { TimelineCard } from "./TimelineCard";
import { ProjectCard } from "./ProjectCard";
import { ReactTyped } from "react-typed"; // Importing Typed for typing effect
import { InputForm } from "./InputForm";
import { Github, Linkedin, Mail, Paperclip } from "lucide-react";
import { saveDetails } from "@/services/tracker";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Home() {
	const { scrollYProgress } = useScroll();
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

	const logDetails = async (log: string) => {
		await saveDetails(log);
	};

	useEffect(() => {
		logDetails("Visited Home Page");
	}, []);

	return (
		<div className="bg-gray-900 min-h-screen text-white overflow-x-hidden relative">
			{/* Parallax Background */}
			<motion.div
				className="fixed inset-0 bg-gradient-to-b from-gray-900 via-emerald-900/20 to-gray-900"
				style={{ y: backgroundY }}
			/>

			<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/10 backdrop-blur-lg shadow-md rounded-full px-4 md;px-6 py-3 flex justify-center items-center space-x-6 w-auto">
				<ul className="flex text-sm space-x-6 md:text-lg text-gray-300">
					<li>
						<Link
							smooth
							duration={500}
							to="chat"
							className="hover:text-white transition"
						>
							Chat
						</Link>
					</li>
					<li>
						<Link
							smooth
							duration={500}
							to="experience"
							className="hover:text-white transition"
						>
							Experience
						</Link>
					</li>
					<li>
						<Link
							smooth
							duration={500}
							to="journey"
							className="hover:text-white transition"
						>
							Journey
						</Link>
					</li>
					<li>
						<Link
							smooth
							duration={500}
							to="projects"
							className="hover:text-white transition"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							smooth
							duration={500}
							to="contact"
							className="hover:text-white transition"
						>
							Contact
						</Link>
					</li>
					<li className="hidden md:block">
						<a
							href="https://sunehildeepsingh.com/images/SunehildeepSingh_Resume.pdf"
							className="hover:text-white transition"
							target="_blank"
						>
							Resume
						</a>
					</li>
				</ul>
			</nav>

			{/* Main Header Section */}
			<div
				className="min-h-screen flex items-center justify-center relative z-10"
				id="home"
			>
				<motion.div
					className="flex flex-col text-center relative z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="relative inline-block">
						{/* Neon Glow Effect */}
						<div className="w-32 h-32 md:w-40 md:h-40 m-auto absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 blur opacity-50"></div>
						{/* Image */}
						<Image
							src="/images/me_full.jpg"
							width={160}
							height={160}
							alt="Sunehildeep Singh"
							className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 relative z-10 object-cover"
						/>
					</div>

					<h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Sunehildeep Singh
					</h1>
					{/* Typing effect */}
					<ReactTyped
						strings={[
							"AI Engineer",
							"Coding since 14",
							"Software Engineer at 19",
							new Date().getFullYear() - 2002 + " years old",
							"Software Developer",
							"Full Stack Developer",
							"Community Contributor",
						]}
						typeSpeed={50}
						backSpeed={30}
						loop
						className="text-2xl text-gray-300 mb-8"
					/>

					<div className="flex space-x-6 items-center justify-center">
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-emerald-400 hover:text-emerald-300 hover:scale-110 transform transition-all duration-300"
								title={link.tooltip}
							>
								{link.icon}
							</a>
						))}
					</div>
				</motion.div>
			</div>

			<main className="container mx-auto px-6 relative z-10">
				{/* Chat real time  */}
				<section id="chat" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-5xl font-bold text-emerald-400 mb-12 text-center">
							AI Chat
						</h2>

						{/* Input */}
						<InputForm />
					</motion.div>
				</section>
				{/* Experience Section */}
				<section id="experience" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-5xl font-bold text-emerald-400 mb-12 text-center">
							Experience
						</h2>
						<div className="space-y-12">
							{experiences.map((experience, index) => (
								<motion.div
									key={experience.company}
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 200 }}
								>
									<ExperienceCard experience={experience} index={index} />
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				{/* Journey Section */}
				<section id="journey" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-5xl font-bold text-emerald-400 mb-12 text-center">
							Journey
						</h2>
						<div className="space-y-12">
							{timelineData.map((timeline, index) => (
								<motion.div
									key={timeline.year}
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 200 }}
								>
									<TimelineCard timeline={timeline} index={index} />
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				{/* Projects Section with 3D Cards */}
				<section id="projects" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-5xl font-bold text-emerald-400 mb-12 text-center">
							Featured Projects
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
							{projects.map((project, index) => (
								<motion.div
									key={project.title}
									whileHover={{ scale: 1.05, rotateY: 10 }}
									transition={{ type: "spring", stiffness: 200 }}
								>
									<ProjectCard project={project} index={index} />
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-5xl font-bold text-emerald-400 mb-12 text-center">
							Contact
						</h2>
						<div className="flex flex-col items-center space-y-6">
							<div className="flex items-center space-x-4">
								<Github size={24} className="text-emerald-400" />
								<a
									href="https://github.com/Sunehildeep"
									target="_blank"
									rel="noopener noreferrer"
									className="text-emerald-400 hover:text-emerald-300"
								>
									GitHub
								</a>
								<Mail size={24} className="text-emerald-400" />
								<a
									href="mailto:sunehildeep@gmail.com"
									className="text-emerald-400 hover:text-emerald-300"
								>
									Email
								</a>
							</div>

							<div className="flex items-center space-x-4">
								<Linkedin size={24} className="text-emerald-400" />
								<a
									href="https://www.linkedin.com/in/sunehildeep/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-emerald-400 hover:text-emerald-300"
								>
									LinkedIn
								</a>
								<Paperclip size={24} className="text-emerald-400" />
								<a
									href="https://sunehildeepsingh.com/images/SunehildeepSingh_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="text-emerald-400 hover:text-emerald-300"
								>
									Resume
								</a>
							</div>
						</div>
					</motion.div>
				</section>
			</main>

			<footer className="py-12 text-center text-gray-300">
				<p>Made with ❤️ by Sunehildeep Singh © {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
}
