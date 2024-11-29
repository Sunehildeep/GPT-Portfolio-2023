import { motion } from "framer-motion";

const Loader = () => (
	<motion.div
		className="fixed inset-0 bg-black z-50 flex items-center justify-center"
		exit={{ opacity: 0 }}
	>
		<motion.div
			initial={{ scale: 1 }}
			animate={{
				scale: [1, 1.2, 1],
				rotate: [0, 360],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			className="text-8xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
		>
			S
		</motion.div>
	</motion.div>
);

export default Loader;
