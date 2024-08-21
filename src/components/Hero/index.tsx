import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Skeleton,
} from "@nextui-org/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-scroll";

interface HeroProps {
	text: string;
}

export default function Hero({ text }: HeroProps) {
	return (
		<div className="relative z-10 bg-black bg-opacity-50" id="banner">
			<div className="max-w-2xl mx-auto min-h-screen flex items-center justify-center">
				<Card isBlurred className="p-4 ">
					<CardHeader className="glitch-text text-center">
						This won&apos;t be like other portfolios you have seen.
					</CardHeader>
					<CardBody className="text-center">
						<Card className="p-4 w-full space-y-3">
							{!text ? (
								<div className="space-y-3">
									<Skeleton className="w-3/5 rounded-lg">
										<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
									</Skeleton>
									<Skeleton className="w-4/5 rounded-lg">
										<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
									</Skeleton>
									<Skeleton className="w-2/5 rounded-lg">
										<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
									</Skeleton>
								</div>
							) : (
								<ReactMarkdown>{text}</ReactMarkdown>
							)}
						</Card>
					</CardBody>
					<CardFooter>
						<Button color="warning" size="md" className="text-white m-auto">
							<Link to="askme" smooth={true} duration={500} offset={-200}>
								You won&apos;t regret it.
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
