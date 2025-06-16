import { Briefcase, BriefcaseBusiness } from "lucide-react";

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
		<section id="experience" className="py-12 px-4 max-w-5xl mx-auto">
			<h2 className="flex items-center justify-center gap-2 text-4xl font-extrabold text-center mb-16 text-foreground">
				<BriefcaseBusiness className="w-8 h-8 text-primary" />
				Experience
			</h2>

			<div className="relative border-l-2 border-muted pl-6 space-y-12">
				{items.map((exp, idx) => (
					<div key={idx} className="relative group">
						<span className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full ring-4 ring-background" />

						<div className="bg-muted/20 backdrop-blur-sm p-6 rounded-xl shadow-md transition-transform group-hover:scale-[1.02]">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
								<h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
									<Briefcase className="w-5 h-5 text-primary" />
									{exp.role}
									<span className="font-normal text-muted-foreground ml-2">
										@ {exp.company}
									</span>
								</h3>
								<p className="text-md text-muted-foreground mt-2 sm:mt-0">
									{exp.date}
								</p>
							</div>

							<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
								{exp.description}
							</p>

							<ul className="mt-4 list-disc list-inside space-y-1 text-sm text-muted-foreground">
								{exp.highlights.map((item, index) => (
									<li
										key={index}
										className="hover:text-foreground transition-colors"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
