type Testimonial = {
	name: string;
	quote: string;
	role?: string;
};

type TestimonialsProps = {
	testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
	return (
		<section id="testimonials" className="py-16 px-4 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold text-center mb-8">Testimonials</h2>
			<div className="space-y-6">
				{testimonials.map((item, idx) => (
					<div
						key={idx}
						className="p-4 border-l-4 border-primary bg-muted rounded-md"
					>
						<p className="italic">“{item.quote}”</p>
						<p className="mt-2 font-medium">
							— {item.name}
							{item.role ? `, ${item.role}` : ""}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
