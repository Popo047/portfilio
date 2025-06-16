import { Heart } from "lucide-react";

export function Footer() {
	return (
		<footer className="py-6 text-center text-sm text-muted-foreground border-t">
			<div className="flex justify-center items-center gap-1">
				<span>Made with</span>
				<Heart className="w-4 h-4 text-red-500" fill="currentColor" />
				<span>by Soham Debnath</span>
			</div>
		</footer>
	);
}
