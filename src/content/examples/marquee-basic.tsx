import React from "react";
import { Icons } from "@/components/website/icons";
import Marquee from "@/content/components/marquee";

const data = [
	{
		name: "React",
		icon: Icons.react,
	},
	{
		name: "Next",
		icon: Icons.next,
	},
	{
		name: "Remix",
		icon: Icons.remix,
	},
	{
		name: "Svelte",
		icon: Icons.svelte,
	},
	{
		name: "Vue",
		icon: Icons.vue,
	},
	{
		name: "Nuxt",
		icon: Icons.nuxt,
	},
	{
		name: "Astro",
		icon: Icons.astro,
	},
];

export default function MarqueeBasic() {
	return (
		<Marquee
			duration={20}
			repeat={2}
			direction="left"
			pauseOnHover
			className="w-[500px]"
		>
			{data.map((item, index) => (
				<div
					key={`${item.name}-${index}`}
					className="flex flex-col items-center"
				>
					<item.icon className="h-14 w-14 px-4 dark:invert" />
				</div>
			))}
		</Marquee>
	);
}
