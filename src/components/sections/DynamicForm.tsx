"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Save, Eye } from "lucide-react";
import { AboutForm } from "../forms/about-form";
import { ProjectsForm } from "../forms/projects-form";
import { SkillsForm } from "../forms/skills-form";
import { ExperienceForm } from "../forms/experience-form";
import { ContactForm } from "../forms/contact-form";
import { FormConfig, SectionData, Sections } from "@/app/admin/types";

const defaultSectionData: SectionData = {
	about: { content: "", name: "" },
	projects: { projects: [] },
	skills: { skillGroups: [] },
	education: { schools: [] },
	testimonials: { testimonials: [] },
	experience: { items: [] },
	contacts: { email: "", socials: {} },
};

const formConfig: FormConfig = {
	about: {
		title: "About",
		description: "Personal introduction and summary",
		component: AboutForm,
	},
	projects: {
		title: "Projects",
		description: "Showcase your work and projects",
		component: ProjectsForm,
	},
	skills: {
		title: "Skills",
		description: "Technical and professional skills",
		component: SkillsForm,
	},
	education: {
		title: "Education",
		description: "Academic background and qualifications",
		component: () => <div>Education form coming soon...</div>,
	},
	testimonials: {
		title: "Testimonials",
		description: "Reviews and recommendations",
		component: () => <div>Testimonials form coming soon...</div>,
	},
	experience: {
		title: "Experience",
		description: "Work history and professional experience",
		component: ExperienceForm,
	},
	contacts: {
		title: "Contact",
		description: "Contact information and social links",
		component: ContactForm,
	},
};

interface DynamicFormProps {
	onSave: (data: SectionData) => void;
}

export function DynamicForm({ onSave }: DynamicFormProps) {
	const [activeSections, setActiveSections] = useState<Sections[]>(["about"]);

	const [sectionData, setSectionData] = useState<SectionData>({
		...defaultSectionData,
	});

	const [activeTab, setActiveTab] = useState<Sections>(
		activeSections[0] || "about"
	);

	const addSection = (section: Sections) => {
		if (!activeSections.includes(section)) {
			setActiveSections([...activeSections, section]);
			setActiveTab(section);
		}
	};

	const removeSection = (section: Sections) => {
		const newActiveSections = activeSections.filter((s) => s !== section);
		setActiveSections(newActiveSections);

		if (activeTab === section && newActiveSections.length > 0) {
			setActiveTab(newActiveSections[0]);
		}
	};

	const updateSectionData = <T extends Sections>(
		section: T,
		data: SectionData[T]
	) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		setSectionData((prev: any) => ({
			...prev,
			[section]: data,
		}));
	};

	const handleSave = () => {
		const filteredData = Object.fromEntries(
			activeSections.map((section) => [section, sectionData[section]])
		) as SectionData;

		onSave(filteredData);
	};

	const availableSections = (Object.keys(formConfig) as Sections[]).filter(
		(section) => !activeSections.includes(section)
	);

	const renderFormComponent = (section: Sections) => {
		switch (section) {
			case "about":
				return (
					<AboutForm
						data={sectionData.about}
						onChange={(data) => updateSectionData("about", data)}
					/>
				);
			case "projects":
				return (
					<ProjectsForm
						data={sectionData.projects}
						onChange={(data) => updateSectionData("projects", data)}
					/>
				);
			case "skills":
				return (
					<SkillsForm
						data={sectionData.skills}
						onChange={(data) => updateSectionData("skills", data)}
					/>
				);
			case "experience":
				return (
					<ExperienceForm
						data={sectionData.experience}
						onChange={(data) => updateSectionData("experience", data)}
					/>
				);
			case "contacts":
				return (
					<ContactForm
						data={sectionData.contacts}
						onChange={(data) => updateSectionData("contacts", data)}
					/>
				);
			case "education":
				return <div>Education form coming soon...</div>;
			case "testimonials":
				return <div>Testimonials form coming soon...</div>;
			default:
				return <div>Unknown section</div>;
		}
	};

	return (
		<div className="w-full max-w-4xl mx-auto p-6 space-y-6">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Portfolio Builder</CardTitle>
						<p className="text-sm text-muted-foreground mt-1">
							Create and customize your portfolio sections
						</p>
					</div>
					<div className="flex gap-2">
						<Button variant="outline" size="sm">
							<Eye className="h-4 w-4 mr-2" />
							Preview
						</Button>
						<Button onClick={handleSave} size="sm">
							<Save className="h-4 w-4 mr-2" />
							Save
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-2 mb-4">
						{activeSections.map((section) => (
							<Badge
								key={section}
								variant="secondary"
								className="flex items-center gap-1"
							>
								{formConfig[section].title}
								<button
									onClick={() => removeSection(section)}
									className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs"
								>
									×
								</button>
							</Badge>
						))}
					</div>

					{availableSections.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{availableSections.map((section) => (
								<Button
									key={section}
									variant="outline"
									size="sm"
									onClick={() => addSection(section)}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add {formConfig[section].title}
								</Button>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{activeSections.length > 0 && (
				<Tabs
					value={activeTab}
					onValueChange={(value) => setActiveTab(value as Sections)}
				>
					<TabsList className="flex flex-wrap gap-2 sm:space-x-4 sm:flex-nowrap w-full overflow-x-auto sm:overflow-visible transition-all duration-300 ease-in-out origin-left">
						{activeSections.map((section) => (
							<TabsTrigger
								key={section}
								value={section}
								className="transition-all duration-300 "
							>
								{formConfig[section].title}
							</TabsTrigger>
						))}
					</TabsList>

					{activeSections.map((section) => (
						<TabsContent key={section} value={section} className="mt-6">
							{renderFormComponent(section)}
						</TabsContent>
					))}
				</Tabs>
			)}
		</div>
	);
}
