import type { Metadata } from "next";

type Props = {
	params: { slug: string };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata(props: Props): Promise<Metadata> {
	const { slug } = await props.params;

	const res = await fetch(`${BASE_URL}/api/dynamic-og?slug=${slug}`, {
		cache: "no-store",
	});

	const json = await res.json();

	if (!json.success || !json.data) {
		return {
			title: "Event Not Found",
			description: "This event does not exist.",
		};
	}

	const event = json.data;

	return {
		title: event.title,
		description: event.description,
		openGraph: {
			title: event.title,
			description: event.description,
			url: `${BASE_URL}/event/${slug}`,
			images: [
				{
					url: event.image_url,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: event.title,
			description: event.description,
			images: [event.image_url],
		},
	};
}

export default function SlugLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
