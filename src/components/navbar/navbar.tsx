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
import { AnimatePresence, motion } from "motion/react";

const MotionButton = motion(Button);

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
	const [hovered, setHovered] = useState(false);
	const { push } = useRouter();
	const pathname = usePathname();

	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileSheetOpen(false);
		setActiveId(id);
	};

	return (
		<motion.header
			initial={{ opacity: 0, y: -20, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="fixed top-0 left-0 w-full bg-background z-50 border-b shadow-lg"
		>
			<div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
				<motion.div
					onClick={() => push("/")}
					className="font-bold text-lg cursor-pointer inline-block"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1, duration: 1, ease: "easeIn" }}
				>
					<AnimatePresence mode="wait">
						{!hovered ? (
							<motion.span
								key="sd"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								SD
							</motion.span>
						) : (
							<motion.span
								key="full"
								initial={{ width: 0, opacity: 0 }}
								animate={{ width: "auto", opacity: 1 }}
								exit={{ width: 0, opacity: 0 }}
								transition={{
									type: "tween",
									duration: 0.5,
									ease: "easeOut",
								}}
								className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-muted animate-typing text-muted-foreground"
							>
								Soham Debnath
							</motion.span>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex space-x-6">
					{navItems.map(({ label, id }, index) => (
						<motion.button
							hidden={hiddenRoutes.includes(pathname)}
							key={id}
							onClick={() => handleClick(id)}
							className={clsx(
								"relative cursor-pointer text-sm font-medium transition-colors duration-200 group",
								activeId === id
									? "text-primary"
									: "text-muted-foreground hover:text-primary"
							)}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.1 * index,
								duration: 0.4,
								ease: "easeOut",
							}}
							whileHover={{ scale: 1.06 }}
							whileTap={{ scale: 0.95 }}
						>
							{label}
							<span
								className={clsx(
									"absolute -bottom-1 left-0 h-0.5 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left",
									activeId === id && "scale-x-100"
								)}
							/>
						</motion.button>
					))}

					<ThemeToggleButton />
					<MotionButton
						hidden={hiddenRoutes.includes(pathname)}
						onClick={() => push("/admin")}
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						whileTap={{ scale: 0.97 }}
						className="text-sm font-medium border border-border px-4 py-1.5 rounded-md  transition-colors duration-200"
					>
						Create Your Portfolio
					</MotionButton>
				</nav>

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
		</motion.header>
	);
}
