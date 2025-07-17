import { neon } from "@netlify/neon";
import { NextResponse } from "next/server";
import { URL } from "url";

const sql = neon();

interface ogRequestBody {
	slug: string;
	title: string;
	description: string;
	openGraph: {
		title: string;
		description: string;
		image: {
			url: URL;
			width: number;
			height: number;
		};
	};
	twitter: {
		card: string;
		title: string;
		description: string;
		image: URL;
	};
}

export async function POST(request: Request) {
	try {
		const body: ogRequestBody = await request.json();
		const { slug, title, description, openGraph, twitter } = body;
		const image_url = openGraph.image.url.toString();
		const extraData = { openGraph, twitter };

		if (!body.title || !body.description || !body.openGraph.image) {
			return NextResponse.json(
				{ success: false, error: "Please Enter required parameters" },
				{ status: 400 }
			);
		}

		await sql`
    CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    data JSONB DEFAULT '{}'::JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );`;

		await sql`
   INSERT INTO events (slug, title, description, image_url, data)
    VALUES (
    ${slug},
    ${title},
    ${description},
    ${image_url},
    ${JSON.stringify(extraData)}
  )
    ON CONFLICT (slug)
    DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    image_url = EXCLUDED.image_url,
    data = EXCLUDED.data,
    updated_at = NOW();
`;

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.log("Error Occured", error);
	}
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get("slug");

	if (!slug) {
		return NextResponse.json(
			{ success: false, error: "Missing slug parameter" },
			{ status: 400 }
		);
	}

	try {
		const result = await sql`
      SELECT slug, title, description, image_url, data
      FROM events
      WHERE slug = ${slug}
      LIMIT 1;
    `;

		if (result.length === 0) {
			return NextResponse.json(
				{ success: false, error: "Event not found" },
				{ status: 404 }
			);
		}

		const event = result[0];
		return NextResponse.json({ success: true, data: event });
	} catch (error) {
		console.error("Error fetching event metadata:", error);
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}
