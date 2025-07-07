/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	params: Promise<{ slug: string }>;
};

type EventData = {
	title: string;
	description: string;
	image_url: string;
	data: Record<string, any>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function EventPage(props: Props) {
	const { slug } = await props.params;

	const res = await fetch(`${BASE_URL}/api/dynamic-og?slug=${slug}`, {
		method: "GET",
		cache: "no-store",
	});

	const json = await res.json();

	const event: EventData = json.data;

	return (
		<div className="min-h-screen mt-24 max-w-2xl mx-auto py-10 px-4">
			<h1 className="text-3xl font-bold mb-4">{event.title}</h1>
			<p className="text-gray-600 mb-6">{event.description}</p>
			<Image
				src={event.image_url}
				alt={event.title}
				className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
				width={200}
				height={200}
			/>

			{event.data?.openGraph?.description && (
				<div className="mt-6 p-4 border rounded-md bg-muted">
					<h2 className="font-semibold mb-2">OG Preview Info</h2>
					<p>{event.data.openGraph.description}</p>
				</div>
			)}
			<div className="mt-6 ">
				<Link
					className="w-full px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-lg"
					href={`/create-slug`}
				>
					Create one More
				</Link>
			</div>
		</div>
	);
}
