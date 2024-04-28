import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sunehildeep Singh",
	description: "Portfolio of Sunehildeep Singh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-20H3WVHZW4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-20H3WVHZW4');
</script>
</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
