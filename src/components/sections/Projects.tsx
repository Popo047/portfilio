// components/sections/Projects.tsx

type Project = {
	title: string;
	description: string;
	link?: string;
};

type ProjectsProps = {
	projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
	return (
		<section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
			<h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
					>
						<h3 className="font-medium text-lg">{project.title}</h3>
						<p className="text-sm text-muted-foreground mt-2">
							{project.description}
						</p>
						{project.link && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-blue-500 mt-2 inline-block hover:underline"
							>
								View Project
							</a>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
