type ExperienceItem = {
	role: string;
	company: string;
	date: string;
	description: string;
	highlights: string[];
};

type ExperienceProps = {
	items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
	return (
		<section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
			<h2 className="text-2xl font-semibold text-center mb-8">Experience</h2>
			<div className="space-y-6">
				{items.map((exp, idx) => (
					<div
						key={idx}
						className="border p-4 rounded-md shadow-sm transition-all duration-300 hover:ring "
					>
						<h3 className="font-medium text-lg">
							{exp.role} @ {exp.company}
						</h3>
						<p className="text-sm text-muted-foreground">{exp.date}</p>
						<p className="text-sm mt-2">{exp.description}</p>
						<ul className="list-disc  list-inside space-y-1 text-sm text-muted-foreground ">
							{exp.highlights.map((item, index) => (
								<li className="hover:text-black" key={index}>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
