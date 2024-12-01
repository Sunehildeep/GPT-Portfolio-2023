"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, experiences, timeline } from "./constants";
import { TimelineCard } from "./TimelineCard";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectCard } from "./ProjectCard";
import Hero from "./Hero";
import ScrollIndicator from "./ScrollIndicator";
import FloatingNav from "./FloatingNav";
import CursorHighlight from "./CursorHighlight";
import Footer from "./Footer";
import { InputForm } from "./InputForm";
import Loader from "./Loader";
import { saveDetails } from "@/services/tracker";

const PortfolioSite = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef(null);

	useEffect(() => {
		saveDetails("Home Page visited");
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		setTimeout(() => setIsLoading(false), 1500);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			<AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
			<div ref={containerRef} className="min-h-screen bg-black text-white">
				<CursorHighlight mousePosition={mousePosition} />
				<FloatingNav isLoading={isLoading} />
				<ScrollIndicator />

				{/* Hero Section */}
				<Hero />

				{/* Chat Section */}
				<section id="chat" className="py-32 px-8 lg:px-24 relative">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center space-y-4 mb-24"
						>
							<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
								Chat with Me
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								An assistant that acts like a mini-me, answering your questions.
							</p>
						</motion.div>

						<div className="space-y-32">
							<InputForm />
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="min-h-screen py-32 px-8 lg:px-24 relative"
				>
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center space-y-4 mb-24"
						>
							<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
								Featured Projects
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								A showcase of technical innovations and creative solutions.
							</p>
						</motion.div>

						<div className="space-y-32">
							{projects.map((project, index) => (
								<ProjectCard
									key={project.title}
									index={index}
									project={project}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Experience Section */}
				<section
					id="experience"
					className="min-h-screen py-32 px-8 lg:px-24 relative"
				>
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center space-y-4 mb-24"
						>
							<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
								Professional Experience
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								A journey of growth and impact in software development.
							</p>
						</motion.div>

						<div className="space-y-24">
							{experiences.map((experience, index) => (
								<ExperienceCard
									key={experience.role}
									experience={experience}
									index={index}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Journey Section */}
				<section
					id="journey"
					className="overflow-x-hidden min-h-screen py-32 px-8 lg:px-24"
				>
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center space-y-4 mb-24"
						>
							<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
								My Journey
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								The evolution of my passion for technology and innovation.
							</p>
						</motion.div>

						<div className="relative">
							<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent" />

							<div className="space-y-32">
								{timeline.map((event, index) => (
									<TimelineCard key={event.year} event={event} index={index} />
								))}
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
};

export default PortfolioSite;
