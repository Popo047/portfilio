"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { ProjectsProps } from "@/app/admin/types";

interface ProjectsFormProps {
	data: ProjectsProps;
	onChange: (data: ProjectsProps) => void;
}

export function ProjectsForm({ data, onChange }: ProjectsFormProps) {
	const [projects, setProjects] = useState(data.projects);

	const updateProjects = (newProjects: typeof projects) => {
		setProjects(newProjects);
		onChange({ projects: newProjects });
	};

	const addProject = () => {
		updateProjects([
			...projects,
			{
				title: "",
				description: [""],
				tech: [""],
				period: "",
				link: "",
			},
		]);
	};

	const removeProject = (index: number) => {
		updateProjects(projects.filter((_, i) => i !== index));
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const updateProject = (index: number, field: string, value: any) => {
		const updated = [...projects];
		updated[index] = { ...updated[index], [field]: value };
		updateProjects(updated);
	};

	const updateArrayField = (
		projectIndex: number,
		field: "description" | "tech",
		itemIndex: number,
		value: string
	) => {
		const updated = [...projects];
		updated[projectIndex][field][itemIndex] = value;
		updateProjects(updated);
	};

	const addArrayItem = (
		projectIndex: number,
		field: "description" | "tech"
	) => {
		const updated = [...projects];
		updated[projectIndex][field].push("");
		updateProjects(updated);
	};

	const removeArrayItem = (
		projectIndex: number,
		field: "description" | "tech",
		itemIndex: number
	) => {
		const updated = [...projects];
		updated[projectIndex][field] = updated[projectIndex][field].filter(
			(_, i) => i !== itemIndex
		);
		updateProjects(updated);
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Projects Section</CardTitle>
				<Button onClick={addProject} size="sm">
					<Plus className="h-4 w-4 mr-2" />
					Add Project
				</Button>
			</CardHeader>
			<CardContent className="space-y-6">
				{projects.map((project, projectIndex) => (
					<Card key={projectIndex} className="p-4">
						<div className="flex justify-between items-start mb-4">
							<h4 className="font-medium">Project {projectIndex + 1}</h4>
							<Button
								variant="outline"
								size="sm"
								onClick={() => removeProject(projectIndex)}
							>
								<Trash2 className="h-4 w-4" />
							</Button>
						</div>

						<div className="grid grid-cols-2 gap-4 mb-4">
							<div className="space-y-2">
								<Label>Title</Label>
								<Input
									value={project.title}
									onChange={(e) =>
										updateProject(projectIndex, "title", e.target.value)
									}
									placeholder="Project title"
								/>
							</div>
							<div className="space-y-2">
								<Label>Period</Label>
								<Input
									value={project.period}
									onChange={(e) =>
										updateProject(projectIndex, "period", e.target.value)
									}
									placeholder="e.g., 2023-2024"
								/>
							</div>
						</div>

						<div className="space-y-2 mb-4">
							<Label>Link (optional)</Label>
							<Input
								value={project.link || ""}
								onChange={(e) =>
									updateProject(projectIndex, "link", e.target.value)
								}
								placeholder="https://..."
							/>
						</div>

						<div className="space-y-4">
							<div>
								<div className="flex justify-between items-center mb-2">
									<Label>Description</Label>
									<Button
										variant="outline"
										size="sm"
										onClick={() => addArrayItem(projectIndex, "description")}
									>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
								{project.description.map((desc, descIndex) => (
									<div key={descIndex} className="flex gap-2 mb-2">
										<Textarea
											value={desc}
											onChange={(e) =>
												updateArrayField(
													projectIndex,
													"description",
													descIndex,
													e.target.value
												)
											}
											placeholder="Description point"
											className="min-h-[60px]"
										/>
										<Button
											variant="outline"
											size="sm"
											onClick={() =>
												removeArrayItem(projectIndex, "description", descIndex)
											}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>

							<div>
								<div className="flex justify-between items-center mb-2">
									<Label>Technologies</Label>
									<Button
										variant="outline"
										size="sm"
										onClick={() => addArrayItem(projectIndex, "tech")}
									>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
								{project.tech.map((technology, techIndex) => (
									<div key={techIndex} className="flex gap-2 mb-2">
										<Input
											value={technology}
											onChange={(e) =>
												updateArrayField(
													projectIndex,
													"tech",
													techIndex,
													e.target.value
												)
											}
											placeholder="Technology"
										/>
										<Button
											variant="outline"
											size="sm"
											onClick={() =>
												removeArrayItem(projectIndex, "tech", techIndex)
											}
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
