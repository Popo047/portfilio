// lib/home-config.ts

type Sections =
	| "about"
	| "projects"
	| "skills"
	| "education"
	| "testimonials"
	| "experience"
	| "contacts";
type AboutProps = {
	content: string;
};

type ProjectsProps = {
	projects: {
		title: string;
		description: string;
		link?: string;
	}[];
};

type SkillsProps = {
	skillGroups: {
		category: string;
		skills: string[];
	}[];
};

type EducationProps = {
	schools: {
		degree: string;
		institution: string;
		year: string;
	}[];
};

type TestimonialsProps = {
	testimonials: {
		name: string;
		quote: string;
		role: string;
	}[];
};

type ExperienceProps = {
	items: {
		role: string;
		company: string;
		date: string;
		description: string;
	}[];
};

type ContactProps = {
	email: string;
};

type SectionProps =
	| AboutProps
	| ProjectsProps
	| SkillsProps
	| EducationProps
	| TestimonialsProps
	| ExperienceProps
	| ContactProps;

interface HomeSections {
	type: Sections;
	props: SectionProps;
}

export const homeSections: HomeSections[] = [
	{
		type: "about",
		props: {
			content:
				"I'm a passionate developer who loves building web apps that are fast, beautiful, and easy to use.",
		},
	},
	{
		type: "skills",
		props: {
			skillGroups: [
				{
					category: "Frontend",
					skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ShadCN"],
				},
				{
					category: "Backend",
					skills: ["Node.js", "Express", "MongoDB", "Prisma"],
				},
				{
					category: "Tools",
					skills: ["Git", "Postman", "Vercel", "Figma"],
				},
			],
		},
	},
	{
		type: "experience",
		props: {
			items: [
				{
					role: "Frontend Developer",
					company: "Tech Inc.",
					date: "2022 – Present",
					description: "Worked on reusable component libraries using ShadCN.",
				},
			],
		},
	},
	{
		type: "projects",
		props: {
			projects: [
				{
					title: "Portfolio Website",
					description: "A personal website to showcase my work and blogs.",
					link: "https://soham.dev",
				},
				{
					title: "EazyData.ai",
					description:
						"A no-code data pipeline builder built with Next.js and Tailwind.",
				},
			],
		},
	},

	{
		type: "education",
		props: {
			schools: [
				{
					degree: "B.Tech CSE",
					institution: "IIT Delhi",
					year: "2019",
				},
			],
		},
	},
	{
		type: "testimonials",
		props: {
			testimonials: [
				{
					name: "Alice Kumar",
					quote:
						"Soham is a fantastic engineer who delivers quickly and communicates clearly.",
					role: "Team Lead, EazyData.ai",
				},
				{
					name: "Alice Kumar",
					quote:
						"Soham is a fantastic engineer who delivers quickly and communicates clearly.",
					role: "Team Lead, EazyData.ai",
				},
				{
					name: "Alice Kumar",
					quote:
						"Soham is a fantastic engineer who delivers quickly and communicates clearly.",
					role: "Team Lead, EazyData.ai",
				},
			],
		},
	},

	{
		type: "contacts",
		props: {
			email: "soham@example.com",
		},
	},
];
