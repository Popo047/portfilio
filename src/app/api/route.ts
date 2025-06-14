import { NextResponse } from "next/server";
import { neon } from "@netlify/neon";

const sql = neon();

export async function POST(req: Request) {
	try {
		const body = await req.json();

		if (!Array.isArray(body)) {
			return NextResponse.json(
				{ success: false, error: "Expected array of sections" },
				{ status: 400 }
			);
		}

		const contacts = body.find((item) => item.type === "contacts");
		const email = contacts?.props?.email;

		if (!email) {
			return NextResponse.json(
				{ success: false, error: "Missing email in contacts" },
				{ status: 400 }
			);
		}

		await sql`
			CREATE TABLE IF NOT EXISTS profiles (
				id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
				email TEXT UNIQUE NOT NULL,
				data JSONB NOT NULL,
				created_at TIMESTAMP DEFAULT NOW()
			);
		`;

		await sql`
			INSERT INTO profiles (email, data)
			VALUES (${email}, ${JSON.stringify(body)})
			ON CONFLICT (email)
			DO UPDATE SET data = EXCLUDED.data, created_at = NOW();
		`;

		return NextResponse.json({ success: true }, { status: 201 });
	} catch (err) {
		console.error("❌ Neon insert error:", err);
		return NextResponse.json(
			{ success: false, error: "Database error", details: String(err) },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const email = searchParams.get("email");

		if (!email) {
			return NextResponse.json(
				{ success: false, error: "Email query param is required" },
				{ status: 400 }
			);
		}

		const result = await sql`
			SELECT data FROM profiles WHERE email = ${email.toLowerCase()}
		`;

		if (result.length === 0) {
			return NextResponse.json(
				{ success: false, error: "Profile not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: result[0].data });
	} catch (err) {
		console.error("❌ Neon fetch error:", err);
		return NextResponse.json(
			{ success: false, error: "Database error", details: String(err) },
			{ status: 500 }
		);
	}
}
