import { Palette } from "lucide-react";
import React from "react";
import { ColourfulText } from "../ui/colourful-text";
import { MovinBorderButton } from "../ui/moving-border";

interface Hobbies {
	items: string[];
}

export function Hobbies({ items }: Hobbies) {
	return (
		<section id="hobbies" className="px-4 max-w-3xl mx-auto py-12">
			<h2 className="text-2xl flex  items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mb-16">
				<Palette className="mr-2" /> <ColourfulText text="Hobbies" />
			</h2>

			<div className="flex flex-wrap gap-4 justify-center">
				{items.map((hobby, index) => (
					<MovinBorderButton
						key={index}
						borderRadius="1.75rem"
						className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
					>
						{hobby}
					</MovinBorderButton>
				))}
			</div>
		</section>
	);
}
