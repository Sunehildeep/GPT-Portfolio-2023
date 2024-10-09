"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Github, Linkedin, Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import { experiences, projects, socialLinks, timelineData } from "./constants";
import { ExperienceCard } from "./ExperienceCard";
import { TimelineCard } from "./TimelineCard";
import { ProjectCard } from "./ProjectCard";
import { saveDetails } from "@/services/tracker";
import { Link } from "react-scroll";
import { InputForm } from "./InputForm";

const sectionOffsets = [
	"chat",
	"experience",
	"achievements",
	"projects",
	"contact",
];

export default function Component() {
	const { scrollYProgress } = useScroll();
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
	const [activeSection, setActiveSection] = useState("chat");

	const logDetails = async (log: string) => {
		await saveDetails(log);
	};

	useEffect(() => {
		logDetails("Visited Home Page");
	}, []);

	useEffect(() => {
		// Check intersection observer for active section
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		sectionOffsets.forEach((section) => {
			const el = document.getElementById(section);
			if (el) {
				observer.observe(el);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [scrollYProgress]);

	return (
		<div className="bg-gray-900 min-h-screen text-white overflow-x-hidden relative">
			<motion.div
				className="fixed inset-0 bg-gradient-to-b from-gray-900 via-emerald-900/20 to-gray-900"
				style={{ y: backgroundY }}
			/>

			<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/50 backdrop-blur-lg shadow-neon rounded-full px-6 py-3 flex justify-center items-center space-x-3 md:space-x-6 w-auto">
				{sectionOffsets.map((item) => (
					<Link
						key={item}
						onClick={() => setActiveSection(item)}
						to={item}
						smooth
						duration={500}
						className={`text-sm md:text-lg ${
							activeSection === item ? "text-emerald-400" : "text-emerald-600"
						} hover:text-emerald-300 transition cursor-pointer`}
					>
						{item.charAt(0).toUpperCase() + item.slice(1)}
					</Link>
				))}
			</nav>

			<main className="container mx-auto px-6 relative z-10">
				<section
					className="min-h-screen flex items-center justify-center relative"
					id="home"
				>
					<motion.div
						className="text-center relative z-10 flex flex-col items-center space-y-7"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<div className="relative inline-block mb-8">
							<div className="w-40 h-40 absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 blur opacity-50" />
							<Image
								src="/images/me_full.jpg"
								width={160}
								height={160}
								alt="Sunehildeep Singh"
								className="rounded-full relative z-10 object-cover w-40 h-40"
							/>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 p-2">
							Sunehildeep Singh
						</h1>
						<ReactTyped
							strings={[
								"AI Engineer",
								"Coding since 14",
								"Software Engineer at 19",
								`${new Date().getFullYear() - 2002} years old`,
								"Full Stack Developer",
								"Community Contributor",
							]}
							typeSpeed={50}
							backSpeed={30}
							loop
							className="text-xl md:text-2xl text-emerald-300 mb-8 p-2"
						/>
						<div className="flex space-x-6 items-center justify-center p-2">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-emerald-400 hover:text-emerald-300 hover:scale-110 transform transition-all duration-300 "
									title={link.tooltip}
								>
									{link.icon}
								</a>
							))}
						</div>
					</motion.div>
				</section>

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

				<section id="experience" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-12 text-center">
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
				<section id="achievements" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-12 text-center">
							Achievements
						</h2>
						<div className="space-y-12">
							{timelineData.map((experience, index) => (
								<motion.div
									key={experience.year}
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 200 }}
								>
									<TimelineCard timeline={experience} index={index} />
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>
				<section id="projects" className="py-20  flex flex-col justify-center">
					<h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-12 text-center">
						Featured Projects
					</h2>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</section>

				<section id="contact" className="py-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="space-y-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-12 text-center">
							Contact
						</h2>
						<div className="flex flex-col items-center space-y-6">
							{[
								{
									icon: Github,
									text: "GitHub",
									href: "https://github.com/Sunehildeep",
								},
								{
									icon: Mail,
									text: "Email",
									href: "mailto:sunehildeep@gmail.com",
								},
								{
									icon: Linkedin,
									text: "LinkedIn",
									href: "https://www.linkedin.com/in/sunehildeepsingh/",
								},
								{
									icon: Paperclip,
									text: "Resume",
									href: "/images/SunehildeepSingh_Resume.pdf",
								},
							].map((item, index) => (
								<a
									key={index}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-4 text-emerald-400 hover:text-emerald-300 transition-colors"
								>
									<item.icon size={24} />
									<span>{item.text}</span>
								</a>
							))}
						</div>
					</motion.div>
				</section>
			</main>

			<footer className="py-12 text-center text-emerald-300">
				<p>Made with ❤️ by Sunehildeep Singh © {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
}
