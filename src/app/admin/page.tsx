"use client";

import { DynamicForm } from "@/components/sections/DynamicForm";
import { SectionData } from "./types";

export default function Home() {
	const handleSave = (data: SectionData) => {
		console.log("Saved data:", data);
	};

	return (
		<main className="min-h-screen mt-24 bg-background">
			<DynamicForm onSave={handleSave} />
		</main>
	);
}
