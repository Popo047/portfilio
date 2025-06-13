type SkillGroup = {
	category: string;
	skills: string[];
};

type SkillsProps = {
	skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
	return (
		<section id="skills" className="py-8 px-4 max-w-4xl mx-auto">
			<h2 className="text-4xl font-extrabold text-center mb-16 text-foreground">
				Skills
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{skillGroups.map((group, index) => (
					<div
						key={index}
						className="border rounded-lg p-4 shadow-sm hover:scale-105 transition-all duration-150 hover:ring "
					>
						<h3 className="text-lg font-medium mb-2">{group.category}</h3>
						<ul className="flex flex-wrap gap-2">
							{group.skills.map((skill, idx) => (
								<li key={idx} className="bg-muted text-sm px-2 py-1 rounded-md">
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
