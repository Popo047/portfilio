// components/sections/Contact.tsx

type ContactProps = {
	email: string;
};

export function Contact({ email }: ContactProps) {
	return (
		<section id="contact" className="py-16 px-4 text-center">
			<h2 className="text-2xl font-semibold mb-4">Contact</h2>
			<p className="text-muted-foreground mb-2">
				Feel free to reach out via email:
			</p>
			<a
				href={`mailto:${email}`}
				className="text-blue-500 underline hover:text-blue-700"
			>
				{email}
			</a>
		</section>
	);
}
