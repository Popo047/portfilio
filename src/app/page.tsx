import { homeSections } from "@/libs/home-config";
import { sectionMap } from "@/libs/section-map";

export default function HomePage() {
	return (
		<main>
			{homeSections.map((section, index) => {
				const SectionComponent = sectionMap[section.type];
				if (!SectionComponent) return null;

				return <SectionComponent key={index} {...section.props} />;
			})}
		</main>
	);
}
