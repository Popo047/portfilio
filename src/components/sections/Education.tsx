import { School2 } from "lucide-react";
import { ColourfulText } from "../ui/colourful-text";
import { Timeline } from "../ui/timeline";

type EducationItem = {
	degree: string;
	institution: string;
	year: string;
	gpa: string; // optional if some entries don't have it
};

type EducationProps = {
	schools: EducationItem[];
};

export function Education({ schools }: EducationProps) {
	return (
		<section id="education" className="py-12 px-4 max-w-3xl mx-auto">
			<h2 className="text-3xl flex  items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mb-16">
				<School2 className="mr-2" /> <ColourfulText text="Education" />
			</h2>

			<div className="space-y-4">
				{/* {schools.map((school, idx) => (
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
				))} */}
				<Timeline education={schools} />
			</div>
		</section>
	);
}
