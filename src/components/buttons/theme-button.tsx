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
			className={`relative cursor-pointer flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-color-primary)] hover:opacity-80 transition-opacity overflow-hidden `}
		>
			<Sun
				className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
					theme === "light"
						? "scale-100 translate-y-0 opacity-100"
						: "scale-50 translate-y-5 opacity-0"
				}`}
			/>
			<Moon
				className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
					theme === "dark"
						? "scale-100 translate-y-0 opacity-100"
						: "scale-50 translate-y-5 opacity-0"
				}`}
			/>
		</button>
	);
}
