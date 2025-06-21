"use client";
import { MessageCircle } from "lucide-react";
import { ColourfulText } from "../ui/colourful-text";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
type Testimonial = {
	name: string;
	quote: string;
	role?: string;
	image: StaticImageData;
};

type TestimonialsProps = {
	testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="testimonials" className="py-6 px-4 max-w-3xl mx-auto">
			<h2 className="text-3xl flex  items-center justify-center md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans mb-16">
				<MessageCircle className="mr-2" /> <ColourfulText text="Testimonials" />
			</h2>
			<div className="space-y-6">
				{mounted && <AnimatedTestimonials testimonials={testimonials} />}{" "}
			</div>
		</section>
	);
}
