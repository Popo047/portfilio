import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useThemeToggle() {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme;
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const initial = storedTheme || (prefersDark ? "dark" : "light");

		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return { theme, toggleTheme };
}
