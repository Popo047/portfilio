"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactProps } from "@/app/admin/types";

interface ContactFormProps {
	data: ContactProps;
	onChange: (data: ContactProps) => void;
}

export function ContactForm({ data, onChange }: ContactFormProps) {
	const [formData, setFormData] = useState(data);

	const updateData = (updates: Partial<ContactProps>) => {
		const newData = { ...formData, ...updates };
		setFormData(newData);
		onChange(newData);
	};

	const updateSocials = (platform: string, value: string) => {
		const socials = { ...formData.socials, [platform]: value };
		updateData({ socials });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Contact Section</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						value={formData.email}
						onChange={(e) => updateData({ email: e.target.value })}
						placeholder="your.email@example.com"
					/>
				</div>

				<div className="space-y-4">
					<Label className="text-base font-medium">
						Social Links (Optional)
					</Label>

					<div className="space-y-2">
						<Label htmlFor="github">GitHub</Label>
						<Input
							id="github"
							value={formData.socials?.github || ""}
							onChange={(e) => updateSocials("github", e.target.value)}
							placeholder="https://github.com/username"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="linkedin">LinkedIn</Label>
						<Input
							id="linkedin"
							value={formData.socials?.linkedin || ""}
							onChange={(e) => updateSocials("linkedin", e.target.value)}
							placeholder="https://linkedin.com/in/username"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="twitter">Twitter</Label>
						<Input
							id="twitter"
							value={formData.socials?.twitter || ""}
							onChange={(e) => updateSocials("twitter", e.target.value)}
							placeholder="https://twitter.com/username"
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
