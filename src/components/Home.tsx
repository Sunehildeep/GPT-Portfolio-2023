"use client";
import React, { useEffect, useState } from "react";
import CyberpunkBanner from "../components/Banner";
import { gsap } from "gsap";
import { model, prompt } from "../services/gpt";
import Project from "../components/Project";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { saveDetails } from "@/services/tracker";
import LoadingOverlay from "react-loading-overlay";

export const projects = [
	{
		title: "Text Generation Model",
		description:
			"A fully scratch decoder-only text generative model that is capable of generating text based on what it is trained upon. For my project, I used song lyrics.",
		image: "/images/proj1.png",
		link: "https://github.com/Sunehildeep/Text-Generator-AI-Model",
	},
	{
		title: "Graph Prediction Model",
		description:
			"This model predicts the future graph of user engagement time from google analytics.",
		image: "/images/proj2.png",
		link: "https://github.com/Sunehildeep/AutoRegressiveModel",
	},
	{
		title: "Chat-React",
		description:
			"Chat-React is a real-time messaging application built with React, MySQL, and Socket.io. It allows users to send private messages to each other, search for users, and initiate conversations. The application provides a seamless messaging experience with real-time updates, message status indicators, and delivery timestamps.",
		image: "/images/proj5.png",
		link: "https://github.com/Sunehildeep/Chat-React",
	},
	{
		title: "Custom Fans For Acer Helios",
		description:
			"This program allows you to make a custom fan curve for helios. Works for both CPU and GPU fan independently. Being used currently by unofficial Acer community on Discord.",
		image: "/images/proj3.png",
		link: "https://github.com/Sunehildeep/Custom-Fans-Helios",
	},
	{
		title: "Auto Max Fans For Acer Helios",
		description:
			"This little program allows you to customize fan temperature threshold automatically so that when the laptop overheats, it goes to max fans and back to auto when it cools down. Being used currently by unofficial Acer community on Discord.",
		image: "/images/proj4.png",
		link: "https://github.com/Sunehildeep/Auto-Max-Fans-Helios",
	},
	{
		title: "Eye Tracker",
		description:
			"A simple eye-tracker script made in python. It tracks the eyes and draws a rectangle around them in every frame of your camera.",
		link: "https://github.com/Sunehildeep/Eye-Tracker",
	},
	{
		title: "Spam Detector Model",
		description:
			"A model that detects spam messages using Natural Language Processing.",
		link: "https://github.com/Sunehildeep/Spam-Detector",
	},
	{
		title: "Event System For SA:MP",
		description: "This is an event system that works for SA:MP servers.",
		link: "https://github.com/Sunehildeep/EventSystem",
	},
	{
		title: "Weapons Hack Detector For SA:MP",
		description:
			"As the name suggests, this is a weapons hack detector for SA:MP servers. One of my first projects.",
		link: "https://github.com/Sunehildeep/OnPlayerWeaponsHack",
	},
	{
		title: "Quick Turn Hack Detector For SA:MP",
		description:
			"As the name suggests, this is a quick turn hack detector for SA:MP servers. One of my first projects.",
		link: "https://github.com/Sunehildeep/OnPlayerQuickTurn",
	},
];

const prompts = [
	"Craft a captivating banner text welcoming visitors to Sunehildeep Singh's Portfolio, conveying his essence in 2-3 compelling sentences.",
	"Compose a succinct biography encapsulating Sunehildeep Singh's educational journey, professional experiences, and passions, reflecting his unique identity.",
	"Articulate Sunehildeep Singh's aspirations and overarching life goals, outlining his vision for career and personal fulfillment.",
	"Detail Sunehildeep Singh's diverse skill set, showcasing his expertise across relevant domains and highlighting his key strengths mainly in bullet form but you can be creative.",
	"Provide comprehensive contact information for Sunehildeep Singh, ensuring accessibility and ease of communication for potential collaborators or inquiries.",
];

