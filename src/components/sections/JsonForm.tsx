"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { SectionData } from "@/app/admin/types";
import { Textarea } from "../ui/textarea";
import { useRouter } from "next/navigation";

type JsonFormProps = {
	onSave: (data: SectionData) => void;
};

const emptyStructure = [
	{
		type: "about",
		props: { name: "", content: "" },
	},
	{
		type: "skills",
		props: { skillGroups: [] },
	},
	{
		type: "experience",
		props: { items: [] },
	},
	{
		type: "projects",
		props: { projects: [] },
	},
	{
		type: "education",
		props: { schools: [] },
	},
	{
		type: "testimonials",
		props: { testimonials: [] },
	},
	{
		type: "hobbies",
		props: { items: [] },
	},
	{
		type: "contacts",
		props: {
			email: "",
			socials: {
				github: "",
				linkedin: "",
				twitter: "",
			},
		},
	},
];

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
	const router = useRouter();

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(
				JSON.stringify(emptyStructure, null, 2)
			);
			alert("JSON structure copied to clipboard!");
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const handleSubmit = async () => {
		try {
			const parsed = JSON.parse(jsonInput);
			await onSave(parsed as SectionData);
			toast.success("JSON parsed and saved!");
			setError(null);
			router.push(`/peeps`);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
		} catch (err: any) {
			setError("Invalid JSON. Please check your format.");
			toast.error(" Invalid JSON");
		}
	};

	return (
		<div>
			<div className="mx-auto flex items-center justify-center pt-4">
				<Button onClick={handleCopy} className="px-4 py-2 ">
					Copy Empty JSON
				</Button>
			</div>
			<div className="md:flex  md:flex-col hidden p-4 max-w-4xl mx-auto space-y-4">
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
			<div className="md:hidden flex flex-col p-4 max-w-4xl mx-auto space-y-4">
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
		</div>
	);
}
