import { motion } from "framer-motion";
import { socialLinks } from "./constants";
import { Heart } from "lucide-react";

const Footer = () => (
	<motion.footer
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		className="relative py-16 px-8 lg:px-24 bg-gradient-to-t from-black via-black/95 to-transparent"
	>
		<div className="max-w-7xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div className="space-y-4">
					<h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
						Get in Touch
					</h3>
					<p className="text-gray-400">
						Feel free to reach out for collaborations or just a friendly hello!
					</p>
					<div className="flex gap-4">
						{socialLinks.map((link, index) => (
							<motion.a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, y: -2 }}
								className="text-white/60 hover:text-purple-400 transition-colors"
							>
								<link.icon size={24} />
							</motion.a>
						))}
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
						Quick Links
					</h3>
					<ul className="space-y-2">
						{["Home", "Projects", "Experience", "Journey"].map((item) => (
							<li key={item}>
								<motion.button
									whileHover={{ x: 5 }}
									onClick={() => {
										document
											.getElementById(item.toLowerCase())
											?.scrollIntoView({ behavior: "smooth" });
									}}
									className="text-gray-400 hover:text-white transition-colors"
								>
									{item}
								</motion.button>
							</li>
						))}
						{/* Resume */}
						<li>
							<motion.a
								whileHover={{ x: 5 }}
								href="/images/SunehildeepSingh_Resume.pdf"
								target="_blank"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Resume
							</motion.a>
						</li>
					</ul>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mt-16 pt-8 border-t border-white/10 text-center"
			>
				<p className="text-gray-400 flex items-center justify-center gap-2">
					Made with <Heart className="text-red-500 w-4 h-4" /> by Sunehildeep
					Singh © {new Date().getFullYear()}
				</p>
			</motion.div>
		</div>
	</motion.footer>
);

export default Footer;
