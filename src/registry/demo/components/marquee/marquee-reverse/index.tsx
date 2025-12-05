"use client";

import React from "react";
import Marquee from "@/registry/components/marquee";

const team = [
	{
		name: "Jack Thompson",
		role: "Product Designer",
		id: 1,
	},
	{
		name: "Maria Rodriguez",
		role: "Marketing Director",
		id: 2,
	},
	{
		name: "Alex Chen",
		role: "Tech Lead",
		id: 3,
	},
	{
		name: "Sarah Wilson",
		role: "Startup Founder",
		id: 4,
	},
	{
		name: "David Lee",
		role: "Creative Director",
		id: 5,
	},
	{
		name: "Nina Patel",
		role: "UX Researcher",
		id: 6,
	},
];

export default function MarqueeReverse() {
	return (
		<Marquee
			duration={35}
			repeat={2}
			direction="right"
			gap={12}
			className="w-[1000px] py-8"
			pauseOnHover
		>
			{team.map((item) => (
				<div
					key={item.id}
					className="h-40 w-40 border rounded-md p-2 flex flex-col items-center justify-center"
				>
					<span className="text-gray-500 text-sm text-center">
						{item.name}
					</span>
					<span className="mt-1 text-sm text-center">
						{item.role}
					</span>
				</div>
			))}
		</Marquee>
	);
}
