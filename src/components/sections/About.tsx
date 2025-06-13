// components/sections/About.tsx

type AboutProps = {
	content: string;
};

export function About({ content }: AboutProps) {
	return (
		<section id="about" className="py-16 px-4 max-w-3xl mx-auto text-center">
			<h2 className="text-2xl font-semibold mb-4">About Me</h2>
			<p className="text-muted-foreground text-base leading-relaxed">
				{content}
			</p>
		</section>
	);
}
