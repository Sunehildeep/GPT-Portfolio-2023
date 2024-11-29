interface MousePosition {
	x: number;
	y: number;
}

const CursorHighlight = ({
	mousePosition,
}: {
	mousePosition: MousePosition;
}) => (
	<div
		className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
		style={{
			background: `
		  radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
			rgba(139, 92, 246, 0.15),
			rgba(139, 92, 246, 0.1) 20%,
			rgba(139, 92, 246, 0.05) 30%,
			transparent 60%
		  ),
		  radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
			rgba(79, 70, 229, 0.1),
			transparent 50%
		  )
		`,
		}}
	/>
);

export default CursorHighlight;
