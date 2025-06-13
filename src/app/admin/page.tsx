"use client";

import { DynamicForm } from "@/components/sections/DynamicForm";
import { SectionData } from "./types";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JsonForm } from "@/components/sections/JsonForm";

export default function Home() {
	const [activeTab, setActiveTab] = useState<"json" | "form">("json");

	const handleSave = (data: SectionData) => {
		console.log("Saved data:", data);
	};

	return (
		<main className="min-h-screen mt-24 bg-background ">
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
				<TabsContent value="json">
					Use a Json File to upload all the required fields
				</TabsContent>
				<TabsContent value="form">
					Fill the form fields to make the portfolio. ( Coming Soon... )
				</TabsContent>
			</Tabs>
			{activeTab === "form" && <DynamicForm onSave={handleSave} />}
			{activeTab === "json"}&& <JsonForm onSave={handleSave} />
		</main>
	);
}
