"use client";
import React, { useEffect, useState } from "react";
import Hero from "../Hero";
import { getAnswer } from "@/services/gpt";
import Section from "../Section";
import {
	Card,
	CardBody,
	CardHeader,
	Image,
	Input,
	Link,
} from "@nextui-org/react";
import { prompts } from "./prompts";
import { projects } from "./projects";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";
import { saveDetails } from "@/services/tracker";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Section = {
	id: string;
	title: string;
	description: string | JSX.Element;
	showAvatar?: boolean;
};
const timelineData = [
	{
		year: 2016,
		content:
			"At 14, I learned my first programming language, Pawn, used for SA:MP servers, within just 3 months. Shortly after, I also picked up PHP.",
	},
	{
		year: 2017,
		content:
			"I became a reputable member of the SA:MP community, contributing by helping others and creating content. I established my own community, which grew to 100+ members, and managed a team of Admins, Managers, Moderators, Testers, Designers, and Programmers. I also created my first GitHub repository and expanded my skill set by learning Python, C#, Java, and JavaScript. I developed websites, user control panels, game scripts, and made significant community contributions. I also learned Photoshop and video editing, honing my skills in leadership, marketing, programming, and design.",
	},
	{
		year: 2018,
		content:
			"I created widely-used scripts for the SA:MP community and launched a startup called Honor Gaming Studios with online friends. Although we had to shut it down due to school commitments, the experience was incredibly valuable as I had learned Game Programming as well. Later that year, I began learning Docker, Golang, and TensorFlow as I delved into AI. I also started making Custom Windows Images specially tweaked for gaming and performance by researching improvements and released them on TeamOS.",
	},
	{
		year: 2019,
		content:
			"By this time, I had explored various fields and gained experience in all of them. I was still developing custom images for Windows on TeamOS and gained a huge reputation there, with my work being reposted across several websites and YouTube channels. Later, I started a YouTube channel focused on PC tweaks, reaching a point where I could monetize it. In my final years of high school, my skills were widely recognized, making me popular both for my YouTube channel and my programming abilities. I even worked for my school's IT department.",
	},
	{
		year: 2020,
		content:
			"During the COVID pandemic, I contributed to a Dockergo project on GitHub which was later archived into GitHub Arctic Code Vault, earning me an Arctic Code Contributor badge. I was invited to Google's secret hiring process known as 'Foobar,' a covert recruitment method used to identify top developers worldwide. Although I saved the invitation for potential future use, I did not participate at that time. Later, I freelanced for a friend's immigration company, developing a C# IELTS training software, and automated my home with a Raspberry Pi.",
	},
	{
		year: 2021,
		content:
			"In October, I moved to Canada and enrolled at Centennial College to study AI.",
	},
	{
		year: 2022,
		content:
			"With studies being online, I focused on personal projects and developed 'Custom Fan Helios,' a project for Acer laptops that gained significant traction. It was shared across YouTube, Discord, and Reddit, earning me community contributor status. I also worked on building my portfolio.",
	},
	{
		year: 2023,
		content:
			"At 20, I landed my first Software Engineering job at Sun Glow Window Coverings in January which was a huge achievement for me as a young individual. I developed an Encoder-Decoder transformer model from scratch, inspired by Google's research paper, and spent much of my time reading and researching to deepen my understanding of AI.",
	},
	{
		year: 2024,
		content:
			"I have worked over a year, overseeing all development projects. I spearheaded the creation of two major websites, developed a machine learning model, and designed several Python automation scripts. My work in automating processes has significantly improved efficiency across the company. As I continue to innovate and lead the team, I look forward to tackling new challenges and driving further success.",
	},
];

