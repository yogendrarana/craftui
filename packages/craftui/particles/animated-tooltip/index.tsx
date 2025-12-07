"use client";

import { AnimatedTooltip } from "@craftdotui/craftui/components/animated-tooltip";
import { Home, Settings, Mail, Calendar, Music, ImageIcon } from "lucide-react";

export default function AnimatedTooltipDemo() {
	const tooltips = [
		{
			id: "1",
			icon: <Home className="w-4 h-4 text-gray-500" />,
			label: "Home",
		},
		{
			id: "2",
			icon: <Settings className="w-4 h-4 text-gray-500" />,
			label: "Settings",
		},
		{
			id: "3",
			icon: <Mail className="w-4 h-4 text-gray-500" />,
			label: "Mail",
		},
		{
			id: "4",
			icon: <Calendar className="w-4 h-4 text-gray-500" />,
			label: "Calendar",
		},
		{
			id: "5",
			icon: <ImageIcon className="w-4 h-4 text-gray-500" />,
			label: "Photos",
		},
		{
			id: "6",
			icon: <Music className="w-4 h-4 text-gray-500" />,
			label: "Music",
		},
	];

	return (
		<div className="flex gap-2">
			{tooltips.map(({ id, icon, label }) => (
				<AnimatedTooltip key={id} label={label}>
					{icon}
				</AnimatedTooltip>
			))}
		</div>
	);
}
