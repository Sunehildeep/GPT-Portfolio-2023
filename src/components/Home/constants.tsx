import { Github, Linkedin, Mail, Paperclip } from "lucide-react";

const timelineData: Timeline[] = [
	{
		year: "2016",
		content:
			"At 14, I learned my first programming language, Pawn, used for SA:MP servers, within just 3 months. Shortly after, I also picked up PHP.",
	},
	{
		year: "2017",
		content:
			"I became a reputable member of the SA:MP community, contributing by helping others and creating content. I established my own community, which grew to 100+ members, and managed a team of Admins, Managers, Moderators, Testers, Designers, and Programmers. I also created my first GitHub repository and expanded my skill set by learning Python, C#, Java, and JavaScript. I developed websites, user control panels, game scripts, and made significant community contributions. I also learned Photoshop and video editing, honing my skills in leadership, marketing, programming, and design.",
	},
	{
		year: "2018",
		content:
			"I created widely-used scripts for the SA:MP community and launched a startup called Honor Gaming Studios with online friends. Although we had to shut it down due to school commitments, the experience was incredibly valuable as I had learned Game Programming as well. Later that year, I began learning Docker, Golang, and TensorFlow as I delved into AI. I also started making Custom Windows Images specially tweaked for gaming and performance by researching improvements and released them on TeamOS.",
	},
	{
		year: "2019",
		content:
			"By this time, I had explored various fields and gained experience in all of them. I was still developing custom images for Windows on TeamOS and gained a huge reputation there, with my work being reposted across several websites and YouTube channels. Later, I started a YouTube channel focused on PC tweaks, reaching a point where I could monetize it. In my final years of high school, my skills were widely recognized, making me popular both for my YouTube channel and my programming abilities. I even worked for my school's IT department.",
	},
	{
		year: "2020",
		content:
			"During the COVID pandemic, I contributed to a Dockergo project on GitHub which was later archived into GitHub Arctic Code Vault, earning me an Arctic Code Contributor badge. I was invited to Google's secret hiring process known as 'Foobar,' a covert recruitment method used to identify top developers worldwide. Although I saved the invitation for potential future use, I did not participate at that time. Later, I freelanced for a friend's immigration company, developing a C# IELTS training software, and automated my home with a Raspberry Pi.",
	},
	{
		year: "2021",
		content:
			"In October, I moved to Canada and enrolled at Centennial College to study AI.",
	},
	{
		year: "2022",
		content:
			"With studies being online, I focused on personal projects and developed 'Custom Fan Helios,' a project for Acer laptops that gained significant traction. It was shared across YouTube, Discord, and Reddit, earning me community contributor status. I also worked on building my portfolio.",
	},
	{
		year: "2023",
		content:
			"At 20, I landed my first Software Engineering job at Sun Glow Window Coverings in January which was a huge achievement for me as a young individual. I developed an Encoder-Decoder transformer model from scratch, inspired by Google's research paper, and spent much of my time reading and researching to deepen my understanding of AI.",
	},
	{
		year: "2024",
		content:
			"I have worked over a year, overseeing all development projects. I spearheaded the creation of two major websites, developed a machine learning model, and designed several Python automation scripts. My work in automating processes has significantly improved efficiency across the company. As I continue to innovate and lead the team, I look forward to tackling new challenges and driving further success.",
	},
];

const projects: Project[] = [
	{
		title: "Encoder-Decoder Transformer Chatbot",
		description:
			"Built a transformer neural network model completely from scratch achieving 85% accuracy on Reddit chat data.",
		tech: ["TensorFlow", "Python", "NLP", "Transformers"],
		link: "https://github.com/Sunehildeep/ChatBot-TransformerAI",
	},
	{
		title: "RNN Text Generator",
		description:
			"Engineered an LSTM-based RNN demonstrating capabilities similar to GPT models in natural language generation.",
		tech: ["TensorFlow", "LSTM", "NLP", "Python"],
		link: "https://github.com/Sunehildeep/Text-Generator-AI-Model",
	},
	{
		title: "Custom Fan Helios",
		description:
			"Developed widely adopted software to control fan speeds on Acer Helios laptops, maintaining 500+ user base.",
		tech: ["C#", "Windows API", "Hardware Control"],
		link: "https://github.com/Sunehildeep/Custom-Fans-Helios",
	},
	{
		title: "These are not all :)",
		description:
			"There are tons of other major projects I have worked on that you can find on my GitHub profile. The ones listed here are just a few of the projects I am very proud of.",
		tech: ["GitHub", "Projects"],
		link: "https://github.com/Sunehildeep",
	},
];

const experiences: Experience[] = [
	{
		title: "Software Engineer",
		company: "Sun Glow Window Coverings Ltd.",
		period: "Jan 2023 - Present",
		description: [
			"Engineered a Multinomial NB model for orders, reducing processing time by 20%.",
			"Developed Dealer Portal using Next.js, enhancing user engagement by 30%.",
			"Led a team of 2 developers, improving productivity by 25%.",
		],
		skills: [
			"Machine Learning",
			"Python",
			"Next.js",
			"React.js",
			"Nodejs",
			"PHP",
			"Team Leadership",
		],
	},
	{
		title: "Software Developer",
		company: "Dreamz Academy",
		period: "Apr 2020 - May 2021",
		description: [
			"Developed C# IELTS training software supporting 100+ remote students.",
			"Engineered automated evaluation modules for Listening, Reading, and Writing.",
		],
		skills: ["C#", ".NET", "Educational Software", "Audio Processing"],
	},
];

const socialLinks: SocialLink[] = [
	{
		icon: <Github size={24} />,
		href: "https://github.com/Sunehildeep",
		tooltip: "GitHub",
	},
	{
		icon: <Linkedin size={24} />,
		href: "https://linkedin.com/in/sunehildeepsingh",
		tooltip: "LinkedIn",
	},
	{
		icon: <Mail size={24} />,
		href: "mailto:sunehildeep@gmail.com",
		tooltip: "Email",
	},
	{
		icon: <Paperclip size={24} />,
		href: "https://sunehildeepsingh.com/images/SunehildeepSingh_Resume.pdf",
		tooltip: "Resume",
	},
];

export { timelineData, projects, experiences, socialLinks };
