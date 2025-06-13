import { Github, Linkedin, Mail } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface SocialLink {
	label: string;
	href: string;
	icon: LucideIcon;
}

export const siteConfig = {
	socialLinks: [
		{
			label: "GitHub",
			href: "https://github.com/yourusername",
			icon: Github,
		},
		{
			label: "LinkedIn",
			href: "https://linkedin.com/in/yourusername",
			icon: Linkedin,
		},
		{
			label: "Email",
			href: "mailto:you@example.com",
			icon: Mail,
		},
		// ] satisfies SocialLink[], ?
	] as SocialLink[],
};
