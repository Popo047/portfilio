"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Popo from "@/assets/images/popo.webp";
import { Spotlight } from "../ui/spotlight";

type AboutProps = {
	name: string;
	content: string;
};

export function About({ name, content }: AboutProps) {
	return (
		<>
			<motion.section
				id="about"
				className="h-screen py-32 px-6 mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
				initial={{ opacity: 0, y: 30, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				{" "}
				<Spotlight
					className="-top-40 left-0 md:-top-20 md:left-60"
					fill="white"
				/>
				<div className="text-center md:text-left space-y-8">
					<motion.h2
						className="text-5xl md:text-nowrap font-extrabold text-foreground drop-shadow-sm leading-tight"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						👋 Hi, I&apos;m <span className="text-primary">{name}</span>
					</motion.h2>

					{/* <motion.p
						className="text-muted-foreground text-xl font-medium leading-relaxed"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						{content}
					</motion.p> */}
					<TextGenerateEffect words={content} />
				</div>
				<motion.div
					className="relative mx-auto w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border shadow-xl"
					initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
					whileHover={{ scale: 1.04 }}
				>
					<Image
						src={Popo}
						alt={`${name} photo`}
						fill
						className="object-cover"
						priority
					/>
				</motion.div>
			</motion.section>
		</>
	);
}
