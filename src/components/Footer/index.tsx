import React from "react";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-4 text-center relative z-100 mt-[100px]">
			<div className="container mx-auto">
				&copy; {new Date().getFullYear()} Sunehildeep Singh
			</div>
		</footer>
	);
}
