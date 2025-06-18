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
			href: "https://github.com/Popo047/",
			icon: Github,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/soham-debnath-97597216b/",
			icon: Linkedin,
		},
		{
			label: "Email",
			href: "mailto:sanchay2234@gmail.com",
			icon: Mail,
		},
		// ] satisfies SocialLink[], ?
	] as SocialLink[],
};
