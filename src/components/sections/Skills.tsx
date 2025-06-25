"use client";
import { Hammer } from "lucide-react";
import { ColourfulText } from "../ui/colourful-text";
import { Meteors } from "../ui/meteors";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type SkillGroup = {
	category: string;
	skills: string[];
};

type SkillsProps = {
	skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="skills" className="py-12 px-4 max-w-5xl mx-auto">
			<h2 className="text-3xl flex items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-10 font-sans mb-16">
				<Hammer className="w-6 h-6 text-primary mr-2" />
				<ColourfulText text="Skills" />
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{skillGroups.map((group, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="relative  overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg group"
					>
						{mounted && (
							<Meteors
								number={10}
								className="absolute inset-0 z-0 opacity-20"
							/>
						)}
						<div className=" z-10">
							<h3 className="text-lg font-semibold mb-3 ">{group.category}</h3>
							<ul className="flex flex-wrap gap-2">
								{group.skills.map((skill, idx) => (
									<motion.li
										key={idx}
										whileHover={{ scale: 1.05 }}
										transition={{ type: "spring", stiffness: 300 }}
										className="bg-white/10 border border-white/20  text-sm px-3 py-1 rounded-md backdrop-blur-sm shadow-sm "
									>
										{skill}
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
