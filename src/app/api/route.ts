import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import { Section } from "@/models/section";

export async function POST(req: Request) {
	try {
		await connectDB();
		const body = await req.json();

		const saved = await Section.create(body);
		return NextResponse.json({ success: true, data: saved }, { status: 201 });
	} catch (err) {
		console.error("❌ Failed to save section:", err);
		return NextResponse.json(
			{ success: false, error: "Server Error" },
			{ status: 500 }
		);
	}
}
