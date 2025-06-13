// models/Section.ts
import { Schema, models, model } from "mongoose";

const SectionSchema = new Schema(
	{
		type: { type: String, required: true },
		props: { type: Object, required: true },
	},
	{ timestamps: true }
);

export const Section = models.Section || model("Section", SectionSchema);
