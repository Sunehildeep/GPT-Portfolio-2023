import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
	const { scrollYProgress } = useScroll();
	const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	return (
		<motion.div
			className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full overflow-hidden"
			style={{ scaleY }}
		>
			<motion.div
				className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-blue-500"
				style={{ height: scrollYProgress }}
			/>
		</motion.div>
	);
};

export default ScrollIndicator;
