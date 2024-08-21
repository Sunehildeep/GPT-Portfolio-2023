import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";

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