const Home = () => {
	const [banner, setBanner] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [goal, setGoal] = useState("");
	const [skills, setSkills] = useState("");
	const [contact, setContact] = useState("");
	const [fetching, setFetching] = useState(true);
	const [askme, setAskMe] = useState("");

	const fetchAndSetText = async (query: string, setState: any) => {
		const result = await model.generateContentStream(`${prompt}
		
		User: ${query}`);
		for await (const chunk of result.stream) {
			setState((prev: string) => prev + chunk.text());
		}
	};

	useEffect(() => {
		const fetchTexts = async () => {
			await Promise.all([
				fetchAndSetText(prompts[0], setBanner),
				fetchAndSetText(prompts[1], setAboutMe),
				fetchAndSetText(prompts[2], setGoal),
				fetchAndSetText(prompts[3], setSkills),
				fetchAndSetText(prompts[4], setContact),
			]).then(() => setFetching(false));
		};

		saveDetails("Home Page Visited");
		fetchTexts();
	}, [fetching]);

	useEffect(() => {
		const animateDivs = async () => {
			// Add the ScrollMagic library initialization code
			const ScrollMagic = (await import("scrollmagic")).default;
			const scrollMagicController = new ScrollMagic.Controller();
			const scrollMagicElements =
				document.querySelectorAll(".animate-on-scroll");

			// Another scene for userpic
			new ScrollMagic.Scene({
				triggerElement: "#userpic",
				triggerHook: 0.8,
				reverse: true,
			})
				.on("enter", () => {
					gsap.to("#userpic", { opacity: 1, scale: 1.0, duration: 1 });
				})
				.on("leave", () => {
					gsap.to("#userpic", { opacity: 0, scale: 0, duration: 1 });
				})
				.addTo(scrollMagicController);

			// Slow loading for project
			const projectElements = document.querySelectorAll(".project");
			projectElements.forEach((element) => {
				new ScrollMagic.Scene({
					triggerElement: element,
					triggerHook: 1.0,
					reverse: true,
				})
					.on("enter", () => {
						gsap.to(element, { opacity: 1, y: 0, x: 0, duration: 0.2 });
					})
					.on("leave", () => {
						gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 0.2 });
					})
					.addTo(scrollMagicController);
			});

			scrollMagicElements.forEach((element) => {
				new ScrollMagic.Scene({
					triggerElement: element,
					triggerHook: 0.8,
					reverse: true,
				})
					.on("enter", () => {
						gsap.to(element, { opacity: 1, y: 0, x: 0, duration: 1 });
					})
					.on("leave", () => {
						gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 1 });
					})
					.addTo(scrollMagicController);
			});

			return scrollMagicController;
		};
		const controller: any = animateDivs();
		return () => {
			// Clean up ScrollMagic controller when component unmounts
			if (controller) controller.destroy(true);
		};
	}, []);

	return (
		<LoadingOverlay
			active={fetching}
			spinner
			text="Generating portfolio with AI..."
			styles={{
				overlay: (base: any) => ({
					...base,
					background: "black",
				}),
				content: (base: any) => ({
					...base,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					marginTop: "15%",
				}),
				spinner: (base: any) => ({
					...base,
					width: "100px",
					"& svg circle": {
						stroke: "white",
					},
				}),
			}}
		>
			<CyberpunkBanner text={banner} />

			<section id="askme" className={`section-askme animate-on-scroll`}>
				<div className="container">
					<h2>Ask Me Anything</h2>
					<div>
						Want to learn more about me? Try asking below and the AI will answer
						anything about me! Hit enter after typing your question.
						<br />
						<input
							type="text"
							placeholder="Ask me anything"
							className="askme-input"
							onKeyDown={(e: any) => {
								if (e.key === "Enter") {
									setAskMe(" ");
									fetchAndSetText(e.target.value, setAskMe);
									saveDetails(`Asked: ${e.target.value}`);
								}
							}}
						/>
						<br />
						<ReactMarkdown>{askme}</ReactMarkdown>
					</div>
				</div>
			</section>

			<section id="about" className={`section-about animate-on-scroll`}>
				<div className="container">
					<h2>About Me</h2>
					<div className="goal-text">
						<div className="about-content">
							<Image
								width={100}
								height={100}
								id="userpic"
								src="/images/me.jpg"
								alt="Profile"
								className="profile-image animate-on-scroll"
							/>
							<span className="about-text">
								<ReactMarkdown>{aboutMe}</ReactMarkdown>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section id="goal" className={`section-goal animate-on-scroll`}>
				<div className="container">
					<h2>My Goal</h2>
					<div className="goal-text">
						<ReactMarkdown>{goal}</ReactMarkdown>
						<div className="resume-button">
							<br />

							<a
								className="glitch-button"
								href="/images/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Click here to view my resume
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="skills" className={`section-skills animate-on-scroll`}>
				<div className="container">
					<h2>My Skills</h2>
					<div>
						<ReactMarkdown>{skills}</ReactMarkdown>
					</div>
				</div>
			</section>

			<section id="projects" className={`section-projects animate-on-scroll`}>
				<div className="container">
					<h2>My Projects</h2>
					<div>
						Here are some of my projects that I have worked on. Click on them to
						view the source code.
						<br />
						<br />
						{projects.map((project, id) => (
							<Project key={id} {...project} />
						))}
					</div>
				</div>
			</section>

			<section id="contact" className={`section-contact animate-on-scroll`}>
				<div className="container">
					<h2>Contact Me</h2>
					<div>
						<ReactMarkdown>{contact}</ReactMarkdown>
					</div>
				</div>
			</section>
		</LoadingOverlay>
	);
};

export default Home;
