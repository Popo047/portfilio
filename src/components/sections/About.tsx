type AboutProps = {
	name: string;
	content: string;
};

export function About({ content }: AboutProps) {
	return (
		<section id="about" className="py-16 px-4 max-w-3xl mx-auto text-center">
			<h2 className="text-4xl font-extrabold text-center mb-6 mt-12 text-foreground">
				About Me
			</h2>
			<p className="text-muted-foreground text-base leading-relaxed">
				{content}
			</p>
		</section>
	);
}
