"use client";

import { Bell, Home, Settings, User } from "lucide-react";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@craftdotui/craftui/components/tabs";
import type { Transition } from "motion/react";

export default function TabsCustomIcons() {
	const variants = {
		initial: { opacity: 0, scale: 0.95 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	};

	const transition: Transition = { duration: 0.25, ease: "easeInOut" };

	return (
		<div>
			<Tabs defaultTab="home" instanceId="tabs-custom-icons">
				<TabList>
					<Tab value="home" icon={<Home className="h-4 w-4" />}>
						Home
					</Tab>
					<Tab value="profile" icon={<User className="h-4 w-4" />}>
						Profile
					</Tab>
					<Tab
						value="notifications"
						icon={<Bell className="h-4 w-4" />}
					>
						Notifications
					</Tab>
					<Tab
						value="settings"
						icon={<Settings className="h-4 w-4" />}
					>
						Settings
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel
						value="home"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">Home content</div>
					</TabPanel>
					<TabPanel
						value="profile"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">Profile content</div>
					</TabPanel>
					<TabPanel
						value="notifications"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">
							Notifications content
						</div>
					</TabPanel>
					<TabPanel
						value="settings"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">Settings content</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}
