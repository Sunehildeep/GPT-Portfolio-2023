import React from "react";
import { Inter } from "next/font/google";
import "../styles/styles.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sunehildeep Singh",
	description: "Portfolio of Sunehildeep Singh",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-20H3WVHZW4"
				/>
				<Script id="gtag">
					{`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'G-20H3WVHZW4');`}
				</Script>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
