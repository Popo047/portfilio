// app/peeps/[email]/page.tsx

import { sectionMap } from "@/libs/section-map";
import { HomeSections } from "@/libs/home-config";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getData(email: string): Promise<{ data: HomeSections[] }> {
	const res = await fetch(`${BASE_URL}/api?email=${email}`, {
		cache: "no-store",
	});
	return res.json();
}

export default async function Page({ params }: { params: { email: string } }) {
	const { data }: { data: HomeSections[] } = await getData(params.email);

	if (!data) {
		return (
			<div className="mt-24 flex w-full h-screen justify-center items-center">
				<div className="flex flex-col items-center space-y-4">
					<h2 className="text-xl font-semibold text-red-600">
						Something went wrong
					</h2>
					<p className="text-gray-600">
						We couldn’t load the data for this user.
					</p>
					<a
						href="/peeps"
						className="text-blue-600 hover:underline hover:text-blue-800 transition"
					>
						← Try again
					</a>
				</div>
			</div>
		);
	}

	return (
		<main>
			{data.map((section, index) => {
				const SectionComponent = sectionMap[section.type];
				if (!SectionComponent) return null;

				return <SectionComponent key={index} {...section.props} />;
			})}
		</main>
	);
}
