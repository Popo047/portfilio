"use client";

import { DynamicForm } from "@/components/sections/DynamicForm";
import { SectionData } from "./types";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JsonForm } from "@/components/sections/JsonForm";
import Link from "next/link";

export default function Home() {
	const [activeTab, setActiveTab] = useState<"json" | "form">("json");
	const handleSave = async (data: SectionData) => {
		try {
			const res = await fetch("/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error(`Request failed with status ${res.status}`);
			}

			const result = await res.json();
			console.log("Successfully saved:", result);
		} catch (err) {
			console.error("Error submitting data:", err);
		}
	};

	return (
		<div className="min-h-[calc(100vh-150px)] mt-24 bg-background ">
			{/* can not have two main tags */}
			<Tabs
				defaultValue="json"
				className=" flex items-center"
				value={activeTab}
				onValueChange={(value) => setActiveTab(value as "json" | "form")}
			>
				<TabsList className="space-x-1">
					<TabsTrigger value="json" className="">
						Json
					</TabsTrigger>
					<TabsTrigger value="form">Form</TabsTrigger>
				</TabsList>
				<TabsContent value="json" className="w-full">
					<span className="flex items-center justify-center">
						Use a Json File to upload all the required fields
					</span>
					<JsonForm onSave={handleSave} />
				</TabsContent>
				<TabsContent value="form" className="w-full">
					<span className="flex items-center justify-center">
						Fill the form fields to make the portfolio. ( Coming Soon... )
					</span>
					<DynamicForm onSave={handleSave} />
				</TabsContent>
			</Tabs>
			<Link className="flex text-center justify-center" href={"/peeps"}>
				Already have a profile?
			</Link>
		</div>
	);
}
