import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Soham Debnath | Full-Stack Developer Portfolio",
	description:
		"Explore the professional portfolio of Soham Debnath — showcasing projects, skills, and experience in Next.js, TypeScript, Tailwind, and Node.js.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased py-2`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
