"use client";

import { useRouter } from "next/navigation";

// type ErrorType = {
// 	error: string;
// 	reset: () => void;
// };

//Please modify this component to catch potential connector page break errors (if any) - 12th Sept
export default function ConnectionSubtypeCreationError() {
	const { push } = useRouter();
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="text-center">
				<p className="mb-4 text-xl font-semibold text-gray-800">
					Something Went Wrong !
				</p>
				<button
					onClick={() => push("/peeps")}
					className="block w-full text-center rounded-lg border border-transparent  px-6 py-3 text-base leading-6 font-medium text-white  focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"
				>
					RESET
				</button>
			</div>
		</div>
	);
}
