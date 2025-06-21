"use client";

import { Briefcase, BriefcaseBusiness } from "lucide-react";
import { ColourfulText } from "../ui/colourful-text";
import { Meteors } from "../ui/meteors";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type ExperienceItem = {
	role: string;
	company: string;
	date: string;
	description: string;
	highlights: string[];
};

type ExperienceProps = {
	items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="experience" className="py-12 px-4 max-w-5xl mx-auto">
			<h2 className="text-2xl flex items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-10 font-sans mb-16">
				<BriefcaseBusiness className="w-8 h-8 text-primary mr-2" />
				<ColourfulText text="Experience" />
			</h2>

			<div className=" border-l-2 border-muted pl-6 space-y-12">
				{items.map((exp, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
						className="relative group"
					>
						<div className="relative overflow-hidden bg-muted/20 backdrop-blur-sm p-6 rounded-xl shadow-md transition-transform group-hover:scale-[1.02] border border-white/10">
							{/* Meteor Effect Background */}
							{mounted && (
								<Meteors
									number={10}
									className="absolute inset-0 z-0 opacity-20"
								/>
							)}

							<div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center">
								<h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
									<Briefcase className="w-5 h-5 text-primary" />
									{exp.role}
									<span className="font-normal text-muted-foreground ml-2">
										@ {exp.company}
									</span>
								</h3>
								<p className="text-md text-muted-foreground mt-2 sm:mt-0">
									{exp.date}
								</p>
							</div>

							<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
								{exp.description}
							</p>

							<ul className="mt-4 list-disc list-inside space-y-1 text-sm text-muted-foreground">
								{exp.highlights.map((item, i) => (
									<li
										key={i}
										className="hover:text-foreground transition-colors"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
