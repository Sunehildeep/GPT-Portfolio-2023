import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Sunehildeep Singh",
	jobTitle: "AI Engineer",
	givenName: "Sunehildeep",
	affiliation: {
		"@type": "Organization",
		name: "Sun Glow Window Coverings",
	},
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Centennial College",
	},
	worksFor: {
		"@type": "Organization",
		name: "Sun Glow Window Coverings",
	},
	sameAs: [
		"https://www.linkedin.com/in/sunehildeepsingh",
		"https://github.com/Sunehildeep",
		"https://sunehildeepsingh.com",
		"https://instagram.com/sunehildeep",
		"https://x.com/Sunehildeep",
	],
	birthDate: "2002-02-28",
	birthPlace: {
		"@type": "Place",
		name: "Kapurthala, India",
	},
	nationality: "Indian",
	gender: "Male",
	knowsAbout: [
		"Artificial Intelligence",
		"Deep Learning",
		"Neural Networks",
		"Convolutional Neural Networks (CNNs)",
		"Recurrent Neural Networks (RNNs)",
		"Python",
		"JavaScript",
		"TensorFlow",
		"PyTorch",
	],
	image: "https://sunehildeepsingh.com/images/me_full.jpg",
	description: `Sunehildeep Singh is an innovative AI Engineer with a deep passion for advancing the field of artificial intelligence through neural networks and deep learning. Starting his programming journey at a young age of 14, Sunehildeep has continually expanded his skills and expertise across various domains of technology.

With a strong foundation in software engineering and a keen interest in AI, Sunehildeep has dedicated himself to mastering the intricacies of deep learning. His work is characterized by a commitment to exploring the latest advancements in neural network architectures and developing cutting-edge solutions that address complex challenges.

Graduating from Centennial College with a focus on Artificial Intelligence, Sunehildeep has leveraged his academic background to create impactful projects and contribute to the field. His expertise extends to developing sophisticated deep learning models and utilizing advanced techniques to drive innovation.

Sunehildeep's journey is marked by a continuous pursuit of knowledge and excellence, with a focus on harnessing the power of AI to push the boundaries of technology. As he continues to explore new frontiers in neural networks and deep learning, Sunehildeep remains dedicated to shaping the future of AI and inspiring others in the industry.

For insights into his work and to connect with him, visit his official website and follow his updates on LinkedIn, GitHub, and X.`,
};

export async function generateMetadata() {
	return {
		title: "Sunehildeep Singh - AI Engineer",
		description:
			"Official website of Sunehildeep Singh, an AI Engineer specializing in deep learning and neural networks, with a passion for innovation and technology.",
		openGraph: {
			title: "Sunehildeep Singh - AI Engineer",
			description:
				"Explore the portfolio and professional journey of Sunehildeep Singh, a dedicated AI Engineer with expertise in deep learning and neural networks.",
			url: "https://sunehildeepsingh.com",
			siteName: "Sunehildeep Singh",
			images: [
				{
					url: "https://sunehildeepsingh.com/images/me_full.jpg",
					width: 800,
					height: 600,
					alt: "Sunehildeep Singh",
				},
			],
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			site: "@Sunehildeep",
			title: "Sunehildeep Singh - AI Engineer",
			description:
				"Connect with Sunehildeep Singh, an AI Engineer specializing in deep learning and neural networks.",
			images: ["https://sunehildeepsingh.com/images/me_full.jpg"],
		},
		additionalMetaTags: [
			{
				name: "keywords",
				content:
					"AI Engineer, Deep Learning, Neural Networks, Artificial Intelligence, Technology, Innovation",
			},
		],
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					id="schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</head>
			<body className={`${inter.className} dark`}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
