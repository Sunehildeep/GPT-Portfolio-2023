// content.js
import { Github, Linkedin, Mail, Paperclip } from "lucide-react";
export const projects = [
	{
		title: "Transformer LLM Chatbot",
		category: "Neural Networks",
		description:
			"Built a state-of-the-art transformer-based chatbot from scratch, achieving 85% accuracy on conversation modeling. Implemented complete encoder-decoder architecture with attention mechanisms, showcasing deep understanding of NLP principles.",
		tech: ["TensorFlow", "Python", "Transformers", "NLP"],
		link: "https://github.com/Sunehildeep/ChatBot-TransformerAI",
		featured: true,
	},
	{
		title: "Advanced Text Generation",
		category: "Neural Networks",
		description:
			"Engineered a sophisticated LSTM-based RNN for natural language generation, demonstrating GPT-like capabilities. Implemented advanced features like temperature sampling and beam search for improved text coherence.",
		tech: ["TensorFlow", "LSTM", "Python", "Deep Learning"],
		link: "https://github.com/Sunehildeep/Text-Generator-AI-Model",
		featured: true,
	},
	{
		title: "Custom Fan Control System",
		category: "System Engineering",
		description:
			"Developed a highly successful hardware control software for Acer laptops, serving 500+ active users. Engineered low-level system interactions for precise fan speed management and thermal optimization.",
		tech: ["C#", "Windows API", "Hardware Control", "System Programming"],
		link: "https://github.com/Sunehildeep/Custom-Fans-Helios",
		featured: true,
	},
];

export const experiences = [
	{
		role: "Lead Software Engineer",
		company: "Sun Glow Window Coverings Ltd.",
		period: "2023 - Present",
		description: [
			"Lead and mentor a 2-member development team, implementing Agile methodologies and establishing best practices that have increased team productivity by 25%",
			"Design and establish coding standards, code review processes, and documentation practices to enhance team collaboration and code quality",
			"Built and deployed a Naive Bayes machine learning model for HomeDepot order processing, reducing processing time by 20% and saving 50 work hours monthly",
			"Establish and lead technical strategy meetings, driving adoption of emerging technologies and making architectural decisions that shape the company's technical direction",
			"Architected and developed 3 high-performance Next.js/React applications from scratch, implementing advanced optimization techniques that improved site performance by 40%",
			"Streamlined development operations by designing CI/CD pipelines, reducing deployment time by 50% and implementing automated testing to increase code reliability",
			"Initiate quarterly business reviews and cross-functional meetings, identifying operational bottlenecks and implementing solutions that improve workflow efficiency",
			"Propose and implement key technical initiatives to management, including microservices architecture and AI integration, resulting in new revenue streams",
		],
		skills: [
			"Machine Learning",
			"Python",
			"Next.js",
			"Team Leadership",
			"Cloud Architecture",
		],
	},
	{
		role: "AI Engineer",
		company: "Tandem Experiences",
		period: "2023 - 2023",
		description: [
			"Architected end-to-end AI dating transition system for GenZ users, featuring multi-stage NLP and LLM pipeline",
			"Built advanced NLP pipeline using VADER sentiment analysis to extract mutual interests between profiles",
			"Implemented TF-IDF scoring and cosine similarity algorithms to validate profile matching accuracy",
			"Designed parallel processing system for simultaneous entity extraction and geospatial computations",
			"Developed dual-phase LLM system for point of interest category generation and personalized date invitations",
			"Created intelligent venue filtering system using Google Maps API, geographical constraints, and user preferences",
			"Built FastAPI architecture orchestrating data flow between NLP, LLM, and location services",
			"Achieved 95% success rate across comprehensive system integration testing",
		],
	},
	{
		role: "Software Developer",
		company: "Dreamz Academy",
		period: "2020 - 2021",
		description: [
			"Built comprehensive IELTS training software supporting 100+ remote students during COVID-19",
			"Developed automated evaluation systems for language proficiency assessment",
			"Implemented real-time audio processing for pronunciation analysis",
			"Created adaptive learning algorithms to personalize student experience",
		],
		skills: [
			"C#",
			".NET",
			"Educational Software",
			"Audio Processing",
			"Algorithms",
		],
	},
];

export const timeline = [
	{
		year: "2016",
		title: "First Steps in Programming",
		description:
			"Started programming journey at 14, mastering Pawn and PHP within months. This early exposure to coding sparked a lifelong passion for software development.",
	},
	{
		year: "2017",
		title: "Community Leadership & Growth",
		description:
			"Built and managed a 100+ member community, leading teams across multiple roles. Expanded technical expertise to Python, C#, Java, and JavaScript.",
	},
	{
		year: "2018",
		title: "Entrepreneurial Venture",
		description:
			"Co-founded Honor Gaming Studios and began exploring AI with TensorFlow. Created custom Windows optimization tools that gained significant traction.",
	},
	{
		year: "2019",
		title: "Content Creation & Recognition",
		description:
			"Established successful YouTube channel for PC optimization. Recognized for technical expertise and worked with school IT department.",
	},
	{
		year: "2020",
		title: "Global Recognition",
		description:
			"Contributed to GitHub Arctic Code Vault and received Google's Foobar invitation. Developed IELTS training software and automated home systems.",
	},
	{
		year: "2021",
		title: "Educational Pursuit",
		description:
			"Relocated to Canada to pursue advanced studies in Artificial Intelligence at Centennial College.",
	},
	{
		year: "2022",
		title: "Open Source Success",
		description:
			"Created widely-adopted Custom Fan Helios project, gaining recognition across technical communities.",
	},
	{
		year: "2023-Present",
		title: "Professional Growth",
		description:
			"Secured first Software Engineering role at 20, leading development of ML models and web applications. Driving innovation and efficiency improvements across projects.",
	},
];

export const socialLinks = [
	{
		icon: Github,
		href: "https://github.com/Sunehildeep",
		label: "GitHub Profile",
	},
	{
		icon: Linkedin,
		href: "https://linkedin.com/in/sunehildeepsingh",
		label: "LinkedIn Profile",
	},
	{
		icon: Mail,
		href: "mailto:sunehildeep@gmail.com",
		label: "Email Contact",
	},
	{
		icon: Paperclip,
		href: "https://sunehildeepsingh.com/images/SunehildeepSingh_Resume.pdf",
		label: "Resume",
	},
];
