"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { Github, Linkedin, Mail, Paperclip, ChevronDown } from "lucide-react";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectCard } from "./ProjectCard";
import { InputForm } from "./InputForm";
import { projects, experiences, timelineData, socialLinks } from "./constants";
import { TimelineCard } from "./TimelineCard";

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState("home");
	const [isShrunk, setIsShrunk] = useState(false);

	// Navbar shrink effect
	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Navigation links
	const navLinks = [
		{ name: "Home", id: "home" },
		{ name: "Chat", id: "chat" },
		{ name: "Experience", id: "experience" },
		{ name: "Projects", id: "projects" },
		{ name: "Journey", id: "journey" },
		{ name: "Contact", id: "contact" },
	];

	// Improved scroll tracking
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "-20% 0px -70% 0px", // Adjusted to better detect current section
			threshold: 0,
		};

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersect, options);

		// Observe all sections
		navLinks.forEach(({ id }) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => {
			navLinks.forEach(({ id }) => {
				const section = document.getElementById(id);
				if (section) observer.unobserve(section);
			});
		};
	}, []); // Empty dependency array as we want this to run once

	// Scroll to section handler with offset
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const offset = 80; // Adjust based on navbar height
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = section.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	// Intersection Observer for active section
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.3,
				rootMargin: "-50% 0px -50% 0px",
			}
		);

		navLinks.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white">
			{/* Navigation Bar */}
			<motion.nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isShrunk ? "py-4 bg-black/80 backdrop-blur-lg" : "py-6 bg-transparent"
				}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between">
						<motion.span
							className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
							whileHover={{ scale: 1.05 }}
						>
							Sunehildeep
						</motion.span>
						<div className="hidden md:flex space-x-8">
							{navLinks.map((link) => (
								<motion.button
									key={link.id}
									onClick={() => scrollToSection(link.id)}
									className={`relative text-sm font-medium ${
										activeSection === link.id
											? "text-emerald-400"
											: "text-gray-400"
									} hover:text-emerald-400 transition-colors`}
									whileHover={{ scale: 1.1 }}
								>
									{link.name}
									{activeSection === link.id && (
										<motion.div
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400"
											layoutId="underline"
										/>
									)}
								</motion.button>
							))}
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Main Content */}
			<main>
				{/* Hero Section */}
				<section
					id="home"
					className="min-h-screen flex items-center justify-center pt-20"
				>
					<div className="container mx-auto px-6">
						<div className="flex flex-col items-center text-center space-y-8">
							{/* Profile Image */}
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
								}}
								className="relative w-48 h-48"
							>
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 blur-xl" />
								<Image
									src="/images/me_full.jpg"
									alt="Sunehildeep Singh"
									fill
									className="object-cover rounded-full border-2 border-emerald-500/50"
								/>
							</motion.div>

							{/* Name and Title */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="space-y-4"
							>
								<h1 className="text-5xl md:text-7xl font-bold">
									<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
										Sunehildeep Singh
									</span>
								</h1>
								<div className="h-[2rem]">
									<ReactTyped
										strings={[
											"Software Engineer at 19 💻",
											"AI Enthusiast 🤖",
											"Started Coding at 14 🚀",
											"Full Stack Developer ⚡",
										]}
										typeSpeed={50}
										backSpeed={30}
										loop
										className="text-xl text-gray-400"
									/>
								</div>
							</motion.div>

							{/* Social Links */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="flex space-x-6"
							>
								{socialLinks.map((link, index) => (
									<motion.a
										key={index}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.2, rotate: 5 }}
										className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-colors"
									>
										{link.icon}
									</motion.a>
								))}
							</motion.div>

							{/* Scroll Indicator */}
							<motion.div
								className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
								transition={{ repeat: Infinity, duration: 2 }}
								onClick={() => scrollToSection("chat")}
								whileHover={{ scale: 1.1 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								<ChevronDown className="w-10 h-10 text-emerald-400" />
							</motion.div>
						</div>
					</div>
				</section>

				{/* Chat Section */}
				<section id="chat" className="py-24">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="max-w-4xl mx-auto"
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl font-bold text-center mb-12"
							>
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									Chat With Me
								</span>
							</motion.h2>
							<InputForm />
						</motion.div>
					</div>
				</section>
				{/* Experience Section */}
				<section id="experience" className="py-24 relative">
					<div className="absolute inset-0 bg-emerald-900/10" />
					<div className="container mx-auto px-6 relative">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="space-y-12"
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl font-bold text-center mb-16"
							>
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									Professional Experience
								</span>
							</motion.h2>
							<div className="max-w-4xl mx-auto space-y-8">
								{experiences.map((experience, index) => (
									<ExperienceCard
										key={experience.company}
										experience={experience}
										index={index}
									/>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="py-24 relative">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="space-y-12"
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl font-bold text-center mb-16"
							>
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									Featured Projects
								</span>
							</motion.h2>

							{/* Project Grid with custom hover effect */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
								{projects.map((project, index) => (
									<ProjectCard
										key={project.title}
										project={project}
										index={index}
									/>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Journey Section */}
				<section id="journey" className="py-24 relative">
					<div className="absolute inset-0 bg-emerald-900/10" />
					<div className="container mx-auto px-6 relative">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="space-y-12"
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl font-bold text-center mb-16"
							>
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									My Journey
								</span>
							</motion.h2>

							{/* Timeline container */}
							<div className="max-w-4xl mx-auto">
								{timelineData.map((timeline, index) => (
									<motion.div
										key={timeline.year}
										initial={{ opacity: 0, x: -50 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.2 }}
										viewport={{ once: true }}
									>
										<TimelineCard timeline={timeline} index={index} />
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-24 relative">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="max-w-4xl mx-auto"
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl font-bold text-center mb-16"
							>
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									Let&apos;s Connect
								</span>
							</motion.h2>

							{/* Contact Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-emerald-500/20"
							>
								<div className="grid md:grid-cols-2 gap-0">
									{/* Left Column - Contact Info */}
									<div className="p-8 border-r border-emerald-500/20">
										<h3 className="text-2xl font-bold text-emerald-400 mb-6">
											Get in Touch
										</h3>
										<div className="space-y-6">
											{[
												{
													icon: Mail,
													text: "sunehildeep@gmail.com",
													href: "mailto:sunehildeep@gmail.com",
												},
												{
													icon: Github,
													text: "GitHub",
													href: "https://github.com/Sunehildeep",
												},
												{
													icon: Linkedin,
													text: "LinkedIn",
													href: "https://linkedin.com/in/sunehildeepsingh",
												},
											].map((item, index) => (
												<motion.a
													key={index}
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center space-x-4 text-gray-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/10 transition-all group"
													whileHover={{ x: 4 }}
												>
													<motion.span
														whileHover={{ rotate: 360 }}
														transition={{ duration: 0.8 }}
													>
														<item.icon className="h-5 w-5" />
													</motion.span>
													<span className="group-hover:underline">
														{item.text}
													</span>
												</motion.a>
											))}
										</div>
									</div>

									{/* Right Column - Resume */}
									<div className="p-8 bg-emerald-500/5">
										<h3 className="text-2xl font-bold text-emerald-400 mb-6">
											Quick Links
										</h3>
										<motion.a
											href="/images/SunehildeepSingh_Resume.pdf"
											target="_blank"
											className="inline-flex items-center space-x-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-lg transition-all group"
											whileHover={{ scale: 1.05 }}
										>
											<Paperclip className="h-5 w-5 group-hover:rotate-12 transition-transform" />
											<span>View Resume</span>
										</motion.a>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-8 text-center text-gray-400 bg-black/30">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="flex items-center justify-center space-x-2"
					>
						<span>
							© {new Date().getFullYear()} Sunehildeep Singh. Built with
						</span>
						<motion.span
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ repeat: Infinity, duration: 2 }}
							className="text-red-500"
						>
							❤️
						</motion.span>
					</motion.p>
				</footer>
			</main>
		</div>
	);
}