export default function Home() {
	const [banner, setBanner] = useState<string>("");
	const [askme, setAskme] = useState<string>("");
	const [sections, setSections] = useState<Section[]>([
		{
			id: "journey",
			title: "My Journey So Far Since The Age Of 14",
			description: (
				<div>
					<h3 className="text-lg md:text-xl text-gray-200 text-center my-8 font-bold">
						This is what makes me who I am today.
					</h3>
					<VerticalTimeline>
						{timelineData.map((data, index) => (
							<VerticalTimelineElement
								key={index}
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "#ff7f00",
									color: "#fff",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  #ff7f00",
								}}
								date={data.year}
							>
								<p
									style={{
										fontSize: "1.2rem",
									}}
								>
									{data.content}
								</p>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
					{/* Resume button */}
					<div className="flex justify-center">
						<Link
							href="/images/resume.pdf"
							smooth={true}
							duration={500}
							offset={-200}
							className="cursor-pointer my-8 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-20 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						>
							Resume
						</Link>
					</div>
				</div>
			),
		},
		{
			id: "aboutme",
			title: "Who am I, and what I want to achieve?",
			description: "",
			showAvatar: true,
		},
		// {
		// 	id: "mygoal",
		// 	title:
		// 		"Would you like to know my goal? Or you can scroll ahead if you don't care.",
		// 	description: "",
		// },
		{
			id: "myskills",
			title: "My Skill Set",
			description: "",
		},
		{
			id: "myprojects",
			title: "The things I developed in a young age.",
			description: (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<div
							className="rounded-lg p-2 md:p-4 min-h-[400px]"
							key={project.title}
						>
							<Card className="p-2 md:p-4 w-full" isBlurred>
								<CardHeader className="glitch-text">{project.title}</CardHeader>
								<CardBody>
									<p className="text-md md:text-lg text-gray-200 mt-4">
										{project.description}
									</p>
									<Link href={project.link} className="text-blue-500">
										{project.link}
									</Link>
									{project.image && (
										<Image src={project.image} alt={project.title} />
									)}
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			),
		},
		{
			id: "contactme",
			title: "Want to reach out to me?",
			description: "",
		},
	]);

	const handleQuestion = async (question: string) => {
		try {
			let collectiveText = "";
			for await (const chunk of await getAnswer(question)) {
				setAskme((old) => old + chunk);
				collectiveText += chunk;
			}
			saveDetails(`Asked: ${question} | Answered: ${collectiveText}`);
		} catch (error) {
			setAskme("Resource limit exceeded. Please try again later.");
		}
	};

	const getPromptJson = async () => {
		try {
			await Promise.all(
				prompts.map(async (prompt: Prompt) => {
					for await (const chunk of await getAnswer(prompt.prompt)) {
						if (prompt.type === "banner") {
							setBanner((banner) => {
								setSections((sections) =>
									sections.map((section) => {
										if (section.id === prompt.type) {
											return {
												...section,
												description: <Hero text={banner + chunk} />,
											};
										}
										return section;
									})
								);
								return banner + chunk;
							});
						}
						setSections((sections) =>
							sections.map((section) => {
								if (section.id === prompt.type) {
									return {
										...section,
										description: section.description + chunk,
									};
								}
								return section;
							})
						);
					}
				})
			);
		} catch (error) {
			console.error(error);
			// alert("Resource limit exceeded. Ple ase try again later.");
		}
	};

	useEffect(() => {
		getPromptJson();
	}, []);

	useEffect(() => {
		saveDetails("Home Page Visited");
		const sectionElements = document.querySelectorAll("section");
		if (!sectionElements.length) return;
		const setAnimations = async () => {
			const ScrollMagic = (await import("scrollmagic")).default;
			const scrollMagicController = new ScrollMagic.Controller();

			sectionElements.forEach((sectionElement) => {
				new ScrollMagic.Scene({
					triggerElement: sectionElement,
					triggerHook: 0.8,
					reverse: true,
				})
					.on("enter", () => {
						gsap.to(sectionElement, {
							opacity: 1,
							y: 0,
							x: 0,
							duration: 1,
							ease: "power4.out", // Ease out for entering
						});
					})
					.on("leave", () => {
						gsap.to(sectionElement, {
							opacity: 0,
							y: 100,
							x: -100,
							duration: 1,
							ease: "power4.in", // Ease in for leaving
						});
					})
					.addTo(scrollMagicController);
			});
			// Remove hidden class
			document.getElementById("geminiSections")?.classList.remove("hidden");
			return scrollMagicController;
		};

		const destroyController = async (controller: any) => {
			await controller.destroy();
		};

		const controller = setAnimations() || undefined;
		return () => {
			if (controller) destroyController(controller);
		};
	}, []);

	return (
		<>
			<Hero text={banner} />
			<div id="geminiSections" className="hidden">
				<Section
					id="askme"
					title="Ask Me Anything"
					description={
						<div className="flex flex-col items-center gap-2">
							<h2>If you have questions, I got answers. Probably.</h2>

							<Input
								type="askme"
								label="Ask me anything"
								onKeyDown={async (e) => {
									if (e.key === "Enter") {
										handleQuestion(e.currentTarget.value);
										e.currentTarget.value = "";
									}
								}}
							/>
							<ReactMarkdown>{askme}</ReactMarkdown>
						</div>
					}
				/>

				{sections.map((section: Section, index: number) => (
					<Section
						key={section.title}
						id={section.id}
						title={section.title}
						description={section.description}
						isGray={index % 2 === 0}
						showAvatar={section.showAvatar}
					/>
				))}
			</div>
		</>
	);
}
