import { Mail, Github, Linkedin, Twitter } from "lucide-react";

type ContactProps = {
	email: string;
	socials?: {
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
};

export function Contact({ email, socials = {} }: ContactProps) {
	return (
		<section
			id="contact"
			className="py-20 px-4 max-w-3xl mx-auto text-center space-y-6"
		>
			<h2 className="text-3xl font-bold text-foreground">Let&apos;s Connect</h2>

			<p className="text-muted-foreground max-w-md mx-auto">
				Feel free to reach out via email or connect with me on these platforms.
			</p>

			<div className="flex justify-center items-center gap-4 flex-wrap mt-4">
				<a
					href={`mailto:${email}`}
					className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
				>
					<Mail className="w-5 h-5" />
					<span className="underline underline-offset-2">{email}</span>
				</a>
			</div>

			<div className="flex justify-center items-center gap-6 mt-6">
				{socials.github && (
					<a
						href={socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary transition-colors"
					>
						<Github className="w-6 h-6" />
					</a>
				)}
				{socials.linkedin && (
					<a
						href={socials.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary transition-colors"
					>
						<Linkedin className="w-6 h-6" />
					</a>
				)}
				{socials.twitter && (
					<a
						href={socials.twitter}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary transition-colors"
					>
						<Twitter className="w-6 h-6" />
					</a>
				)}
			</div>
		</section>
	);
}
