import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "scrollmagic";
import CyberpunkBanner from "../../components/CyberpunkBanner";
import { gsap } from "gsap";
import { projects } from "./constants";
import { model, prompt } from "../../services/gpt";
import Project from "../../components/Project";
import ReactMarkdown from "react-markdown";

const prompts = [
	"Craft a captivating banner text welcoming visitors to Sunehildeep Singh's Portfolio, conveying his essence in 2-3 compelling sentences.",
	"Compose a succinct biography encapsulating Sunehildeep Singh's educational journey, professional experiences, and passions, reflecting his unique identity.",
	"Articulate Sunehildeep Singh's aspirations and overarching life goals, outlining his vision for career and personal fulfillment.",
	"Detail Sunehildeep Singh's diverse skill set, showcasing his expertise across relevant domains and highlighting his key strengths.",
	"Provide comprehensive contact information for Sunehildeep Singh, ensuring accessibility and ease of communication for potential collaborators or inquiries.",
];

const Home = () => {
	const controller = useRef(null);
	const [banner, setBanner] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [goal, setGoal] = useState("");
	const [skills, setSkills] = useState("");
	const [contact, setContact] = useState("");
	const [fetching, setFetching] = useState(false);
	const [askme, setAskMe] = useState("");

	const fetchAndSetText = async (query, setState) => {
		const result = await model.generateContentStream(`${prompt}
		
		User: ${query}`);
		for await (const chunk of result.stream) {
			setState((prev) => prev + chunk.text());
		}
	};

	const fetchTexts = async () => {
		await Promise.all([
			fetchAndSetText(prompts[0], setBanner),
			fetchAndSetText(prompts[1], setAboutMe),
			fetchAndSetText(prompts[2], setGoal),
			fetchAndSetText(prompts[3], setSkills),
			fetchAndSetText(prompts[4], setContact),
		]).then(() => setFetching(false));
	};

	const animateDivs = () => {
		// Initialize ScrollMagic controller
		controller.current = new Controller();

		// Add the ScrollMagic library initialization code
		const scrollMagicController = controller.current;
		const scrollMagicElements = document.querySelectorAll(".animate-on-scroll");

		// Another scene for userpic
		new Scene({
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
			new Scene({
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
			new Scene({
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
	};

	useEffect(() => {
		if (fetching) return;
		fetchTexts();
	}, []);

	useEffect(() => {
		animateDivs();
		return () => {
			// Clean up ScrollMagic controller when component unmounts
			if (controller.current) controller.current.destroy(true);
		};
	}, [fetching]);

	return (
		<>
			<CyberpunkBanner text={banner} />

			<section id="about" className={`section-about animate-on-scroll`}>
				<div className="container">
					<h2 className="cyberpunk-text">About Me</h2>
					<div className="goal-text">
						<div className="about-content">
							<img
								id="userpic"
								src="images/me.jpg"
								alt="Profile"
								className="profile-image animate-on-scroll"
							/>
							<p className="about-text">
								<ReactMarkdown>{aboutMe}</ReactMarkdown>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="goal" className={`section-goal animate-on-scroll`}>
				<div className="container">
					<h2 className="cyberpunk-text">My Goal</h2>
					<div className="goal-text">
						<ReactMarkdown>{goal}</ReactMarkdown>
						<div className="resume-button">
							<br />
							<br />
							Want to learn more about me? Try asking below and the AI will
							answer anything about me! Hit enter after typing your question.
							<br />
							<input
								type="text"
								placeholder="Ask me anything"
								className="askme-input"
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										setAskMe(" ");
										fetchAndSetText(e.target.value, setAskMe);
									}
								}}
							/>
							<br />
							<ReactMarkdown>{askme}</ReactMarkdown>
							<br />
							<a
								className="glitch-button"
								href="images/resume.pdf"
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
					<h2 className="cyberpunk-text">My Skills</h2>
					<div>
						<ReactMarkdown>{skills}</ReactMarkdown>
					</div>
				</div>
			</section>

			<section id="projects" className={`section-projects animate-on-scroll`}>
				<div className="container">
					<h2 className="cyberpunk-text">My Projects</h2>
					<div className="cyberpunk-text">
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
					<h2 className="cyberpunk-text">Contact Me</h2>
					<div>
						<ReactMarkdown>{contact}</ReactMarkdown>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
