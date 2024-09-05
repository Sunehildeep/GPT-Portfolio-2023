import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";

export async function generateMetadata() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Sunehildeep Singh",
		jobTitle: "AI Engineer",
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
	};

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
		structuredData: JSON.stringify(personSchema),
	};
}

export default function Main() {
	return (
		<>
			<video
				autoPlay
				loop
				muted
				className="fixed z-0 w-full h-full object-cover"
			>
				<source src="/images/bg2.mp4" type="video/mp4" />
			</video>
			<Header />
			<Home />
			<Footer />
		</>
	);
}
