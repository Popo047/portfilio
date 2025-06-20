"use client";
import { Layers } from "lucide-react";
import { ProjectCard } from "@/components/custom/Project-Card";
import { ColourfulText } from "../ui/colourful-text";

type Project = {
	title: string;
	description: string[];
	tech: string[];
	period: string;
	link?: string;
};

type ProjectsProps = {
	projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
	return (
		<section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
			<h2 className="text-2xl flex  items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mb-16">
				<Layers className="mr-2" /> <ColourfulText text="Projects" />
			</h2>
			<div className="">
				{/* <ul className="max-w-2xl mx-auto w-full gap-4"> */}
				<ProjectCard projects={projects} />
				{/* </ul> */}
			</div>
		</section>
	);
}

// might need it back

// <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 	{projects.map((project, idx) => (
// 		<div
// 			key={idx}
// 			className="rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md bg-background space-y-4"
// 		>
// 			{/* Title and Tech Stack */}
// 			<div className="flex flex-wrap items-center gap-2">
// 				<h3 className="font-semibold text-lg text-foreground">
// 					{project.title}
// 				</h3>
// 				<div className="flex flex-wrap gap-2">
// 					{project.tech.map((tech, i) => (
// 						<Badge
// 							key={i}
// 							variant="outline"
// 							className="text-xs hover:ring hover:scale-105 transition-all duration-300  cursor-pointer"
// 						>
// 							{tech}
// 						</Badge>
// 					))}
// 				</div>
// 			</div>

// 			{/* Description Points */}
// 			<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
// 				{project.description.map((point, i) => (
// 					<li
// 						key={i}
// 						className="hover:text-foreground/90 transition-colors"
// 					>
// 						{point}
// 					</li>
// 				))}
// 			</ul>

// 			{/* Optional Link */}
// 			{project.link && (
// 				<a
// 					href={project.link}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="inline-block text-sm font-medium text-blue-500 hover:underline transition-transform duration-200 ease-in-out hover:translate-x-1"
// 				>
// 					🔗 View Project
// 				</a>
// 			)}
// 		</div>
// 	))}
