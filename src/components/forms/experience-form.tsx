"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { ExperienceProps } from "@/app/admin/types";

interface ExperienceFormProps {
	data: ExperienceProps;
	onChange: (data: ExperienceProps) => void;
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
	const [items, setItems] = useState(data.items);

	const updateItems = (newItems: typeof items) => {
		setItems(newItems);
		onChange({ items: newItems });
	};

	const addItem = () => {
		updateItems([
			...items,
			{
				role: "",
				company: "",
				date: "",
				description: "",
				highlights: [""],
			},
		]);
	};

	const removeItem = (index: number) => {
		updateItems(items.filter((_, i) => i !== index));
	};

	const updateItem = (
		index: number,
		field: keyof (typeof items)[0],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		value: any
	) => {
		const updated = [...items];
		updated[index] = { ...updated[index], [field]: value };
		updateItems(updated);
	};

	const updateHighlight = (
		itemIndex: number,
		highlightIndex: number,
		value: string
	) => {
		const updated = [...items];
		updated[itemIndex].highlights[highlightIndex] = value;
		updateItems(updated);
	};

	const addHighlight = (itemIndex: number) => {
		const updated = [...items];
		updated[itemIndex].highlights.push("");
		updateItems(updated);
	};

	const removeHighlight = (itemIndex: number, highlightIndex: number) => {
		const updated = [...items];
		updated[itemIndex].highlights = updated[itemIndex].highlights.filter(
			(_, i) => i !== highlightIndex
		);
		updateItems(updated);
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Experience Section</CardTitle>
				<Button onClick={addItem} size="sm">
					<Plus className="h-4 w-4 mr-2" />
					Add Experience
				</Button>
			</CardHeader>
			<CardContent className="space-y-6">
				{items.map((item, itemIndex) => (
					<Card key={itemIndex} className="p-4">
						<div className="flex justify-between items-start mb-4">
							<h4 className="font-medium">Experience {itemIndex + 1}</h4>
							<Button
								variant="outline"
								size="sm"
								onClick={() => removeItem(itemIndex)}
							>
								<Trash2 className="h-4 w-4" />
							</Button>
						</div>

						<div className="grid grid-cols-2 gap-4 mb-4">
							<div className="space-y-2">
								<Label>Role</Label>
								<Input
									value={item.role}
									onChange={(e) =>
										updateItem(itemIndex, "role", e.target.value)
									}
									placeholder="Job title"
								/>
							</div>
							<div className="space-y-2">
								<Label>Company</Label>
								<Input
									value={item.company}
									onChange={(e) =>
										updateItem(itemIndex, "company", e.target.value)
									}
									placeholder="Company name"
								/>
							</div>
						</div>

						<div className="space-y-2 mb-4">
							<Label>Date</Label>
							<Input
								value={item.date}
								onChange={(e) => updateItem(itemIndex, "date", e.target.value)}
								placeholder="e.g., Jan 2023 - Present"
							/>
						</div>

						<div className="space-y-2 mb-4">
							<Label>Description</Label>
							<Textarea
								value={item.description}
								onChange={(e) =>
									updateItem(itemIndex, "description", e.target.value)
								}
								placeholder="Job description"
								className="min-h-[80px]"
							/>
						</div>

						<div>
							<div className="flex justify-between items-center mb-2">
								<Label>Highlights</Label>
								<Button
									variant="outline"
									size="sm"
									onClick={() => addHighlight(itemIndex)}
								>
									<Plus className="h-4 w-4" />
								</Button>
							</div>
							{item.highlights.map((highlight, highlightIndex) => (
								<div key={highlightIndex} className="flex gap-2 mb-2">
									<Textarea
										value={highlight}
										onChange={(e) =>
											updateHighlight(itemIndex, highlightIndex, e.target.value)
										}
										placeholder="Achievement or highlight"
										className="min-h-[60px]"
									/>
									<Button
										variant="outline"
										size="sm"
										onClick={() => removeHighlight(itemIndex, highlightIndex)}
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							))}
						</div>
					</Card>
				))}
			</CardContent>
		</Card>
	);
}
