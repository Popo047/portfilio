import React from "react";

interface Hobbies {
	items: string[];
}

export function Hobbies({ items }: Hobbies) {
	return (
		<section id="hobbies" className="px-4 max-w-3xl mx-auto py-12">
			<h2 className="text-4xl font-extrabold text-center mb-12 text-foreground">
				Hobbies
			</h2>

			<div className="flex flex-wrap gap-3 justify-center">
				{items.map((hobby, index) => (
					<span
						key={index}
						className="px-4 py-2 bg-muted text-sm rounded-full text-foreground border hover:shadow-sm transition"
					>
						{hobby}
					</span>
				))}
			</div>
		</section>
	);
}
