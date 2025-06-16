"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AboutProps } from "@/app/admin/types";
import { Input } from "../ui/input";

interface AboutFormProps {
	data: AboutProps;
	onChange: (data: AboutProps) => void;
}

export function AboutForm({ data, onChange }: AboutFormProps) {
	const [aboutData, setNewAboutData] = useState<typeof data>(data);

	const handleChange = (key: "content" | "name", value: string) => {
		// setNewAboutData(value);
		// onChange({ content: value });
		setNewAboutData((prev) => ({
			...prev,
			[key]: value,
		}));
		onChange(aboutData);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>About Section</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="about-name">Name</Label>
					<Input
						id="about-name"
						value={aboutData.name}
						onChange={(e) => handleChange("name", e.target.value)}
						placeholder="Whats your name?"
					/>
					<Label htmlFor="about-content">About Content</Label>
					<Textarea
						id="about-content"
						value={aboutData.content}
						onChange={(e) => handleChange("content", e.target.value)}
						placeholder="Write about yourself..."
						className="min-h-[120px]"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
