"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { SkillsProps } from "@/app/admin/types";

interface SkillsFormProps {
	data: SkillsProps;
	onChange: (data: SkillsProps) => void;
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
	const [skillGroups, setSkillGroups] = useState(data.skillGroups);

	const updateSkillGroups = (newGroups: typeof skillGroups) => {
		setSkillGroups(newGroups);
		onChange({ skillGroups: newGroups });
	};

	const addSkillGroup = () => {
		updateSkillGroups([...skillGroups, { category: "", skills: [""] }]);
	};

	const removeSkillGroup = (index: number) => {
		updateSkillGroups(skillGroups.filter((_, i) => i !== index));
	};

	const updateSkillGroup = (
		index: number,
		field: "category",
		value: string
	) => {
		const updated = [...skillGroups];
		updated[index][field] = value;
		updateSkillGroups(updated);
	};

	const updateSkill = (
		groupIndex: number,
		skillIndex: number,
		value: string
	) => {
		const updated = [...skillGroups];
		updated[groupIndex].skills[skillIndex] = value;
		updateSkillGroups(updated);
	};

	const addSkill = (groupIndex: number) => {
		const updated = [...skillGroups];
		updated[groupIndex].skills.push("");
		updateSkillGroups(updated);
	};

	const removeSkill = (groupIndex: number, skillIndex: number) => {
		const updated = [...skillGroups];
		updated[groupIndex].skills = updated[groupIndex].skills.filter(
			(_, i) => i !== skillIndex
		);
		updateSkillGroups(updated);
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Skills Section</CardTitle>
				<Button onClick={addSkillGroup} size="sm">
					<Plus className="h-4 w-4 mr-2" />
					Add Skill Group
				</Button>
			</CardHeader>
			<CardContent className="space-y-6">
				{skillGroups.map((group, groupIndex) => (
					<Card key={groupIndex} className="p-4">
						<div className="flex justify-between items-start mb-4">
							<h4 className="font-medium">Skill Group {groupIndex + 1}</h4>
							<Button
								variant="outline"
								size="sm"
								onClick={() => removeSkillGroup(groupIndex)}
							>
								<Trash2 className="h-4 w-4" />
							</Button>
						</div>

						<div className="space-y-4">
							<div className="space-y-2">
								<Label>Category</Label>
								<Input
									value={group.category}
									onChange={(e) =>
										updateSkillGroup(groupIndex, "category", e.target.value)
									}
									placeholder="e.g., Programming Languages"
								/>
							</div>

							<div>
								<div className="flex justify-between items-center mb-2">
									<Label>Skills</Label>
									<Button
										variant="outline"
										size="sm"
										onClick={() => addSkill(groupIndex)}
									>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
								{group.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="flex gap-2 mb-2">
										<Input
											value={skill}
											onChange={(e) =>
												updateSkill(groupIndex, skillIndex, e.target.value)
											}
											placeholder="Skill name"
										/>
										<Button
											variant="outline"
											size="sm"
											onClick={() => removeSkill(groupIndex, skillIndex)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>
						</div>
					</Card>
				))}
			</CardContent>
		</Card>
	);
}
