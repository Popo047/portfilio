// lib/section-map.ts
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Hobbies } from "@/components/sections/Hobbies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sectionMap: Record<string, React.ComponentType<any>> = {
	about: About,
	projects: Projects,
	contacts: Contact,
	skills: Skills,
	experience: Experience,
	testimonials: Testimonials,
	education: Education,
	hobbies: Hobbies,
};
