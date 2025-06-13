import type React from "react";
export type Sections =
	| "about"
	| "projects"
	| "skills"
	| "education"
	| "testimonials"
	| "experience"
	| "contacts";

export type AboutProps = {
	content: string;
	name: string;
};

export type ProjectsProps = {
	projects: {
		title: string;
		description: string[];
		tech: string[];
		period: string;
		link?: string;
	}[];
};

export type SkillsProps = {
	skillGroups: {
		category: string;
		skills: string[];
	}[];
};

export type EducationProps = {
	schools: {
		degree: string;
		institution: string;
		year: string;
		gpa: string;
	}[];
};

export type TestimonialsProps = {
	testimonials: {
		name: string;
		quote: string;
		role: string;
	}[];
};

export type ExperienceProps = {
	items: {
		role: string;
		company: string;
		date: string;
		description: string;
		highlights: string[];
	}[];
};

export type ContactProps = {
	email: string;
	socials?: {
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
};

export type SectionData = {
	about: AboutProps;
	projects: ProjectsProps;
	skills: SkillsProps;
	education: EducationProps;
	testimonials: TestimonialsProps;
	experience: ExperienceProps;
	contacts: ContactProps;
};

export type FormConfig = {
	[K in Sections]: {
		title: string;
		description: string;
		component: React.ComponentType<{
			data: SectionData[K];
			onChange: (data: SectionData[K]) => void;
		}>;
	};
};
