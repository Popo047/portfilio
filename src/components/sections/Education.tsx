type EducationItem = {
	degree: string;
	institution: string;
	year: string;
};

type EducationProps = {
	schools: EducationItem[];
};

export function Education({ schools }: EducationProps) {
	return (
		<section id="education" className="py-16 px-4 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold text-center mb-8">Education</h2>
			<div className="space-y-4">
				{schools.map((school, idx) => (
					<div key={idx} className="p-4 border rounded-md shadow-sm">
						<h3 className="font-medium">{school.degree}</h3>
						<p className="text-sm text-muted-foreground">
							{school.institution} — {school.year}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
