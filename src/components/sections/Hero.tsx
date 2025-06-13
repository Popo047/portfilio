type HeroProps = {
	title: string;
	subtitle: string;
};

export function Hero({ title, subtitle }: HeroProps) {
	return (
		<section id="hero" className="py-20 text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
		</section>
	);
}
