import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			"sm.ign.com",
			"cdn.example.com",
			"images.unsplash.com",
			"assets-prd.ignimgs.com",
			"images.unsplash.com",
		],
	},
};

export default nextConfig;
