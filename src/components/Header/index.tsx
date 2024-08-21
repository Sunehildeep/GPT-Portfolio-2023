"use client";
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Avatar,
	Link as NextUILink,
} from "@nextui-org/react";
import { navItems } from "./items";
import { Link } from "react-scroll";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: "p-2",
				item: "text-white",
				toggleIcon: "text-white",
				menuItem: "mt-4",
			}}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand className="flex items-center gap-4">
					<Avatar src="/images/me.jpg" size="md" alt="Sunehildeep Singh" />
					<p className="font-bold text-white">Sunehildeep Singh</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				{navItems.map((item: NavItem, index: number) => (
					<NavbarItem key={`${item}-${index}`}>
						{item.name === "Resume" ? (
							<NextUILink href={item.href}>{item.name}</NextUILink>
						) : (
							<Link
								smooth={true}
								duration={500}
								offset={-200}
								color="foreground"
								to={item.href}
								className="cursor-pointer"
							>
								{item.name}
							</Link>
						)}
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarMenu>
				{navItems.map((item: NavItem, index: number) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						{item.name === "Resume" ? (
							<NextUILink href={item.href}>{item.name}</NextUILink>
						) : (
							<Link
								smooth={true}
								duration={500}
								color={"foreground"}
								className="w-full cursor-pointer text-white "
								to={item.href}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</Link>
						)}
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
