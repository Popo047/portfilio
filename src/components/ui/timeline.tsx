"use client";
import { useScroll, useTransform, motion, Variants } from "motion/react";
import React, { FC, useEffect, useRef, useState } from "react";

interface School {
	degree: string;
	institution: string;
	year: string;
	gpa: string;
}

interface TimelineProps {
	education: School[];
}

export const Timeline: FC<TimelineProps> = ({ education }) => {
	const fadeInUp: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 15,
			},
		},
	};

	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, []);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	const timelineData = education.map((school: School) => ({
		title: school.degree,
		content: (
			<div className="space-y-1 text-neutral-800 dark:text-neutral-300">
				<p className="font-medium">{school.institution}</p>
				<p className="text-sm">{school.year}</p>
				<p className="text-sm">GPA: {school.gpa}</p>
			</div>
		),
	}));

	return (
		<div
			className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
			ref={containerRef}
		>
			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{timelineData.map((item, index) => (
					<motion.div
						key={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.3 }}
						variants={fadeInUp}
						className="flex justify-start pt-10 md:pt-40 md:gap-10"
					>
						{/* Left marker + title (desktop) */}
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
								<motion.div
									className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
									whileHover={{ scale: 1.2 }}
									transition={{ duration: 0.3 }}
								/>
							</div>
							<h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
								{item.title}
							</h3>
						</div>

						{/* Right content */}
						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
								{item.title}
							</h3>
							{item.content}
						</div>
					</motion.div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
