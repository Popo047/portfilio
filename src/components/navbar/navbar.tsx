// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggleButton } from "@/components/buttons/theme-button";
import clsx from "clsx";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Experience", id: "experience" },
	{ label: "Projects", id: "projects" },
	{ label: "Contact", id: "contacts" },
];

export function Navbar() {
	const [activeId, setActiveId] = useState<string>("about");
	const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((entry) => entry.isIntersecting);
				if (visible) setActiveId(visible.target.id);
			},
			{
				rootMargin: "0px 0px -60% 0px",
				threshold: 0.1,
			}
		);

		navItems.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileSheetOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-background z-50 border-b">
			<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
				<span className="font-bold text-lg">Soham Debnath</span>

				{/* Desktop Nav */}
				<nav className="hidden md:flex space-x-6">
					{navItems.map(({ label, id }) => (
						<button
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
				</nav>

				{/* Desktop Socials */}
				<div className="hidden md:flex space-x-4">
					<a
						href="https://github.com/yourname"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
					</a>
					<a
						href="https://linkedin.com/in/yourname"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
					</a>
					<a href="mailto:your@email.com">
						<Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
					</a>
				</div>

				{/* Mobile Nav (Sheet) */}
				<div className="md:hidden">
					{/* Mobile Socials */}

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
								<a
									href="https://github.com/yourname"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
								</a>
								<a
									href="https://linkedin.com/in/yourname"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
								</a>
								<a href="mailto:your@email.com">
									<Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
								</a>
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
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
