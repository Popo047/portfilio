import { Layers } from "lucide-react";
import { Badge } from "../ui/badge";

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
			<h2 className="flex items-center justify-center gap-2 text-4xl font-extrabold text-center mb-16 text-foreground">
				<Layers /> Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md bg-background space-y-4"
					>
						{/* Title and Tech Stack */}
						<div className="flex flex-wrap items-center gap-2">
							<h3 className="font-semibold text-lg text-foreground">
								{project.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<Badge
										key={i}
										variant="outline"
										className="text-xs hover:ring hover:scale-105 transition-all duration-300  cursor-pointer"
									>
										{tech}
									</Badge>
								))}
							</div>
						</div>

						{/* Description Points */}
						<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
							{project.description.map((point, i) => (
								<li
									key={i}
									className="hover:text-foreground/90 transition-colors"
								>
									{point}
								</li>
							))}
						</ul>

						{/* Optional Link */}
						{project.link && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-sm font-medium text-blue-500 hover:underline transition-transform duration-200 ease-in-out hover:translate-x-1"
							>
								🔗 View Project
							</a>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
