"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
	const [enteredEmail, setEnteredEmail] = useState<string>("");
	const { push } = useRouter();
	const handleRedirect = () => {
		push(`/peeps/${enteredEmail}`);
	};
	return (
		<main className="mt-24 w-full h-screen">
			<div className=" flex flex-col items-center justify-center space-y-8">
				<Label>Enter your email</Label>
				<Input
					className="w-96"
					autoFocus
					value={enteredEmail}
					required
					placeholder="abc@gmail.com"
					onChange={(e) => setEnteredEmail(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleRedirect();
					}}
				/>
				<Button
					className="w-64 cursor-pointer"
					onClick={handleRedirect}
					disabled={enteredEmail.length === 0}
				>
					Save
				</Button>
			</div>
		</main>
	);
}
