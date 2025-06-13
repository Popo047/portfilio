"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/buttons/theme-button";

export function Navbar() {
	return (
		<header className="flex items-center justify-between px-4 py-2 border-b bg-background text-foreground sticky top-0 z-50">
			<div className="font-bold text-xl">MyPortfolio</div>

			{/* Desktop nav */}
			<nav className="hidden md:flex gap-6 text-sm items-center">
				<Link href="/" className="hover:underline">
					Home
				</Link>
				<Link href="/projects" className="hover:underline">
					Projects
				</Link>
				<Link href="/contact" className="hover:underline">
					Contact
				</Link>
				<ThemeToggleButton />
			</nav>

			<div className="md:hidden flex items-center gap-2">
				<ThemeToggleButton />
				<Sheet>
					<SheetTrigger className="p-2">
						<Menu className="w-5 h-5" />
					</SheetTrigger>
					<SheetContent side="right" className="w-64" aria-describedby={""}>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-4 mt-8 px-12 text-sm">
							<Link href="/" className="hover:underline">
								Home
							</Link>
							<Link href="/projects" className="hover:underline">
								Projects
							</Link>
							<Link href="/contact" className="hover:underline">
								Contact
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
