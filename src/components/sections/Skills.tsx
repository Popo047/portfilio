import { Hammer } from "lucide-react";
import { ColourfulText } from "../ui/colourful-text";

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
			<h2 className="text-2xl flex  items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mb-16">
				<Hammer className="w-6 h-6 text-primary mr-2" />
				<ColourfulText text="Skills" />
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
