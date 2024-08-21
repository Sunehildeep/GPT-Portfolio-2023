import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";

interface SectionProps {
	id: string;
	title: string;
	description: string | JSX.Element;
	isGray?: boolean;
	showAvatar?: boolean;
}

export default function Section({
	id,
	title,
	description,
	isGray = false,
	showAvatar = false,
}: SectionProps) {
	return (
		<section
			className={`bg-black ${
				isGray ? "bg-opacity-50" : "bg-opacity-60"
			} min-h-[400px]`}
			id={id}
		>
			{!description ? (
				<div className="container flex flex-col items-start justify-center py-8 m-auto gap-4">
					<Card className="p-4 w-full space-y-3">
						<Skeleton className="rounded-lg">
							<div className="h-24 rounded-lg bg-default-300"></div>
						</Skeleton>
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
					</Card>
				</div>
			) : (
				<div className="container flex flex-col items-start justify-center py-8 m-auto gap-4 px-2 md:px-0">
					<Card className="p-2 md:p-4 w-full">
						<CardHeader className="glitch-text">{title}</CardHeader>
						<CardBody>
							{typeof description === "string" ? (
								<>
									{showAvatar ? (
										<div className="flex flex-col md:flex-row items-start gap-4">
											<div className="w-full h-full">
												<Image
													src="/images/me.jpg"
													alt="Sunehildeep Singh"
													className="w-auto h-[250px] rounded-full border-4 border-orange"
												/>
											</div>
											<h2 className="text-md md:text-lg text-gray-200 mt-4">
												<Card className="p-4 w-full space-y-3">
													<ReactMarkdown>{description}</ReactMarkdown>
												</Card>
											</h2>
										</div>
									) : (
										<h2 className="text-md md:text-lg text-gray-200 mt-4">
											<Card className="p-4 w-full space-y-3">
												<ReactMarkdown>{description}</ReactMarkdown>
											</Card>
										</h2>
									)}
								</>
							) : (
								description
							)}
						</CardBody>
					</Card>
				</div>
			)}
		</section>
	);
}
