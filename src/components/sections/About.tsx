type AboutProps = {
	name: string;
	content: string;
};

export function About({ name, content }: AboutProps) {
	return (
		<section
			id="about"
			className="py-20 px-4 mt-12 max-w-3xl mx-auto text-center animate-fade-in"
		>
			<h2 className="text-4xl font-bold mb-4 text-foreground">
				👋 Hi, I&apos;m <span className="text-primary">{name}</span>
			</h2>
			<p className="text-muted-foreground text-lg leading-relaxed">{content}</p>
		</section>
	);
}
