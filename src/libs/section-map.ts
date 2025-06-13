// lib/section-map.ts
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sectionMap: Record<string, React.ComponentType<any>> = {
	hero: Hero,
	about: About,
	projects: Projects,
	contact: Contact,
	skills: Skills,
	experience: Experience,
	education: Education,
	testimonials: Testimonials,
};
