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

type Section = {
	id: string;
	title: string;
	description: string | JSX.Element;
	showAvatar?: boolean;
};

export default function Home() {
	const [banner, setBanner] = useState<string>("");
	const [askme, setAskme] = useState<string>("");
	const [sections, setSections] = useState<Section[]>([
		{
			id: "aboutme",
			title: "Who am I, really?",
			description: "",
			showAvatar: true,
		},
		{
			id: "mygoal",
			title:
				"Would you like to know my goal? Or you can scroll ahead if you don't care.",
			description: "",
		},
		{
			id: "myskills",
			title: "What makes me special?",
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
			for await (const chunk of await getAnswer(question)) {
				setAskme((old) => old + chunk);
			}
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
