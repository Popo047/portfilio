"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionData } from "@/app/admin/types";

type JsonFormProps = {
	onSave: (data: SectionData) => void;
};

export function JsonForm({ onSave }: JsonFormProps) {
	const [jsonInput, setJsonInput] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = () => {
		try {
			const parsed = JSON.parse(jsonInput);
			onSave(parsed as SectionData);
			toast.success("JSON parsed and saved!");
			setError(null);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error: unknown) {
			setError("Invalid JSON. Please check your format.");
			toast.error("❌ Invalid JSON");
		}
	};

	return (
		<div className="p-4 max-w-4xl mx-auto space-y-4">
			<h2 className="text-xl font-semibold">Paste your JSON config</h2>
			<Textarea
				rows={20}
				value={jsonInput}
				onChange={(e) => setJsonInput(e.target.value)}
				placeholder={`{
	"about": {
		"name": "Soham Debnath",
		"content": "I'm a passionate developer..."
	},
	"skills": {
		"skillGroups": [
			{
				"category": "Frontend",
				"skills": ["React", "Next.js", "TailwindCSS"]
			}
		]
	}
}`}
				className="font-mono text-sm"
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}

			<Button onClick={handleSubmit}>Save</Button>
		</div>
	);
}
