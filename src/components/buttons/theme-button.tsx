"use client";

import { useThemeToggle } from "@/hooks/useThemeToggle";
import { Moon, Sun } from "lucide-react";

type UseThemeToggleReturn = {
	theme: "light" | "dark";
	toggleTheme: () => void;
};

export function ThemeToggleButton() {
	const { theme, toggleTheme }: UseThemeToggleReturn = useThemeToggle();

	return (
		<button
			onClick={toggleTheme}
			className="rounded px-2 py-1 hover:bg-muted cursor-pointer transition-all duration-200"
			aria-label="Toggle theme"
		>
			{theme === "dark" ? (
				<Sun className="w-5 h-5" />
			) : (
				<Moon className="w-5 h-5" />
			)}
		</button>
	);
}
