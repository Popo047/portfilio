import { Hammer } from "lucide-react";

type SkillGroup = {
	category: string;
	skills: string[];
};

type SkillsProps = {
	skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
	return (
		<section id="skills" className="py-12 px-4 max-w-5xl mx-auto">
			<h2 className="text-4xl font-extrabold text-center mb-16 text-foreground flex items-center justify-center gap-2">
				<Hammer className="w-6 h-6 text-primary" />
				Skills
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{skillGroups.map((group, index) => (
					<div
						key={index}
						className="bg-white/6 border backdrop-blur-2xl rounded-xl p-5 shadow hover:shadow-md transition-transform hover:-translate-y-1"
					>
						<h3 className="text-lg font-semibold mb-3">{group.category}</h3>
						<ul className="flex flex-wrap gap-2">
							{group.skills.map((skill, idx) => (
								<li
									key={idx}
									className="bg-white/4 text-sm px-3 py-1 rounded-md border"
								>
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
