"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AboutProps } from "@/app/admin/types";

interface AboutFormProps {
	data: AboutProps;
	onChange: (data: AboutProps) => void;
}

export function AboutForm({ data, onChange }: AboutFormProps) {
	const [content, setContent] = useState(data.content);

	const handleChange = (value: string) => {
		setContent(value);
		onChange({ content: value });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>About Section</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="about-content">About Content</Label>
					<Textarea
						id="about-content"
						value={content}
						onChange={(e) => handleChange(e.target.value)}
						placeholder="Write about yourself..."
						className="min-h-[120px]"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
