import { School2 } from "lucide-react";

type EducationItem = {
	degree: string;
	institution: string;
	year: string;
	gpa?: string; // optional if some entries don't have it
};

type EducationProps = {
	schools: EducationItem[];
};

export function Education({ schools }: EducationProps) {
	return (
		<section id="education" className="py-12 px-4 max-w-3xl mx-auto">
			<h2 className="flex items-center justify-center gap-2 text-4xl font-extrabold text-center mb-16 text-foreground">
				<School2 /> Education
			</h2>

			<div className="space-y-4">
				{schools.map((school, idx) => (
					<div key={idx} className="p-4 border rounded-md shadow-sm">
						<h3 className="font-medium text-lg text-foreground">
							{school.degree}
						</h3>
						<p className="text-sm text-muted-foreground">
							{school.institution} — {school.year}
						</p>
						{school.gpa && (
							<p className="text-sm text-muted-foreground">
								Score: {school.gpa}
							</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
