"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import EazyData from "@/assets/images/eazydata.png";
import PdfQuery from "@/assets/images/pdfquery.png";
import Infopulse from "@/assets/images/infopulse.png";
import OauthV2 from "@/assets/images/oauthv2.png";

interface ProjectCardProps {
	title: string;
	description: string[];
	tech: string[];
	period: string;
	link?: string;
}

interface ProjectCardListProps {
	projects: ProjectCardProps[];
}

export function ProjectCard({ projects }: ProjectCardListProps) {
	const [active, setActive] = useState<(typeof projects)[number] | null>(null);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	const ImageMapping: Record<string, StaticImageData> = {
		"EazyData.ai": EazyData,
		PDFQuery: PdfQuery,
		Infopulse: Infopulse,
		"OauthV2.0": OauthV2,
	};

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActive(null);
		};

		document.body.style.overflow = active ? "hidden" : "auto";
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	useOutsideClick(ref as any, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{active && (
					<div className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6">
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px] max-h-screen md:max-h-[90%] h-auto flex flex-col bg-white dark:bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<Image
									width={500}
									height={200}
									src={ImageMapping[active.title]}
									alt={active.title}
									className="w-full h-48 sm:h-64 object-cover object-top"
								/>
							</motion.div>

							<div className="p-4 flex flex-col gap-2 overflow-auto">
								<motion.h3
									layoutId={`title-${active.title}-${id}`}
									className="text-xl font-bold text-neutral-700 dark:text-neutral-200"
								>
									{active.title}
								</motion.h3>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									{active.period}
								</p>

								<div className="flex flex-wrap gap-2">
									{active.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
										>
											{tech}
										</span>
									))}
								</div>

								<ul className="list-disc pl-4 text-neutral-700 dark:text-neutral-300 text-sm mt-4 space-y-2 max-h-40 overflow-auto">
									{active.description.map((line, idx) => (
										<li key={idx}>{line}</li>
									))}
								</ul>

								<a
									href={active.link}
									target="_blank"
									className="mt-6 self-start px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
								>
									Visit Site
								</a>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			<ul className="max-w-3xl mx-auto w-full space-y-4">
				{projects.map((project) => (
					<motion.li
						layoutId={`card-${project.title}-${id}`}
						key={`card-${project.title}-${id}`}
						onClick={() => setActive(project)}
						className="flex flex-col md:flex-row items-start justify-between gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer group"
					>
						<div className="flex items-start gap-4 w-full">
							<motion.div layoutId={`image-${project.title}-${id}`}>
								<Image
									width={64}
									height={64}
									src={ImageMapping[project.title]}
									alt={project.title}
									className="h-16 w-16 md:h-14 md:w-14 rounded-xl object-cover object-top"
								/>
							</motion.div>

							<div className="flex-1">
								<motion.h3
									layoutId={`title-${project.title}-${id}`}
									className="text-lg font-semibold text-neutral-800 dark:text-neutral-200"
								>
									{project.title}
								</motion.h3>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									{project.period}
								</p>
							</div>
						</div>

						<motion.button
							layoutId={`button-${project.title}-${id}`}
							className="self-start md:self-center px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-green-500 hover:text-white transition"
						>
							View
						</motion.button>
					</motion.li>
				))}
			</ul>
		</>
	);
}
