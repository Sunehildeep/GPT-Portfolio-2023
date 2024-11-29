import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingNavProps {
	isLoading: boolean;
}

const FloatingNav = ({ isLoading = true }: FloatingNavProps) => {
	const [active, setActive] = useState("home");
	const navItems = ["Home", "Chat", "Projects", "Experience", "Journey"];
	const isMobile = window.innerWidth < 768;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ threshold: isMobile ? 0.2 : 0.4 }
		);

		navItems.forEach((item) => {
			const element = document.getElementById(item.toLowerCase());
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [isMobile, navItems]);

	if (isLoading) return null;

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className="fixed top-8 left-0 right-0 z-50 mx-auto w-fit bg-white/10 backdrop-blur-md rounded-full p-2"
		>
			<div className="flex gap-2">
				{navItems.map((item) => (
					<motion.button
						key={item}
						onClick={() => {
							setActive(item.toLowerCase());
							document
								.getElementById(item.toLowerCase())
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className={`px-2 md:px-6 py-2 rounded-full text-sm font-medium transition-all
              ${
								active === item.toLowerCase()
									? "bg-white text-black"
									: "text-white hover:bg-white/20"
							}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{item}
					</motion.button>
				))}
			</div>
		</motion.nav>
	);
};

export default FloatingNav;
