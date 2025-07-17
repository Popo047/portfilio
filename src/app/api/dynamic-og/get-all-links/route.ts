import { neon } from "@netlify/neon";
import { NextResponse } from "next/server";

const sql = neon();

export async function GET() {
	try {
		const events = await sql`
      SELECT slug, title, description, image_url, data, created_at, updated_at
      FROM events
      ORDER BY created_at DESC;
    `;

		return NextResponse.json({ success: true, data: events });
	} catch (error) {
		console.error("Error fetching all events:", error);
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}
