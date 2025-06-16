// components/Navbar.tsx
"use client";

import { useState } from "react";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggleButton } from "@/components/buttons/theme-button";
import clsx from "clsx";
import { siteConfig } from "@/libs/site-config";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Experience", id: "experience" },
	{ label: "Projects", id: "projects" },
	{ label: "Hobbies", id: "hobbies" },
	{ label: "Contact", id: "contact" },
];

const hiddenRoutes = ["/admin"];

export function Navbar() {
	const [activeId, setActiveId] = useState<string>("about");
	const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(false);
	const { push } = useRouter();
	const pathname = usePathname();

	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileSheetOpen(false);
		setActiveId(id);
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-background z-50 border-b">
			<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
				<span
					className="font-bold text-lg cursor-pointer"
					onClick={() => push("/")}
				>
					SD
				</span>

				{/* Desktop Nav */}
				<nav className="hidden md:flex space-x-6">
					{navItems.map(({ label, id }) => (
						<button
							hidden={hiddenRoutes.includes(pathname)}
							key={id}
							onClick={() => handleClick(id)}
							className={clsx(
								"relative text-sm font-medium transition-colors duration-200 group",
								activeId === id
									? "text-primary"
									: "text-muted-foreground hover:text-primary"
							)}
						>
							{label}
							<span
								className={clsx(
									"absolute -bottom-1 left-0 h-0.5 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left",
									activeId === id && "scale-x-100"
								)}
							/>
						</button>
					))}

					<ThemeToggleButton />
					<Button
						onClick={() => push("/admin")}
						className="text-sm font-medium border border-border px-4 py-1.5 rounded-md hover:bg-muted transition-colors duration-200"
					>
						Create Your Portfolio
					</Button>
				</nav>

				{/* Desktop Socials */}
				<div className="hidden md:flex space-x-4">
					{siteConfig.socialLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
						>
							<Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
						</a>
					))}
				</div>

				{/* Mobile Nav (Sheet) */}
				<div className="md:hidden">
					<Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
						<SheetTrigger asChild>
							<button className="p-2">
								<Menu
									className="h-6 w-6"
									onClick={() => setMobileSheetOpen(true)}
								/>
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[200px]">
							<SheetTitle className="sr-only">Something</SheetTitle>
							<div className="mt-8 flex items-center justify-center gap-4">
								{siteConfig.socialLinks.map(({ label, href, icon: Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
									>
										<Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
									</a>
								))}
							</div>
							<div className="flex flex-col gap-4 mt-8 items-center">
								<ThemeToggleButton />

								{navItems.map(({ label, id }) => (
									<button
										key={id}
										onClick={() => {
											handleClick(id);
										}}
										className={clsx(
											"text-left font-medium",
											activeId === id
												? "text-primary"
												: "text-muted-foreground hover:text-primary"
										)}
									>
										{label}
									</button>
								))}
								<Button
									onClick={() => {
										push("/admin");
										setMobileSheetOpen(false);
									}}
									className="text-sm font-medium border border-border px-4 py-1.5 rounded-md hover:bg-muted transition-colors duration-200"
								>
									Create Your Portfolio
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
