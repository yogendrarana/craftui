"use client";

import { Dock, DockItem } from "../components/dock";
import { Home, Settings, Mail, Calendar, Music, ImageIcon } from "lucide-react";

export default function DockBasic() {
	const dockItems = [
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
		<Dock>
			{dockItems.map(({ id, icon, label }) => (
				<DockItem key={id} icon={icon} label={label} />
			))}
		</Dock>
	);
}
