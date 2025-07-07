"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const SUPPORTED_DOMAINS = [
	"sm.ign.com",
	"cdn.example.com",
	"images.unsplash.com",
];

export default function CreateEventPage() {
	const [title, setTitle] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const body = {
			slug,
			title,
			description,
			openGraph: {
				title,
				description,
				image: {
					url: new URL(imageUrl),
					width: 1200,
					height: 630,
				},
			},
			twitter: {
				card: "summary_large_image",
				title,
				description,
				image: new URL(imageUrl),
			},
		};

		const res = await fetch("/api/dynamic-og", {
			method: "POST",
			body: JSON.stringify(body),
		});

		if (res.ok) {
			setSuccess(true);
		}
	};

	return (
		<div className="min-h-screen mt-24 max-w-xl mx-auto py-10 px-4 ">
			<h1 className="text-3xl font-bold mb-6">Create a Social Preview</h1>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="slug">Slug</Label>
					<Input
						id="slug"
						placeholder="e.g. frosty-run-2025"
						value={slug}
						onChange={(e) => setSlug(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Input
						id="title"
						placeholder="Event title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="description">Description</Label>
					<Textarea
						id="description"
						placeholder="Short description for the event..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="image">Image URL</Label>
					<Input
						id="image"
						type="url"
						placeholder="COPY A LINK FROM INTERNET "
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
					/>
				</div>

				<Button type="submit" className="w-full">
					Generate Event Link
				</Button>
			</form>

			<p className="my-4">Supported Image Domains:</p>
			<div className="space-x-2  mt-4">
				{SUPPORTED_DOMAINS.map((item) => (
					<Badge key={item}>{item}</Badge>
				))}
			</div>

			{success && (
				<Card className="mt-6">
					<CardContent className="p-4">
						<p className="text-green-700 font-medium">Event Created!</p>
						<p className="text-sm mt-2">
							Your link is ready to share:
							<br />
							<a
								href={`/${slug}`}
								className="text-blue-600 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{BASE_URL}/{slug}
							</a>
						</p>
						<p className="text-xs text-muted-foreground mt-2">
							Paste in WhatsApp, LinkedIn, Twitter (not sure) to preview.
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
