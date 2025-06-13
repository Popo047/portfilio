"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { SectionData } from "@/app/admin/types";

type JsonFormProps = {
	onSave: (data: SectionData) => void;
};

export function JsonForm({ onSave }: JsonFormProps) {
	const [jsonInput, setJsonInput] = useState<string>(`{
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
}`);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = () => {
		try {
			const parsed = JSON.parse(jsonInput);
			onSave(parsed as SectionData);
			toast.success("✅ JSON parsed and saved!");
			setError(null);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
		} catch (err: any) {
			setError("Invalid JSON. Please check your format.");
			toast.error("❌ Invalid JSON");
		}
	};

	return (
		<div className="p-4 max-w-4xl mx-auto space-y-4">
			<h2 className="text-xl font-semibold">Paste your JSON config</h2>
			<CodeMirror
				value={jsonInput}
				height="400px"
				extensions={[json()]}
				onChange={(value) => setJsonInput(value)}
				className="border rounded-md"
				theme="dark"
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
			<Button onClick={handleSubmit}>Save</Button>
		</div>
	);
}
