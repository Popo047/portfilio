type Sections =
	| "about"
	| "projects"
	| "skills"
	| "education"
	| "testimonials"
	| "experience"
	| "hobbies"
	| "contacts";
type AboutProps = {
	name: string;
	content: string;
};

type ProjectsProps = {
	projects: {
		title: string;
		description: string[];
		tech: string[];
		period: string;
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
		gpa: string;
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
		highlights: string[];
	}[];
};

type ContactProps = {
	email: string;
	socials?: {
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
};

type HobbiesProps = {
	items: string[];
};

type SectionProps =
	| AboutProps
	| ProjectsProps
	| SkillsProps
	| EducationProps
	| TestimonialsProps
	| ExperienceProps
	| ContactProps
	| HobbiesProps;

export interface HomeSections {
	type: Sections;
	props: SectionProps;
}

export const homeSections: HomeSections[] = [
	{
		type: "about",
		props: {
			name: "Soham Debnath",
			content:
				"I'm a Senior Frontend Developer with a strong passion for building scalable, performant web applications using Next.js, React, TypeScript, and TailwindCSS. I've architected and built multiple production apps end-to-end, and enjoy mentoring, optimizing UI/UX, and writing clean, modular code.",
		},
	},
	{
		type: "skills",
		props: {
			skillGroups: [
				{
					category: "Langauges",
					skills: ["Typescript", "Javascript"],
				},
				{
					category: "Frontend",
					skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ShadCN"],
				},
				{
					category: "Backend",
					skills: ["Node.js", "Express", "MongoDB"],
				},
				{
					category: "Tools",
					skills: ["Git", "Postman", "Vercel"],
				},
			],
		},
	},
	{
		type: "experience",
		props: {
			items: [
				{
					role: "Senior Frontend Developer",
					company: "Decimal Point Analytics",
					date: "Sept 2021 – Present",
					description:
						"Worked as a Frontend developer, building and maintaining scalable applications using NextJs, Tailwind",
					highlights: [
						"Built 4 projects from scratch (PDFQuery, EazyData, SmartPipe, DocX)",
						"Designed scalable frontend architecture with reusable components",
						"Integrated OAuth 2.0 across all products",
						"Created responsive UIs with TailwindCSS",
						"Mentored developers in frontend best practices",
						"Developed Node.js + Express email microservice",
						"Improved performance using Lighthouse and code cleanup",
						"Implemented Cypress E2E and component testing",
					],
				},
			],
		},
	},
	{
		type: "projects",
		props: {
			projects: [
				{
					title: "EazyData.ai",
					period: "Sept. 2024 - Present",
					tech: [
						"Next.js 14",
						"TypeScript",
						"TailwindCSS",
						"Shadcn",
						"Zustand",
						"Node.js",
					],
					link: "https://eazydata.ai",
					description: [
						"Frontend for a data migration and cleansing platform with real-time updates",
						"Parallel routing reduced load time by 40%, RAM usage by 25%",
						"Custom hooks like `useAxios` cut API boilerplate by 60%",
						"Lightweight, modular table reduced dependency size",
					],
				},
				{
					title: "PDFQuery",
					tech: [
						"Next.js 14",
						"TypeScript",
						"TailwindCSS",
						"Zustand",
						"Websockets",
						"Sentry",
					],
					link: "https://pdfquery.ai/",

					period: "Jan 2024 – Feb-2025",
					description: [
						"PDF summarization and Q&A platform with real-time WebSocket streaming",
						"Mobile-first UI with animations",
						"Implemented server-side pages and Zustand state management",
						"Integrated Sentry and Cypress for testing & debugging",
					],
				},
				{
					title: "Infopulse",
					tech: ["Javascript", "Material UI", "Zustand"],
					link: "https://infopulse.ai/",
					period: "Sept 2024 – Present",
					description: [
						"InfoPulse is an online portal which has been developed to scrape news from different sources all around the Globe and provides users an entryway to a variety of information.",
						"Heavy UI with MUI",
					],
				},
				{
					title: "OauthV2.0",
					tech: ["Next.js 14", "TypeScript", "TailwindCSS", "Zustand"],
					// link: "https://pdfquery.ai/",

					period: "Jan 2024 – Present",
					description: [
						"Robust Authentication System for tenants for products",
					],
				},
			],
		},
	},

	{
		type: "education",
		props: {
			schools: [
				{
					degree: "B.Tech in Computer Science and Engineering",
					institution: "Adamas University",
					year: "August 2021",
					gpa: "7.44",
				},
				{
					degree: "Senior Secondary School ( 12th Standard )",
					institution: "KCP Siddhartha Adarsh Residential Public School",
					year: "July 2015",
					gpa: "7.8",
				},
				{
					degree: "High School ( 10th Standard )",
					institution: "KCP Siddhartha Adarsh Residential Public School",
					year: "July 2013",
					gpa: "9.2",
				},
			],
		},
	},
	{
		type: "testimonials",
		props: {
			testimonials: [
				{
					name: "Shubhendu Verma",
					quote:
						"I have worked with Soham during his time as a frontend developer, and it was a great experience. He picked up Next.js and Tailwind CSS quickly and applied them effictively in real projects. Soham's curiosity and eagerness to learn and openness to feedback made working with him smooth and enjoyable.  He consistently delivered clean and responsive UIs and showed solid growth throughout, if you are looking for someone adaptable, quick to learn, and genuinely focussed on improving - Soham will be a great addition to your team.",
					role: "Senior Team Lead, Smartcloud ISFC",
				},
			],
		},
	},

	{
		type: "hobbies",
		props: {
			items: [
				"Building PCs",
				"Reading Finctonal Novels",
				"Playing games",
				"Reselling electronic goods",
			],
		},
	},

	{
		type: "contacts",
		props: {
			email: "sanchay2234@gmail.com",
			socials: {
				github: "https://github.com/Popo047/",
				linkedin: "https://www.linkedin.com/in/soham-debnath-97597216b/",
				twitter: "https://twitter.com/soham_dev",
			},
		},
	},
];
